import { Router } from "express";
import productManager from "../../data/mongo/Products.Manager.mongo.js";

const productsRouter = Router();

productsRouter.get("/", read);
productsRouter.get("/paginate", paginate);
productsRouter.get("/:pid", readOne);
productsRouter.post("/", create);
productsRouter.put("/:pid", update);
productsRouter.delete("/:pid", destroy);

async function create(req, res, next) {
  try {
    const data = req.body;
    const one = await productManager.create(data);
    return res.json({
      statusCode: 201,
      message: "CREATED ID: " + one.id,
    });
  } catch (error) {
    return next(error);
  }
}

async function read(req, res, next) {
  try {
    const { category } = req.query;
    const all = await productManager.read(category);
    if (all.length > 0) {
      return res.json({
        statusCode: 200,
        response: all,
      });
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function paginate(req, res, next) {
  try {
    const filter = {};
    const opts = {};
    if (req.query.limit) {
      opts.limit = req.query.limit;
    }
    if (req.query.page) {
      opts.page = req.query.page;
    }
    if (req.query.user_id) {
      filter.user.id = req.query.user_id;
    }
    const all = await productManager.paginate({ filter, opts });
    return res.json({
      statusCode: 200,
      response: all.docs,
      info: {
        totalDocs: all.totalDocs,
        page: all.page,
        limit: all.limit,
        totalPages: all.totalPages,
        nextPage: all.nextPage,
        prevPage: all.prevPage,
      },
    });
  } catch (error) {
    return next(error);
  }
}

async function readOne(req, res, next) {
  try {
    const { pid } = req.params;
    const one = await productManager.readOne(pid);
    if (one) {
      return res.json({
        statusCode: 200,
        response: one,
      });
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function update(req, res, next) {
  try {
    const { pid } = req.params;
    const data = req.body;
    const one = await productManager.update(pid, data);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return next(error);
  }
}

async function destroy(req, res, next) {
  try {
    const { pid } = req.params;
    const one = await productManager.destroy(pid);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return next(error);
  }
}

export default productsRouter;
