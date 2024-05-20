class Product {
  constructor(id, title, images, category, price, stock) {
    this.id = id;
    this.title = title;
    this.images = images;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
}

class ProductsManager {
  #products = [];

  create(data) {
    // Verifica si están todos los campos necesarios
    if (!data.title || !data.images || !data.category || !data.price || !data.stock) {
      console.error("One or more required fields are missing.");
      return;
    }

    // Verifica el formato de la foto
    if (!/\.(jpg|png)$/i.test(data.images)) {
      console.error("The photo format must be JPG or PNG.");
      return;
    }

    const product = new Product(
      crypto.randomBytes(12).toString("hex"),
      data.title,
      data.images,
      data.category,
      data.price,
      data.stock
    );
    this.#products.push(product);
    console.log("Successfully created product.");
    return product.id; // Devolver el ID del producto creado
  }

  read() {
    return this.#products;
  }

  readOne(id) {
    try {
      const one = this.#products.find((each) => each.id === id);
      if (!one) {
        throw new Error("The product does not exist");
      } else {
        return one;
      }
    } catch (error) {
      console.log(error);
    }
  }

  destroy(id) {
    try {
      const productToDelete = this.readOne(id); // Obtener el producto a eliminar
      if (productToDelete) {
        this.#products = this.#products.filter((each) => each.id !== id);
        console.log("Product removed");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const manager = new ProductsManager();

// Agregar productos
manager.create({
  title: "Joystick",
  images: "/img/Joystick.jpg",
  category: "Tecnologia",
  price: 35,
  stock: 12
});

manager.create({
  title: "Teclado",
  images: "/img/Teclado.jpg",
  category: "Tecnologia",
  price: 45,
  stock: 10
});

manager.create({
  title: "Zapatillas",
  images: "/img/Zapatillas.jpg",
  category: "Ropa",
  price: 60,
  stock: 15
});

manager.create({
  title: "Pantalon",
  images: "/img/Pantalon.jpg",
  category: "Ropa",
  price: 40,
  stock: 18
});

manager.create({
  title: "Televisor",
  images: "/img/Televisor.jpg",
  category: "Tecnologia",
  price: 150,
  stock: 5
});

// Obtener todos los productos
console.log("All the products:", manager.read());

// Obtener el producto con ID 2
console.log("Product with ID 2:", manager.readOne(2));

// Eliminar el producto con ID 1
manager.destroy(1);
console.log(
  "After deleting the product with ID 1:",
  manager.read()
);

// Obtener el número total de productos
console.log("Total products:", manager.read().length);
