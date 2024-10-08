import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "users";
const schema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    role: { type: Number, default: 0, index: true },
    age: { type: Number, default: 12 },
    photo: {
      type: String,
      default: "https://i.postimg.cc/wTgNFWhR/profile.png",
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(mongoosePaginate);

const User = model(collection, schema);
<<<<<<< HEAD
export default User;
=======
export default User;
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
