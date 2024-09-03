import "../utils/env.util.js";
import { faker } from "@faker-js/faker";
import dbConnect from "../utils/dbConnect.util.js";
import productsRepository from "../repositories/products.rep.js";

async function createData() {
  try {
<<<<<<< HEAD
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
=======
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
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
