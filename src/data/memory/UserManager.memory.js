import crypto from "crypto";

class UserManager {
  static #users = [];

  create(data) {
    // Verifica si están todos los campos necesarios
    if (!data.photo || !data.email || !data.password || !data.role) {
      console.error("Falta uno o más campos obligatorios.");
      return;
    }

    // Verifica el formato de la foto
    if (!/\.(jpg|png)$/i.test(data.photo)) {
      console.error("El formato de la foto debe ser JPG o PNG.");
      return;
    }

    // Verificar el email
    if (!isValidEmail(data.email)) {
      console.error("El email proporcionado no es válido.");
      return;
    }

    // Verificar la seguridad del password
    if (data.password.length < 6) {
      console.error("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    const user = {
      id: crypto.randomBytes(12).toString("hex"),
      photo: data.photo,
      email: data.email,
      password: data.password,
      role: data.role,
    };
    UserManager.#users.push(user);
    console.log("Usuario creado con éxito.");
    return user.id; // Devolver el ID del usuario creado
  }

  read() {
    return UserManager.#users;
  }

  readOne(id) {
    try {
      const one = UserManager.#users.find((each) => each.id === id);
      if (!one) {
        throw new Error("No existe el usuario");
      } else {
        return one;
      }
    } catch (error) {
      console.log(error);
    }
  }

  destroy(id) {
    try {
      const userToDelete = this.readOne(id); // Obtener el usuario a eliminar
      if (userToDelete) {
        UserManager.#users = UserManager.#users.filter((each) => each.id !== id);
        console.log("Usuario eliminado");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

function isValidEmail(email) {
  // Patrón de validación de email
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const gestorDeUsuarios = new UserManager();

const id1 = gestorDeUsuarios.create({
  photo: "https://ceslava.s3-accelerate.amazonaws.com/2012/12/foto-perfil.jpg",
  email: "damiruggi@gmail.com",
  password: "123456",
  role: 0,
});

const id2 = gestorDeUsuarios.create({
  photo: "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
  email: "antumoles@gmail.com",
  password: "567890",
  role: 0,
});

console.log(gestorDeUsuarios.read(id1, id2));
//console.log(gestorDeUsuarios.readOne(id2));
//gestorDeUsuarios.destroy(id2);
