import { Schema, model } from "mongoose";

const collection = "products";
const schema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: "Zapatillas" },
  },
  {
    timestamps: true,
  }
);

const Product = model(collection, schema);
export default Product;
