import fs from "fs";
import crypto from "crypto";

class CartsManager {
  constructor() {
    this.path = "./src/data/fs/files/carts.json";
    this.init();
  }

  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify({}, null, 2); // Inicializar como un objeto vacío
      fs.writeFileSync(this.path, stringData);
      console.log("Carts file created!");
    } else {
      console.log("The carts file already exists!");
    }
  }

  async addToCart(userId, productId, quantity = 1) {
    try {
      let carts = await this.read();
      if (!carts[userId]) {
        carts[userId] = []; // Crear un nuevo carrito si no existe para el usuario
      }
      const existingProductIndex = carts[userId].findIndex(item => item.productId === productId);
      if (existingProductIndex !== -1) {
        // Si el producto ya está en el carrito, actualizar la cantidad
        carts[userId][existingProductIndex].quantity += quantity;
      } else {
        // Si el producto no está en el carrito, agregarlo
        carts[userId].push({ productId, quantity });
      }
      await this.write(carts);
    } catch (error) {
      throw error;
    }
  }

  async removeFromCart(userId, productId, quantity = 1) {
    try {
      let carts = await this.read();
      if (carts[userId]) {
        const existingProductIndex = carts[userId].findIndex(item => item.productId === productId);
        if (existingProductIndex !== -1) {
          // Si el producto está en el carrito, actualizar la cantidad o eliminarlo si es necesario
          if (carts[userId][existingProductIndex].quantity <= quantity) {
            carts[userId].splice(existingProductIndex, 1); // Eliminar el producto del carrito
          } else {
            carts[userId][existingProductIndex].quantity -= quantity; // Reducir la cantidad del producto en el carrito
          }
          await this.write(carts);
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async getCart(userId) {
    try {
      const carts = await this.read();
      return carts[userId] || []; // Devolver el carrito del usuario o un carrito vacío si no hay carrito
    } catch (error) {
      throw error;
    }
  }

  async read() {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      throw error;
    }
  }

  async write(data) {
    try {
      await fs.promises.writeFile(this.path, JSON.stringify(data, null, 2));
    } catch (error) {
      throw error;
    }
  }
}

const cartsManager = new CartsManager();
export default cartsManager;
