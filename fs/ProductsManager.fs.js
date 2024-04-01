import fs from "fs";
import crypto from "crypto";

class Product {
  constructor() {
    this.path = "./fs/files/products.json";
    this.products = [];
    this.init();
  }

  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify([], null, 2);
      fs.writeFileSync(this.path, stringData);
      console.log("Archivo creado!");
    } else {
      console.log("El archivo ya existe!");
      // Leer los datos del archivo JSON al inicializar
      const data = fs.readFileSync(this.path, "utf8");
      this.products = JSON.parse(data);
    }
  }

  async create(data) {
    try {
      const newProduct = {
        id: this.generateRandomId(),
        title: data.title,
        photo: data.photo,
        category: data.category,
        price: data.price,
        stock: data.stock,
      };
      this.products.push(newProduct);
      await this.saveToFile();
      return newProduct;
    } catch (error) {
      console.error("Error al crear el producto:", error);
      return null;
    }
  }

  async read(category) {
    try {
      return this.products;
    } catch (error) {
      console.error("Error al leer los productos:", error);
      return [];
    }
  }

  async readOne(id) {
    try {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        throw new Error("Producto no encontrado");
      }
      return product;
    } catch (error) {
      console.error("Error al buscar el producto:", error);
      return null;
    }
  }

  async destroy(id) {
    try {
      const index = this.products.findIndex((product) => product.id === id);
      if (index === -1) {
        throw new Error("Producto no encontrado");
      }
      const deletedProduct = this.products.splice(index, 1)[0];
      await this.saveToFile();
      return deletedProduct;
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      return null;
    }
  }

  async saveToFile() {
    try {
      const stringData = JSON.stringify(this.products, null, 2);
      fs.writeFileSync(this.path, stringData);
      console.log("Datos guardados en el archivo JSON");
    } catch (error) {
      console.error("Error al guardar los datos en el archivo JSON:", error);
    }
  }

  generateRandomId() {
    return crypto.randomBytes(12).toString("hex");
  }
}

const productManager = new Product();
export default productManager;
