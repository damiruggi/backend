class UserManager {
  static #users = [];

  create(data) {
    // Verifica si están todos los campos necesarios
    if (!data.foto || !data.email || !data.password) {
      console.error("Falta uno o más campos obligatorios.");
      return;
    }

    // Verifica el formato de la foto
    if (!/\.(jpg|png)$/i.test(data.foto)) {
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
      id:
        UserManager.#users.length === 0
          ? 1
          : UserManager.#users[UserManager.#users.length - 1].id + 1,
      foto: data.foto,
      email: data.email,
      password: data.password,
      role: 0,
    };
    UserManager.#users.push(user);
    console.log("Usuario creado con éxito.");
  }

  read() {
    return UserManager.#users;
  }
}

function isValidEmail(email) {
  // Patrón de validación de email
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const gestorDeUsuarios = new UserManager();

gestorDeUsuarios.create({
  foto: "dami.jpg",
  email: "damiruggi@gmail.com",
  password: "123456",
});

gestorDeUsuarios.create({
  foto: "antu.png",
  email: "antumoles@gmail.com",
  password: "567890",
});

console.log(gestorDeUsuarios.read());
