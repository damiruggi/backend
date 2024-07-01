import "../utils/env.util.js";
import { faker } from "@faker-js/faker";
import dbConnect from "../utils/dbConnect.util.js";
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



