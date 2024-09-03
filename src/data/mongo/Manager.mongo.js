class Manager {
  constructor(Model) {
    this.Model = Model;
  }
  async create(data) {
    try {
      const one = await this.Model.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  }
  async read(filter) {
    try {
      const all = await this.Model.find(filter).lean();
      return all;
    } catch (error) {
      throw error;
    }
  }
  async paginate({ filter, opts }) {
    try {
      const all = await this.Model.paginate(filter, opts);
      return all;
    } catch (error) {
      throw error;
    }
  }
<<<<<<< HEAD
  async readByEmail(email) {
    try {
      const one = await this.Model.findOne({ email });
      return one;
    } catch (error) {
      throw error;
    }
  }
  async paginate({filter, opts}) {
    try {
      const all = await this.Model.paginate(filter, opts);
      return all;
    } catch (error) {
      throw error;
    }
  }
=======
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
  async readOne(id) {
    try {
      //const one = await Note.findById(id)
      const one = await this.Model.findOne({ _id: id });
      return one;
    } catch (error) {
      throw error;
    }
  }
  async readByEmail(email) {
    try {
      const one = await this.Model.findOne({ email });
      return one;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const one = await this.Model.findByIdAndUpdate(id, data, { new: true });
      return one;
    } catch (error) {
      throw error;
    }
  }
  async destroy(id) {
    try {
      const one = await this.Model.findByIdAndDelete(id);
      return one;
    } catch (error) {
      throw error;
    }
  }
<<<<<<< HEAD
  async aggregate(obj) {
    try {
      const result = await this.Model.aggregate(obj);
      return result;
    } catch (error) {
      throw error;
    }
  }
=======
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
}

export default Manager;