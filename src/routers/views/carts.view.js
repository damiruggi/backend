import { Router } from "express";
import cartsManager from "../../data/fs/CartsManager.fs.js";

const cartsRouter = Router();

cartsRouter.get("/", async (req, res, next) => {
  try {
    // Obtener el user_id del usuario actual o cualquier otra lógica que definas
    const user_id = req.user ? req.user.id : null; // Aquí asumo que tienes información del usuario en req.user

    const carts = await cartsManager.read(user_id);
    return res.render("cart", { title: "Cart", carts });
  } catch (error) {
    return next(error);
  }
});

cartsRouter.get("/carts", async (req, res, next) => {
  try {
    // Obtener el user_id del usuario actual o cualquier otra lógica que definas
    const user_id = req.user ? req.user.id : null; // Aquí asumo que tienes información del usuario en req.user

    const carts = await cartsManager.read(user_id);
    return res.render("cart", { title: "LOAD PRODUCT", carts });
  } catch (error) {
    return next(error);
  }
});

cartsRouter.get("/:cid", async (req, res, next) => {
  try {
    const { cid } = req.params;
    const one = await cartsManager.readOne(cid);
    return res.render("details", { title: "DETAILS", carts: one });
  } catch (error) {
    return next(error);
  }
});

export default cartsRouter;
