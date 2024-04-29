import { Schema, model } from "mongoose";

const collection = "users";
const schema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: { type: Number, default: 0, index: true },
    photo: {
      type: String,
      default: "https://cdn-icons-png.freepik.com/512/266/266033.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = model(collection, schema);
export default User;
