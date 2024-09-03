import argsUtil from "../utils/args.util.js";
import dbConnect from "../utils/dbConnect.util.js";

const persistence = argsUtil.persistence;
let dao = {};

switch (persistence) {
  case "fs":
    console.log("connected to file system");
    const { default: productsManagerFs } = await import("./fs/ProductsManager.fs.js");
    const { default: usersManagerFs } = await import("./fs/UserManager.fs.js");
    const { default: cartManagerFs } = await import(
      "./fs/CartsManager.fs.js"
    );
    dao = {
      productsManager: productsManagerFs,
      usersManager: usersManagerFs,
      cartManager: cartManagerFs,
    };
    break;
  default:
    console.log("connected to database");
    dbConnect();
    const { default: productsManagerMongo } = await import("./mongo/ProductsManager.mongo.js");
    const { default: usersManagerMongo } = await import(
      "./mongo/UsersManager.mongo.js"
    );
    const { default: cartsManagerMongo } = await import(
      "./mongo/CartsManager.mongo.js"
    );
    dao = {
<<<<<<< HEAD
      productsManager: productsManagerMongo,
      usersManager: usersManagerMongo,
      cartManager: cartsManagerMongo,
=======
      petsManager: productsManagerMongo,
      usersManager: usersManagerMongo,
      adoptionsManager: cartsManagerMongo,
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
    };
    break;
}

export default dao;