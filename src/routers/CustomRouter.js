import { Router } from "express";
import { verifyToken } from "../utils/token.util.js";
import userRepository from "../repositories/users.rep.js";
<<<<<<< HEAD
import winston from "../utils/winston.util.js";

=======
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323

class CustomRouter {
  //para construir y configurar cada instancia del enrutador
  constructor() {
    this.router = Router();
    this.init();
  }
  //para obtener todas las rutas del enrutador definido
  getRouter() {
    return this.router;
  }
  //para inicializar las clases/propiedades heredades (sub-routers)
  init() {}
  //para manejar las callbacks (de middlewares y la final)
<<<<<<< HEAD
applyCbs(callbacks) {
    return callbacks.map((callback) => async (...params) => {
            try {
=======
  applyCbs(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
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
<<<<<<< HEAD
    res.error400 = (message) => {
      const errorMessage = `${req.method} ${
        req.url
      } 400 - ${new Date().toLocaleTimeString()} - ${message}`;
      winston.ERROR(errorMessage);
      return res.json({ statusCode: 400, message: message });
    };
    res.error401 = () => {
      const errorMessage = `${req.method} ${
        req.url
      } 401 - ${new Date().toLocaleTimeString()} - Bad auth from poliecies!}`;
      winston.ERROR(errorMessage);
      return res.json({ statusCode: 401, message: "Bad auth from poliecies!" });
    };

    res.error403 = () => {
      const errorMessage = `${req.method} ${req.url} 403 - ${new Date().toLocaleTimeString()} - Forbidden from poliecies!`;
      winston.ERROR(errorMessage);
      return res.json({ statusCode: 403, message: "Forbidden from poliecies!" });
    }
    res.error404 = () => {
      const errorMessage = `${req.method} ${
        req.url
      } 404 - ${new Date().toLocaleTimeString()} - Not found docs`;
      winston.ERROR(errorMessage);
      return res.json({ statusCode: 404, message: "Not found docs" });
    }
=======
    res.error400 = (message) => res.json({ statusCode: 400, message });
    res.error401 = () =>
      res.json({ statusCode: 401, message: "Bad auth from poliecies!" });
    res.error403 = () =>
      res.json({ statusCode: 403, message: "Forbidden from poliecies!" });
    res.error404 = () =>
      res.json({ statusCode: 404, message: "Not found docs" });
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
    return next();
  };
  policies = (policies) => async (req, res, next) => {
    //desarrollar las politicas
    try {
      if (policies.includes("PUBLIC")) return next();
      const token = req.cookies["token"]
      if (!token) return res.error401();
      const dataOfToken = verifyToken(token)
      const { email, role } = dataOfToken
      //el role lo necesito para autorizaciones
      //el email para buscar el usuario y agregar la propiedad user al objeto de requerimientos
      if ((policies.includes("USER")&& role === 0) ||(policies.includes("ADMIN")&&role===1)){
        const user = await userRepository.readByEmailRepository(email)
        //proteger la contraseña!!!
        req.user = user
      }
      return res.error403();
    } catch (error) {
      return next(error)
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