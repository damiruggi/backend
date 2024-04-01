import express from "express";
import usersManager from "./src/data/fs/UserManager.fs.js";
import productManager from "./src/data/fs/ProductsManager.fs.js";
import indexRouter from "./src/routers/index.router.js";
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

const create = async (req, res) => {
  try {
    const data = req.body;
    const one = await usersManager.create(data);
    return res.json({
      statusCode: 201,
      message: "CREATED ID: " + one.id,
    });
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message || "CODER API ERROR",
    });
  }
};

const update = async (req, res) => {
  try {
    const { uid } = req.params;
    const data = req.body;
    const one = await usersManager.update(uid, data);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message || "CODER API ERROR",
    });
  }
};

const destroy = async (req, res) => {
  try {
    const { uid } = req.params;
    const one = await usersManager.destroy(uid);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message || "CODER API ERROR",
    });
  }
};

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

server.post("/api/users", create);
server.put("/api/users/:uid", update);
server.delete("/api/users/:uid", destroy);

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

const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const one = await productManager.create(data);
    return res.json({
      statusCode: 201,
      message: "CREATED ID: " + one.id,
    });
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message || "CODER API ERROR",
    });
  }
};

const updateProduct = async (req, res) => {
    try {
      const { pid } = req.params;
      const data = req.body;
      const one = await productManager.update(pid, data); // Usar el método update en lugar de updateProduct
      return res.json({
        statusCode: 200,
        response: one,
      });
    } catch (error) {
      return res.json({
        statusCode: error.statusCode || 500,
        message: error.message || "CODER API ERROR",
      });
    }
  };
  
  const destroyProduct = async (req, res) => {
    try {
      const { pid } = req.params;
      const one = await productManager.destroy(pid); // Usar el método destroy en lugar de destroyProduct
      return res.json({
        statusCode: 200,
        response: one,
      });
    } catch (error) {
      return res.json({
        statusCode: error.statusCode || 500,
        message: error.message || "CODER API ERROR",
      });
    }
  };
  

// Ruta para obtener un usuario por su ID
server.get("/api/products/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const one = await productManager.readOne(pid);
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

server.post("/api/products", createProduct);
server.put("/api/products/:pid", updateProduct);
server.delete("/api/products/:pid", destroyProduct);

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);
