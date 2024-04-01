class Product {
  constructor(id, title, photo, category, price, stock) {
    this.id = id;
    this.title = title;
    this.photo = photo;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
}

class ProductsManager {
  #products = [];

  create(data) {
    // Verifica si están todos los campos necesarios
    if (!data.title || !data.photo || !data.category || !data.price || !data.stock) {
      console.error("Falta uno o más campos obligatorios.");
      return;
    }

    // Verifica el formato de la foto
    if (!/\.(jpg|png)$/i.test(data.photo)) {
      console.error("El formato de la foto debe ser JPG o PNG.");
      return;
    }

    const product = new Product(
      crypto.randomBytes(12).toString("hex"),
      data.title,
      data.photo,
      data.category,
      data.price,
      data.stock
    );
    this.#products.push(product);
    console.log("Producto creado con éxito.");
    return product.id; // Devolver el ID del producto creado
  }

  read() {
    return this.#products;
  }

  readOne(id) {
    try {
      const one = this.#products.find((each) => each.id === id);
      if (!one) {
        throw new Error("No existe el producto");
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
        console.log("Producto eliminado");
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
  photo: "/img/Joystick.jpg",
  category: "Tecnologia",
  price: 35,
  stock: 12
});

manager.create({
  title: "Teclado",
  photo: "/img/Teclado.jpg",
  category: "Tecnologia",
  price: 45,
  stock: 10
});

manager.create({
  title: "Zapatillas",
  photo: "/img/Zapatillas.jpg",
  category: "Ropa",
  price: 60,
  stock: 15
});

manager.create({
  title: "Pantalon",
  photo: "/img/Pantalon.jpg",
  category: "Ropa",
  price: 40,
  stock: 18
});

manager.create({
  title: "Televisor",
  photo: "/img/Televisor.jpg",
  category: "Tecnologia",
  price: 150,
  stock: 5
});

// Obtener todos los productos
console.log("Todos los productos:", manager.read());

// Obtener el producto con ID 2
console.log("Producto con ID 2:", manager.readOne(2));

// Eliminar el producto con ID 1
manager.destroy(1);
console.log(
  "Después de eliminar el producto con ID 1:",
  manager.read()
);

// Obtener el número total de productos
console.log("Total de productos:", manager.read().length);
