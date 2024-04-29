import { Schema, Types, model } from "mongoose";

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
    user_id: {
      type: Types.ObjectId,
      ref: "users",
      index: true,
      required: true,
    },
    user: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

schema.pre("find", function () {
  this.populate("user_id", "email photo -_id");
});

schema.pre("findOne", function () {
  this.populate("user_id", "email");
});

schema.pre("findOneAndUpdate", function () {
  this.populate("user_id", "email");
});
schema.pre("findOneAndDelete", function () {
  this.populate("user_id", "email");
});

const Product = model(collection, schema);
export default Product;
