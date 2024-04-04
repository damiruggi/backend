import usersManager from "../data/fs/UserManager.fs.js";

export default async (socket) => {
  console.log("client id: " + socket.id);
  socket.emit("users", await usersManager.read());
  socket.on("register", async (data) => {
    await usersManager.create(data);
    socket.emit("users", await usersManager.read());
  });
};