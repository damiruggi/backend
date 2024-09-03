import fetchProducts from "./fetchProducts.js";

export default async function printFilter(evento) {
  const text = evento.target.value;
  await fetchProducts("products", text);
<<<<<<< HEAD
}
=======
}
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
