import Product from "./models/product.models.js";
import Manager from "./Manager.mongo.js";

const productManager = new Manager(Product);
export default productManager;
