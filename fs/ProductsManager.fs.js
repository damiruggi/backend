const crypto = require('crypto');
const fs = require('fs');

class Product {
  constructor(id, title, photo, category, price, stock) {
    this.id = id;
    this.title = title;
    this.photo = photo;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
}

class ProductsManagerMemory {
  constructor() {
    this.products = [];
  }

  generateRandomId() {
    return crypto.randomBytes(12).toString('hex');
  }

  create(data) {
    try {
      const id = this.generateRandomId();
      const newProduct = new Product(id, data.title, data.photo, data.category, data.price, data.stock);
      this.products.push(newProduct);
      return newProduct;
    } catch (error) {
      console.error("Error al crear el producto:", error);
      return null;
    }
  }

  read() {
    try {
      return this.products;
    } catch (error) {
      console.error("Error al leer los productos:", error);
      return [];
    }
  }

  readOne(id) {
    try {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new Error("Producto no encontrado");
      }
      return product;
    } catch (error) {
      console.error("Error al buscar el producto:", error);
      return null;
    }
  }

  destroy(id) {
    try {
      const index = this.products.findIndex(product => product.id === id);
      if (index === -1) {
        throw new Error("Producto no encontrado");
      }
      const deletedProduct = this.products.splice(index, 1)[0];
      return deletedProduct;
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      return null;
    }
  }
}

class ProductsManagerFS {
  constructor(filePath) {
    this.filePath = filePath;
  }

  

  create(data) {
    try {
      const id = crypto.randomBytes(12).toString('hex');
      const newProduct = new Product(id, data.title, data.photo, data.category, data.price, data.stock);
      const products = JSON.parse(fs.readFileSync(this.filePath));
      products.push(newProduct);
      fs.writeFileSync(this.filePath, JSON.stringify(products));
      return newProduct;
    } catch (error) {
      console.error("Error al crear el producto:", error);
      return null;
    }
  }

  read() {
    try {
      const products = JSON.parse(fs.readFileSync(this.filePath));
      return products;
    } catch (error) {
      console.error("Error al leer los productos:", error);
      return [];
    }
  }

  readOne(id) {
    try {
      const products = JSON.parse(fs.readFileSync(this.filePath));
      const product = products.find(product => product.id === id);
      if (!product) {
        throw new Error("Producto no encontrado");
      }
      return product;
    } catch (error) {
      console.error("Error al buscar el producto:", error);
      return null;
    }
  }

  destroy(id) {
    try {
      let products = JSON.parse(fs.readFileSync(this.filePath));
      const index = products.findIndex(product => product.id === id);
      if (index === -1) {
        throw new Error("Producto no encontrado");
      }
      const deletedProduct = products.splice(index, 1)[0];
      fs.writeFileSync(this.filePath, JSON.stringify(products));
      return deletedProduct;
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      return null;
    }
  }
}

// Crear un archivo JSON con los productos iniciales
const initialProducts = [];
for (let i = 0; i < 10; i++) {
  initialProducts.push({ id: crypto.randomBytes(8).toString('hex'), title: `Producto ${i + 1}`, photo: `/img/producto${i + 1}.jpg`, category: `Categoría ${i % 3}`, price: Math.floor(Math.random() * 100) + 1, stock: Math.floor(Math.random() * 100) + 1 });
}
fs.writeFileSync('products.json', JSON.stringify(initialProducts));

// Ejemplo de uso para ProductsManagerMemory
const managerMemory = new ProductsManagerMemory();

console.log("Agregando 10 productos en memoria...");
for (let i = 0; i < 10; i++) {
  managerMemory.create({ title: `Producto ${i + 1}`, photo: `/img/producto${i + 1}.jpg`, category: `Categoría ${i % 3}`, price: Math.floor(Math.random() * 100) + 1, stock: Math.floor(Math.random() * 100) + 1 });
}
console.log("Productos en memoria:", managerMemory.read());

// Ejemplo de uso para ProductsManagerFS
const managerFS = new ProductsManagerFS('products.json');

console.log("Productos en el sistema de archivos:", managerFS.read());
