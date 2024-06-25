import "../utils/env.util.js";
import { faker } from "@faker-js/faker";
import dbConnect from "../utils/dbConnect.util.js";
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