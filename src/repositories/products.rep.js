import ProductDto from "../dto/products.dto.js";
import dao from "../data/dao.factory.js";
const { productsManager } = dao; // Asegúrate de que la importación es correcta

class ProductsRepository {
  constructor() {
    this.model = productsManager;
  }
  create = async (data) => {
    try {
      data = new ProductDto(data);
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  read = async (filter) => {
    try {
      const all = await this.model.read(filter);
      return all;
    } catch (error) {
      throw error;
    }
  };
  readOne = async (id) => {
    try {
      const one = await this.model.readOne(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
  update = async (id, data) => {
    try {
      const one = await this.model.update(id, data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  destroy = async (id) => {
    try {
      const one = await this.model.destroy(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
}

const productsRepository = new ProductsRepository();
export default productsRepository;
