import { expect } from "chai";
import supertest from "supertest";
import environment from "../../src/utils/env.util.js";
import userRepository from "../../src/repositories/users.rep.js";
import productsRepository from "../../src/repositories/products.rep.js";

const requester = supertest(`http://localhost:${environment.PORT}/api`);

describe("Testeando Tiendamia API", function () {
  this.timeout(20000);
  const user = {
    email: "damiruggi@gmail.com",
    password: "damiruggi",
    role: "ADMIN",
  };
  const product = {
    title: "Remera negra",
    category: "remeras",
  };
  let token = "";
  it("Registro de un usuario", async () => {
    const response = await requester.post("/sessions/register").send(user);
    const { _body } = response;
    //console.log(_body);
    expect(_body.statusCode).to.be.equals(201);
  });
  it("Inicio de sesión de un usuario", async () => {
    const response = await requester.post("/sessions/login").send(user);
    const { _body, headers } = response;
    //console.log(_body);
    //console.log(headers);
    token = headers["set-cookie"][0].split(";")[0];
    expect(_body.statusCode).to.be.equals(200);
  });
  it("Creación de un producto por parte de un administrador", async () => {
    const response = await requester
      .post("/products")
      .send(product)
      .set("Cookie", token);
    const { _body } = response;
    expect(_body.statusCode).to.be.equals(201);
  });
  it("Eliminación de un producto por parte de un administrador", async () => {
    const foundProduct = await productsRepository.readOne({ title: product.title });
    const response = await requester
      .delete("/products/" + foundProduct._id)
      .set("Cookie", token);
    const { _body } = response;
    expect(_body.statusCode).to.be.equals(200);
  });
  it("Eliminación de un producto sin haber iniciado sesión", async () => {
    const response = await requester
      .delete("/products/66413c9946be25ab4b260b8f")
      .send(product);
    const { _body } = response;
    //console.log(_body);
    expect(_body.statusCode).to.be.equals(401);
  });
  it("Cerrado de sesión", async () => {
    const response = await requester.post("/sessions/signout").set("Cookie", token);
    const { _body } = response;
    expect(_body.statusCode).to.be.equals(200);
  });
  it("Eliminación de un usuario", async () => {
    const foundUser = await userRepository.readByEmail(user.email);
    const response = await requester.delete("/sessions/" + foundUser._id);
    const { _body } = response;
    expect(_body.statusCode).to.be.equals(200);
  });
});