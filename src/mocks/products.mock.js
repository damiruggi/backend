import "../utils/env.util.js";
import { faker } from "@faker-js/faker";
import dbConnect from "../utils/dbConnect.util.js";
import productsRepository from "../repositories/products.rep.js";

async function createData() {
  try {
    dbConnect();
    for (let i = 1; i <= 30; i++) {
      const product = {
        title: faker.person.firstName(),
        description: faker.animal.rabbit(),
        price: faker.date.birthdate({ min: 2010, max: 2024, mode: "year" }),
        stock: faker.animal.rabbit(),
        category: faker.animal.rabbit(),
        image: faker.image.urlLoremFlickr({ category: "rabbits" }),
      };
      await productsRepository.createRepository(product);
    }
    console.log("product created");
  } catch (error) {
    console.log(error);
  }
}

createData();