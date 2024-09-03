import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "products";
const schema = new Schema(
  {
    title: { type: String, required: true, index: true },
    description: { type: String, required: true },
    price: { type: Number, default: 1 },
    stock: { type: Number, default: 10 },
    images: [
      {
        type: String,
        default: ["https://i.postimg.cc/kX8PKZpq/ipad.jpg"],
      },
    ],
    colors: [
      {
        type: String,
        default: [""],
      },
    ],
    onsale: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);

const Product = model(collection, schema);
<<<<<<< HEAD
export default Product;
=======
export default Product;
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
