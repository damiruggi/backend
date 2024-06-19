import environment from "./src/utils/env.util.js";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import argsUtil from "./src/utils/args.util.js";
import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
import dbConnect from "./src/utils/dbConnect.util.js";

// http server
const server = express();
const port = environment.PORT || argsUtil.p;

const ready = async () => {
  console.log("server ready on port " + port);
  await dbConnect();
};
server.listen(port, ready);

// middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));
server.use(morgan("dev"));

// Asegúrate de que `SECRET_COOKIE` esté definido en tus variables de entorno
server.use(cookieParser(environment.SECRET_COOKIE));

server.use(
  session({
    secret: "clave dev",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false } // Ajusta esto según tu entorno
  })
);

// Inicialización de Passport
server.use(passport.initialize());
server.use(passport.session());

// Endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);

