import CustomRouter from "../CustomRouter.js";
import { create, read, readOne, update, destroy } from "../../controllers/carts.controller.js";

class CartsRouter extends CustomRouter {
  init() {
    this.create("/", ["USER"], create);
    this.read("/", ["USER"], read);
    this.read("/:nid", ["USER"], readOne);
    this.update("/:nid", ["USER"], update);
    this.destroy("/:nid", ["USER"], destroy);
  }
}

const cartsRouter = new CartsRouter();
<<<<<<< HEAD
export default cartsRouter.getRouter();
=======
export default cartsRouter.getRouter();
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
