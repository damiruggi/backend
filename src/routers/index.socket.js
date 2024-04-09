import productManager from "../data/fs/ProductsManager.fs.js";

export default async (socket) => {
  console.log("Product id: " + socket.id);
  socket.emit("products", await productManager.read());
  socket.on("product", async (data) => {
    await productManager.create(data);
    socket.emit("product", await productManager.read());
  });
};


