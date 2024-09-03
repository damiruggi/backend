import assert from "assert";
//no es necesario porque esta incluido en dao
//import environment from "../../src/utils/env.util.js";
import dao from "../../src/data/dao.factory.js";
const { usersManager } = dao;

describe(//la descripcion del entorno de testeo
"Testeando el recurso Usuarios", () => { //la callback con todos los tests a ejecutar
  //antes de inicializar los tests es necesario
  //definir las variables necesarias para testear
  const data = { email: "Lolo", role: "admin", photo: "imagen.png" };
  let id;
  it(//la descripcion del test
  "Testeando que la creación de un usuario recibe un objeto con la propiedad 'email'", () => { //la callback con la logica del test
    assert.ok(data.email);
  });
  it(//la descripcion del test
  "Testeando que la creación de un usuario recibe un objeto con la propiedad 'email' de tipo string", () => { //la callback con la logica del test
    assert.strictEqual(typeof data.email, "string");
  });
  it(//la descripcion del test
  "Testeando que la creación de un usuario recibe un objeto con la propiedad 'role'", () => { //la callback con la logica del test
    assert.ok(data.role);
  });
  it(//la descripcion del test
  "Testeando que la creación de un usuario recibe un objeto con la propiedad 'role' de tipo string", () => { //la callback con la logica del test
    assert.strictEqual(typeof data.role, "string");
  });
  it("Testeando que la creación de un usuario recibe un objeto con la propiedad opcional 'photo'", () => {
    assert.ok(data.photo || true);
  });
  it("Testeando que la creación de un usuario devuelve un objeto con un _id", async () => {
    const response = await usersManager.create(data);
    id = response._id;
    assert.ok(response._id);
  });
  it("Testeando la actualización de un usuario", async () => {
    const one = await usersManager.readBy({ _id: id });
    const response = await usersManager.update(id, { email: "sol" });
    assert.notEqual(one.email, response.email);
  });
  it("Testeando la eliminacion de un usuario", async () => {
    await usersManager.destroy(id);
    const one = await usersManager.readBy({ _id: id });
    assert.strictEqual(one, null);
  });
});