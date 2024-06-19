import { Router } from "express";
import jwt from 'jsonwebtoken'; // Importa jsonwebtoken
import { verifyToken } from "../utils/token.util.js";
import usersManager from "../data/mongo/UsersManager.mongo.js";
import environment from "../utils/env.util.js";

class CustomRouter {
  constructor() {
    this.router = Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() {}

  applyCbs(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        return params[2](error);
      }
    });
  }

  response = (req, res, next) => {
    res.message200 = (message) => res.json({ statusCode: 200, message });
    res.response200 = (response) => res.json({ statusCode: 200, response });
    res.paginate = (response, info) =>
      res.json({ statusCode: 200, response, info });
    res.message201 = (message) => res.json({ statusCode: 201, message });
    res.error400 = (message) => res.json({ statusCode: 400, message });
    res.error401 = () =>
      res.json({ statusCode: 401, message: "Bad auth from policies!" });
    res.error403 = () =>
      res.json({ statusCode: 403, message: "Forbidden from policies!" });
    res.error404 = () =>
      res.json({ statusCode: 404, message: "Not found docs" });
    return next();
  };

  policies = (arrayOfPolicies) => async (req, res, next) => {
    try {
      if (arrayOfPolicies.includes("PUBLIC")) return next();
      let token = req.cookies["token"];
      if (!token) return res.error401();
      else {
        const data = jwt.verify(token, environment.SECRET_JWT); // Usa jwt aquí
        if (!data) return res.error400("Bad auth token!");
        else {
          const { email, role } = data;
          if (
            (role === 0 && arrayOfPolicies.includes("USER")) ||
            (role === 1 && arrayOfPolicies.includes("ADMIN"))
          ) {
            const user = await usersManager.readByEmail(email);
            req.user = user;
            return next();
          } else return res.error403();
        }
      }
    } catch (error) {
      return next(error);
    }
  };

  create(path, arrayOfPolicies, ...callbacks) {
    this.router.post(
      path,
      this.response,
      this.policies(arrayOfPolicies),
      this.applyCbs(callbacks)
    );
  }

  read(path, arrayOfPolicies, ...callbacks) {
    this.router.get(
      path,
      this.response,
      this.policies(arrayOfPolicies),
      this.applyCbs(callbacks)
    );
  }

  update(path, arrayOfPolicies, ...callbacks) {
    this.router.put(
      path,
      this.response,
      this.policies(arrayOfPolicies),
      this.applyCbs(callbacks)
    );
  }

  destroy(path, arrayOfPolicies, ...callbacks) {
    this.router.delete(
      path,
      this.response,
      this.policies(arrayOfPolicies),
      this.applyCbs(callbacks)
    );
  }

  use(path, ...callbacks) {
    this.router.use(path, this.response, this.applyCbs(callbacks));
  }
}

export default CustomRouter;
