import { Schema, model, Types } from "mongoose";

const collection = "carts";
const schema = new Schema(
  {
    user_id: { type: Types.ObjectId, ref: "users", required: true },
    product_id: { type: Types.ObjectId, ref: "products", required: true },
    quantity: { type: Number, required: true },
    state: {
      type: String,
      enum: ["reserved", "paid", "delivered"],
      default: "reserved",
    },
  },
  {
    timestamps: true,
  }
);

//POPULAR CON EL PARÁMETRO (PROPIEDAD A POBLAR)
schema.pre("find", function () {
  this.populate("product_id");
});

//POPULAR CON EL OBJETO
//PATH: propiedad a poblar
//SELECT: selectores del objeto a poblar
//POPULATE: para poblar otro campo
//este POPULATE DE DENTRO DEL POPULATE ADMITE LOS CAMPOS
  //PATH
  //SELECT
  //POPULATE
schema.pre("find", function () {
  this.populate({
    path: "user_id",
    select: "email role",
    /* populate: {
      path: "country_id",
      select: "name city_id",
      populate: {
        path: "city_id",
        select: "name"
      }
    } */
  });
});

const Cart = model(collection, schema);
export default Cart;