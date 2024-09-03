import environment from "./src/utils/env.util.js";
import express from "express";
<<<<<<< HEAD
import cluster from "cluster";
import { cpus } from "os";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "express-compression";
//import morgan from "morgan"; // Asegúrate de importar morgan
import argsUtil from "./src/utils/args.util.js";
=======
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import argsUtil from "./src/utils/args.util.js";

>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
<<<<<<< HEAD
import winston from "./src/middlewares/winston.mid.js";
import swaggerOptions from "./src/config/swagger.js";
import swaggerJSDoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import options from "./src/config/swagger.js";

const port = environment.PORT || argsUtil.p;


if (cluster.isPrimary) {
  const numOfProc = cpus().length;

  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numOfProc; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });

} else {
  console.log(`Worker ${process.pid} started`);

  // http server
  const server = express();

  const ready = async () => console.log("Server ready on port " + port);

  // middlewares
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(express.static(__dirname + "/public"));
  server.use(winston);
  server.use(cookieParser(environment.SECRET_COOKIE));
  server.use(cors({ origin: true, credentials: true }));
  server.use(
    compression({
      brotli: { enabled: true, zlib: {} },
    })
  );
  const specs = swaggerJSDoc(swaggerOptions);
  server.use("/api/docs", serve, setup(specs));

  // endpoints
  server.use("/", indexRouter);
  server.use(errorHandler);
  server.use(pathHandler);

  // start server
  server.listen(port, ready);

  // handle worker errors
  process.on('uncaughtException', (err) => {
    console.error(`Uncaught exception: ${err.message}`);
    process.exit(1); // exit the worker to let cluster handle the restart
  });

  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1); // exit the worker to let cluster handle the restart
  });
}
=======

//http server
const server = express();
const port = environment.PORT || argsUtil.p;
const ready = async () => console.log("server ready on port " + port);
server.listen(port, ready);

//middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));
server.use(morgan("dev"));
server.use(cookieParser(environment.SECRET_COOKIE));
server.use(cors({ origin: true, credentials: true }));

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
