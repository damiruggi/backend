import { Schema, model } from "mongoose";

const collection = "products";
const schema = new Schema(
  {
    title: { type: String, required: true },
    photo: {
      type: String,
      default: "https://getuikit.com/v2/docs/images/placeholder_600x400.svg",
    },
    category: { type: String, default: "Zapatillas" },
    price: { type: Number, required: true },
    stock: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

const Product = model(collection, schema);
export default Product;
