import express from "express";
import usersManager from "./fs/UserManager.fs.js";
const server = express();
const port = 8080;
const ready = () => console.log("server ready on port " + port);
server.listen(port, ready);

server.use(express.urlencoded({ extended: true }));
server.get("/", async (requerimientos, respuesta) => {
  try {
    return respuesta.status(200).json({
      response: "API",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return respuesta.status(500).json({
      response: "API ERROR",
      success: false,
    });
  }
});

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



const app = express();
const managerFS = new ProductsManagerFS('fs/files/products.json');

// Ruta para buscar un producto por su ID
app.get('/api/products/:pid', (req, res) => {
  const productId = req.params.pid;

  // Buscar el producto por su ID
  const product = managerFS.readOne(productId);

  if (product) {
    // Enviar una respuesta con el producto encontrado
    res.status(200).json({
      statusCode: 200,
      response: product
    });
  } else {
    // Enviar una respuesta indicando que el producto no fue encontrado
    res.status(404).json({
      statusCode: 404,
      response: null,
      message: "Producto no encontrado"
    });
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});