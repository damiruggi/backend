import fs from "fs";
import crypto from "crypto";

class UsersManager {
  constructor() {
    this.path = "./src/data/fs/files/users.json";
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
    }
  }

  async create(data) {
    try {
      // Validar campos obligatorios
      if (!data.photo || !data.email || !data.password || !data.role) {
        throw new Error(
          "Los campos 'photo', 'email', 'password' y 'role' son obligatorios."
        );
      }

      if (!data.email) {
        throw new Error("Ingrese el email");
      } else {
        const user = {
          id: crypto.randomBytes(12).toString("hex"),
          photo:
            data.photo ||
            "https://cdn-icons-png.freepik.com/512/266/266033.png",
          email: data.email,
          password: data.password,
          role: data.role || "Editor",
        };
        let all = await fs.promises.readFile(this.path, "utf-8");
        all = JSON.parse(all);
        all.push(user);
        all = JSON.stringify(all, null, 2);
        await fs.promises.writeFile(this.path, all);
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async read(role) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      role && (all = all.filter((each) => each.role === role));
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
      let user = all.find((each) => each.id === id);
      return user;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async destroy(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let user = all.find((each) => each.id === id);
      if (user) {
        let filtered = all.filter((each) => each.id !== id);
        filtered = JSON.stringify(filtered, null, 2);
        await fs.promises.writeFile(this.path, filtered);
      }
      return user;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

const usersManager = new UsersManager();
export default usersManager;
