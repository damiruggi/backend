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
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    removeProduct(productId) {
      this.products = this.products.filter((product) => product.id !== productId);
    }
  
    getProductById(productId) {
      return this.products.find((product) => product.id === productId);
    }
  
    getAllProducts() {
      return this.products;
    }
  
    getTotalProducts() {
      return this.products.length;
    }
  
    getTotalPrice() {
      return this.products.reduce((total, product) => total + product.price, 0);
    }
  }
  
  // Ejemplo de uso
  const manager = new ProductsManager();
  
  // Agregar productos 
  
  manager.addProduct(
      //--------(Id)-(Productname)-----(Photo)----------(Class)-(Price)(Stock)
      //          !       !              !                !         !    !
      new Product(1, "Joystick", "/img/Joystick.jpg", "Tecnologia", 35, 12)
    );
  manager.addProduct(
    new Product(2, "Teclado", "/img/Teclado.jpg", "Tecnologia", 45, 10)
  );
  
  manager.addProduct(
    new Product(3, "Zapatillas", "/img/Zapatillas.jpg", "Ropa", 60, 15)
  );
  
  manager.addProduct(
    new Product(4, "Pantalon", "/img/Pantalon.jpg", "Ropa", 40, 18)
  );
  
  manager.addProduct(
    new Product(5, "Televisor", "/img/Televisor.jpg", "Tecnologia", 150, 5)
  );

  new Product(
  (6, "Joystick", "/img/Joystick.jpg", "Tecnologia", 35, 12)
  );
 manager.addProduct(
  new Product(7, "Teclado", "/img/Teclado.jpg", "Tecnologia", 45, 10)
 );

 manager.addProduct(
  new Product(8, "Zapatillas", "/img/Zapatillas.jpg", "Ropa", 60, 15)
  );

 manager.addProduct(
  new Product(9, "Pantalon", "/img/Pantalon.jpg", "Ropa", 40, 18)
 );

manager.addProduct(
  new Product(10, "Televisor", "/img/Televisor.jpg", "Tecnologia", 150, 5)
);
new Product(
  (11, "Joystick", "/img/Joystick.jpg", "Tecnologia", 35, 12)
  );
 manager.addProduct(
  new Product(12, "Teclado", "/img/Teclado.jpg", "Tecnologia", 45, 10)
 );

 manager.addProduct(
  new Product(13, "Zapatillas", "/img/Zapatillas.jpg", "Ropa", 60, 15)
  );

 manager.addProduct(
  new Product(14, "Pantalon", "/img/Pantalon.jpg", "Ropa", 40, 18)
 );

manager.addProduct(
  new Product(15, "Televisor", "/img/Televisor.jpg", "Tecnologia", 150, 5)
);
new Product(
  (16, "Joystick", "/img/Joystick.jpg", "Tecnologia", 35, 12)
  );
 manager.addProduct(
  new Product(17, "Teclado", "/img/Teclado.jpg", "Tecnologia", 45, 10)
 );

 manager.addProduct(
  new Product(18, "Zapatillas", "/img/Zapatillas.jpg", "Ropa", 60, 15)
  );

 manager.addProduct(
  new Product(19, "Pantalon", "/img/Pantalon.jpg", "Ropa", 40, 18)
 );

manager.addProduct(
  new Product(20, "Leclerc", "https://media.sitioandino.com.ar/p/c40971f59d912119cb2f9cfba11e74f6/adjuntos/335/imagenes/000/625/0000625880/790x0/smart/imagepng.png", "Tecnologia", 150, 5)
);


  // Obtener todos los productos
  console.log("Todos los productos:", manager.getAllProducts());
  
  // Obtener el producto con ID 2
  console.log("Producto con ID 2:", manager.getProductById(2));
  
  // Eliminar el producto con ID 1
  manager.removeProduct(1);
  console.log(
    "Después de eliminar el producto con ID 1:",
    manager.getAllProducts()
  );
  
  // Obtener el número total de productos y el precio total
  console.log("Total de productos:", manager.getTotalProducts());
  console.log("Precio total de los productos:", manager.getTotalPrice());
  