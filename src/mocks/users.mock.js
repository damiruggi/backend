import "../utils/env.util.js";
import { faker } from "@faker-js/faker";
import dbConnect from "../utils/dbConnect.util.js";
<<<<<<< HEAD
import usersRepository from "../repositories/users.rep.js";

async function createData() {
  try {
    await dbConnect(); // Espera a que la conexión a la base de datos se establezca correctamente
    for (let i = 1; i <= 10; i++) {
      const users = {
        email: faker.internet.userName(),
        password: faker.internet.password(),
        age: faker.number.int({ min: 1, max: 100 }),
        photo: faker.internet.avatar(),
      };
      await usersRepository.createRepository(users);
    }
    console.log("Users created");
  } catch (error) {
    console.log("Error creating users:", error);
  }
}

createData();



=======
import userRepository from "../repositories/users.rep.js";

async function createData() {
  try {
    dbConnect();
    for (let i = 1; i <= 50; i++) {
      const email =  email
      const password = "hola1234"
      const photo = faker.image.avatar()
      const verify = true
      const user = { email, password, verify, photo}
      await userRepository.create(user);
    };

    console.log("users created");
  } catch (error) {
    console.log(error);
  }
}

createData();
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
