import CustomRouter from "../CustomRouter.js";
import productsRouter from "./products.api.js";
import cartsRouter from "./carts.api.js";
import usersRouter from "./users.api.js";
import sessionsRouter from "./sessions.api.js";
<<<<<<< HEAD
import paymentRouter from "./payment.api.js"
=======
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323

class ApiRouter extends CustomRouter {
  init() {
    this.use("/products", productsRouter);
    this.use("/carts", cartsRouter);
    this.use("/users", usersRouter);
    this.use("/sessions", sessionsRouter);
<<<<<<< HEAD
    this.use("/payment", paymentRouter);
=======
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
  }
}

const apiRouter = new ApiRouter();

export default apiRouter.getRouter();