import express from "express";
import usersManager from "./data/fs/UserManager.fs.js";
import productManager from "./data/fs/ProductsManager.fs.js";
import indexRouter from "./src/router/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";

const server = express();
const port = 8080;
const ready = () => console.log("Servidor listo en el puerto " + port);

server.listen(port, ready);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Ruta para la página de inicio
server.get("/", async (req, res) => {
  try {
    return res.status(200).json({
      response: "API Conectada",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      response: "Error en la API",
      success: false,
    });
  }
});

// Ruta para obtener todos los usuarios o filtrarlos por rol
server.get("/api/users", async (req, res) => {
  try {
    const { role } = req.query;
    const all = await usersManager.read(role);
    if (all.length !== 0) {
      return res.status(200).json({
        response: all,
        role,
        success: true,
      });
    } else {
      const error = new Error("NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json({
      response: error.message,
      success: false,
    });
  }
});

// Ruta para obtener un usuario por su ID
server.get("/api/users/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const one = await usersManager.readOne(uid);
    if (one) {
      return res.status(200).json({
        response: one,
        success: true,
      });
    } else {
      const error = new Error("NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json({
      response: error.message,
      success: false,
    });
  }
});

server.get("/api/products", async (req, res) => {
  try {
    const { category } = req.query;
    const all = await productManager.read(category);
    if (all.length !== 0) {
      return res.status(200).json({
        response: all,
        category,
        success: true,
      });
    } else {
      const error = new Error("NOT FOUND");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode).json({
      response: error.message,
      success: false,
    });
  }
});

// Ruta para obtener un producto por su ID
server.get("/api/products/:pid", async (req, res) => {
  const productId = req.params.pid;

  try {
    // Buscar el producto por su ID
    const product = await productManager.readOne(productId);

    if (product) {
      // Enviar una respuesta con el producto encontrado
      res.status(200).json({
        statusCode: 200,
        response: product,
      });
    } else {
      // Enviar una respuesta indicando que el producto no fue encontrado
      res.status(404).json({
        statusCode: 404,
        response: null,
        message: "Producto no encontrado",
      });
    }
  } catch (error) {
    // Enviar una respuesta en caso de error
    console.error("Error al buscar el producto:", error);
    res.status(500).json({
      statusCode: 500,
      response: null,
      message: "Error al buscar el producto",
    });
  }
});


//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);