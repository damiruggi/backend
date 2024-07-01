import jwt from "jsonwebtoken";
import environment from "./env.util.js"; // Asegúrate de importar environment correctamente

const createToken = (data) => {
  const opts = { expiresIn: 60 * 60 * 24 };
  const token = jwt.sign(data, environment.SECRET_JWT, opts); // Usa environment.SECRET_JWT
  return token;
};

const verifyToken = (token) => {
  const data = jwt.verify(token, environment.SECRET_JWT); // Usa environment.SECRET_JWT
  return data;
};

export { createToken, verifyToken };
