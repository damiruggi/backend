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

//Chequeo que anda Mongo
console.log("Todas las variables de entorno" + process.env);
console.log(process.env.MONGO_URI);

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
server.use(morgan("dev"));

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);
