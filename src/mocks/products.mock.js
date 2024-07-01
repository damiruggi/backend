import "../utils/env.util.js";
import { faker } from "@faker-js/faker";
import dbConnect from "../utils/dbConnect.util.js";
import productsRepository from "../repositories/products.rep.js";

async function createData() {
  try {
    await dbConnect(); // Espera a que la conexión a la base de datos se establezca correctamente
    for (let i = 1; i <= 1000; i++) {
      const product = {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price({ min: 100, max: 200, dec: 2 }), // Asegúrate de que el precio sea un número decimal
        stock: faker.number.int({ min: 1, max: 100 }), // Asegúrate de que el stock sea un número entero
        category: faker.commerce.department(),
        images: [faker.image.fashion()] // Asegúrate de que las imágenes sean un array
      };
      await productsRepository.createRepository(product);
    }
    console.log("Products created");
  } catch (error) {
    console.log("Error creating products:", error);
  }
}

createData();
