import argsUtil from "../utils/args.util.js";
import crypto from "crypto";

const persistence = argsUtil.persistence;

class ProductDto {
  constructor(data) {
    persistence !== "mongo" &&
      (this._id = crypto.randomBytes(12).toString("hex"));
    this.title = data.title
    this.description = data.description
    this.price = data.price
    this.stock = data.stock
    this.category = data.category
    this.images = data.images || "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/04c6a509-4244-472c-8323-f12db3579219.jpg"
    persistence !== "mongo" && (this.createdAt = new Date());
    persistence !== "mongo" && (this.updatedAt = new Date());
  }
}

export default ProductDto;