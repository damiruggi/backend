import { Router } from "express";
import productManager from "../../data/fs/ProductsManager.fs.js";

const productsRouter = Router();

productsRouter.get("/real", async (req, res, next) => {
  try {
    const products = await productManager.read();
    return res.render("products", { title: "PRODUCTS", products });
  } catch (error) {
    return next(error);
  }
});
productsRouter.get("/:pid", async (req, res, next) => {
  try {
    const { pid } = req.params;
    const one = await productManager.readOne(pid);
    return res.render("details", { title: "DETAILS", products: one });
  } catch (error) {
    return next(error);
  }
});

export default productsRouter;