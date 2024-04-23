import { Router } from "express";
import cartsRouter from "./carts.router.api.js";

const apiRouter = Router();

apiRouter.use("/carts", cartsRouter);

export default apiRouter;