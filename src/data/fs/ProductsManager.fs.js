import fs from "fs";
import crypto from "crypto";

class Product {
  constructor() {
    this.path = "./src/data/fs/files/products.json";
    this.init();
  }

  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify([], null, 2);
      fs.writeFileSync(this.path, stringData);
      console.log("File created!");
    } else {
      //console.log("The file already exists!");
    }
  }

  async create(data) {
    try {
      // Validar campos obligatorios
      if (!data.title) {
        throw new Error("The 'title' field is required");
      } else {
        const product = {
          id: crypto.randomBytes(12).toString("hex"),
          title: data.title,
          photo:
            data.photo ||
            "https://getuikit.com/v2/docs/images/placeholder_600x400.svg",
          category: data.category || "Zapatillas",
          price: data.price || 1,
          stock: data.stock || 1,
        };
        let all = await fs.promises.readFile(this.path, "utf-8");
        all = JSON.parse(all);
        all.push(product);
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        return product;
      }
    } catch (error) {
      throw error; // Lanzar el error para que pueda ser manejado por el llamante
    }
  }

  async read(category) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      category && (all = all.filter((each) => each.category === category));
      return all;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async readOne(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let product = all.find((each) => each.id === id);
      return product;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async update(id, data) {
    try {
      let all = await this.read();
      let one = all.find((each) => each.id === id);
      if (one) {
        for (let prop in data) {
          one[prop] = data[prop];
        }
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        return one;
      } else {
        const error = new Error("Not found!");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }

  async destroy(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let product = all.find((each) => each.id === id);
      if (product) {
        let filtered = all.filter((each) => each.id !== id);
        filtered = JSON.stringify(filtered, null, 2);
        await fs.promises.writeFile(this.path, filtered);
        return product;
      } else {
        const error = new Error("not found!");
        error.statusCode = 404;
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
}

const productManager = new Product();
export default productManager;
