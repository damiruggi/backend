import { expect } from "chai";
import environment from "../../src/utils/env.util.js";
import dao from "../../src/data/dao.factory.js";
const { usersManager } = dao;

describe("Testeando el recurso Usuarios", () => {
  const data = { email: "Lolo", role: "admin" };
  let id;
  it("Testeando que la creación de un usuario recibe un objeto con la propiedad 'email'", () => {
    expect(data).to.have.property("email");
  });
  it("Testeando que la creación de un usuario recibe un objeto con la propiedad 'email' de tipo string", () => {
    expect(data.email).to.be.a("string");
  });
  it("Testeando que la creación de un usuario recibe un objeto con la propiedad 'role'", () => {
    expect(data).to.have.property("role");
  });
  it("Testeando que la creación de un usuario recibe un objeto con la propiedad 'role' de tipo string", () => {
    expect(data.role).to.be.a("string");
  });
  /* it("Testeando que la creación de un usuario recibe un objeto con la propiedad opcional 'image'", () => {
    expect(data).to.have.property("image").that.exists;
  }); */
  it("Testeando que la creación de un usuario devuelve un objeto con un _id", async () => {
    const response = await usersManager.create(data);
    id = response._id;
    expect(response).to.have.property("_id");
  });
  it("Testeando la actualización de un usuario", async () => {
    const one = await usersManager.readBy({ _id: id });
    const response = await usersManager.update(id, { title: "sol" });
    expect(one.email).is.not.equal(response.title);
  });
  it("Testeando la eliminacion de un usuario", async () => {
    await usersManager.destroy(id);
    const one = await usersManager.readBy({ _id: id });
    expect(one).not.exist;
  });
});