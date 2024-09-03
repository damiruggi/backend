import dao from "../data/dao.factory.js";
import UsersDTO from "../dto/users.dto.js";
const { usersManager } = dao;

class UserRepository {
  constructor() {
    this.model = usersManager;
  }
  create = async (data) => {
    try {
      data = new UsersDTO(data);
      const one = await this.model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
<<<<<<< HEAD
  readByEmail = async (email) => {
=======
  readByEmailRepository = async (email) => {
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
    try {
      const one = await this.model.readByEmail(email);
      return one;
    } catch (error) {
      throw error;
    }
  };
<<<<<<< HEAD
  update = async (id, data) => {
=======
  updateRepository = async (id, data) => {
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
    try {
      const one = await this.model.update(id, data);
      return one;
    } catch (error) {
      throw error;
    }
  };
}

const userRepository = new UserRepository();
export default userRepository;