<<<<<<< HEAD
import ProductDto from "../dto/products.dto.js";
import dao from "../data/dao.factory.js";
const { productsManager } = dao; // Asegúrate de que la importación es correcta

class ProductsRepository {
  constructor() {
    this.model = productsManager;
  }
  create = async (data) => {
=======
//REPOSITORIO LLAMA A DAO
import ProductDto from "../dto/products.dto.js";
import dao from "../data/dao.factory.js";
const { productsRepository } = dao;

class PetsRepository {
  constructor() {
    this.model = productsManager;
  }
  createRepository = async (data) => {
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
    try {
      data = new ProductDto(data);
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
<<<<<<< HEAD
  read = async (filter) => {
=======
  readRepository = async (filter) => {
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
    try {
      const all = await this.model.read(filter);
      return all;
    } catch (error) {
      throw error;
    }
  };
<<<<<<< HEAD
  readOne = async (id) => {
=======
  readByIdRepository = async (id) => {
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
    try {
      const one = await this.model.readOne(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
<<<<<<< HEAD
  update = async (id, data) => {
    try {
=======
  updateRepository = async (id, data) => {
    try {
      //agregar UpdatePetDto para modificar el objeto data ante la actualizacion
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
      const one = await this.model.update(id, data);
      return one;
    } catch (error) {
      throw error;
    }
  };
<<<<<<< HEAD
  destroy = async (id) => {
=======
  destroyRepository = async (id) => {
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
    try {
      const one = await this.model.destroy(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
}

<<<<<<< HEAD
const productsRepository = new ProductsRepository();
export default productsRepository;
=======
const petsRepository = new ProductsRepository();
export default productsRepository;
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
