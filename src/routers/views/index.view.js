import { Router } from "express";
import productsRouter from "./products.view.js";
import usersRouter from "./users.view.js";
import productManager from "../../data/fs/ProductsManager.fs.js";

const viewsRouter = Router();

viewsRouter.use("/products", productsRouter);
viewsRouter.use("/users", usersRouter);
viewsRouter.get("/", async (req, res, next) => {
  try {
    const products = await productManager.read();
    return res.render("index", { title: "HOME", products }); // Pasar productos al renderizar la vista
  } catch (error) {
    return next(error);
  }
});

export default viewsRouter;