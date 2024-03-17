const fs = require("fs");
const crypto = require("crypto");

module.exports = class UsersManager {
  constructor() {
    this.path = "./fs/files/users.json";
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
        throw new Error("Los campos 'photo', 'email', 'password' y 'role' son obligatorios.");
      }

      if (!data.email) {
        throw new Error("Ingrese el email");
      } else {
        let all = await fs.promises.readFile(this.path, "utf-8");
        all = JSON.parse(all);
        
        // Verificar si el usuario ya existe
        const existingUser = all.find(user => user.email === data.email);
        if (existingUser) {
          throw new Error("El usuario ya existe");
        }

        const user = {
          id: crypto.randomBytes(12).toString("hex"),
          photo: data.photo || "https://cdn-icons-png.freepik.com/512/266/266033.png",
          email: data.email,
          password: data.password,
          role: data.role,
        };
        
        all.push(user);
        await fs.promises.writeFile(this.path, JSON.stringify(all, null, 2));
        console.log({ created: user.id });
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  async read() {
    try {
      const all = await fs.promises.readFile(this.path, "utf-8");
      console.log(JSON.parse(all));
      return JSON.parse(all);
    } catch (error) {
      console.log(error);
    }
  }
  
  async readOne(id) {
    try {
      const all = await fs.promises.readFile(this.path, "utf-8");
      const user = JSON.parse(all).find((each) => each.id === id);
      if (!user) {
        throw new Error("Usuario no encontrado");
      } else {
        console.log(user);
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  async destroy(id) {
    try {
      let all = await fs.promises.readFile(this.path, "utf-8");
      all = JSON.parse(all);
      let user = all.find((each) => each.id === id);
      if (!user) {
        throw new Error("Usuario no encontrado");
      } else {
        let filtered = all.filter((each) => each.id !== id);
        filtered = JSON.stringify(filtered, null, 2);
        await fs.promises.writeFile(this.path, filtered);
        console.log({ deleted: user.id });
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }
};

async function test() {
  try {
    const users = new module.exports();
    await users.create({
      photo: "https://ceslava.s3-accelerate.amazonaws.com/2012/12/foto-perfil.jpg",
      email: "damiruggi@gmail.com",
      password: "123456",
      role: "Admin",
    });
    await users.create({
      photo: "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      email: "antumoles@gmail.com",
      password: "567890",
      role: "Admin",
    });
    await users.create({
      photo: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg",
      email: "lalalala@gmail.com",
      password: "234sdff",
      role: "Editor",
    });
    await users.create({
      photo: "https://i.pinimg.com/550x/8d/e7/fa/8de7fa2af12330350613ede63532c4fb.jpg",
      email: "morena@hotmail.com",
      password: "fdsfdsda23",
      role: "Editor",
    });
    await users.read();
    //await users.destroy("c678b56d14c4808beba07dd4");
    //await users.readOne("722a0fdab7dc518fb4103e51");
  } catch (error) {
    console.log(error);
  }
}
test();
