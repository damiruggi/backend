import assert from "assert";
//no es necesario porque esta incluido en dao
//import environment from "../../src/utils/env.util.js";
import dao from "../../src/data/dao.factory.js";
const { productsManager } = dao;

describe(//la descripcion del entorno de testeo
"Testeando el recurso Producto", () => { //la callback con todos los tests a ejecutar
  //antes de inicializar los tests es necesario
  //definir las variables necesarias para testear
  const data = { title: "Remera", description: "Remera negra mangas largas", images: "imagen.png" };
  let id;
  it(//la descripcion del test
  "Testeando que la creación un producto recibe un objeto con la propiedad 'title'", () => { //la callback con la logica del test
    assert.ok(data.title);
  });
  it(//la descripcion del test
  "Testeando que la creación un producto recibe un objeto con la propiedad 'title' de tipo string", () => { //la callback con la logica del test
    assert.strictEqual(typeof data.title, "string");
  });
  it(//la descripcion del test
  "Testeando que la creación de un producto recibe un objeto con la propiedad 'description'", () => { //la callback con la logica del test
    assert.ok(data.description);
  });
  it(//la descripcion del test
  "Testeando que la creación de un producto recibe un objeto con la propiedad 'description' de tipo string", () => { //la callback con la logica del test
    assert.strictEqual(typeof data.description, "string");
  });
  it("Testeando que la creación de un producto recibe un objeto con la propiedad opcional 'images'", () => {
    assert.ok(data.images || true);
  });
  it("Testeando que la creación de un producto devuelve un objeto con un _id", async () => {
    const response = await productsManager.create(data);
    id = response._id;
    assert.ok(response._id);
  });
  it("Testeando la actualización de un producto", async () => {
    const one = await productsManager.readOne({ _id: id });
    const response = await productsManager.update(id, { title: "Remera" });
    assert.notEqual(one.title, response.title);
  });
  it("Testeando la eliminacion de un producto", async () => {
    await productsManager.destroy(id);
    const one = await productsManager.readOne({ _id: id });
    assert.strictEqual(one, null);
  });
});