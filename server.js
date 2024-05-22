import "dotenv/config.js";
import express from "express";
import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import { createServer } from "http";
import { Server } from "socket.io";
import morgan from "morgan";
import { engine } from "express-handlebars";
import socketCb from "./src/routers/index.socket.js";
import __dirname from "./utils.js";
import dbConnect from "./src/utils/dbConnect.utils.js";
import session from "express-session";
import MongoStore from "connect-mongo";

//Chequeo que anda Mongo
//console.log("Todas las variables de entorno" + process.env);
//console.log(process.env.MONGO_URI);

const server = express();
const port = process.env.PORT || 9000;
const ready = async () => {
  console.log("server ready on port " + port);
  await dbConnect();
};
const nodeServer = createServer(server);
nodeServer.listen(port, ready);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));

//tcp server
const socketServer = new Server(nodeServer);
socketServer.on("connection", socketCb);

//template engine
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", __dirname + "/src/views");

//middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));
server.use(morgan("dev"));
server.use(
  session({
    /* file store */
    /*  
      store: new FileSession({
      path: "./src/data/fs/files/sessions",
      ttl: 60 * 60,
    }),
    */
    store: new MongoStore({ mongoUrl: process.env.MONGO_URI, ttl: 60 * 60 }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    //cookie: { maxAge: 60 * 60 * 1000 },
  })
);

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);

