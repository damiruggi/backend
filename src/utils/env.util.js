import { config } from "dotenv";
import argsUtil from "./args.util.js";

const { env } = argsUtil;
const path = env == "prod" ? "./.env.prod" : "./.env.dev";

config({ path });

const environment = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  SECRET: process.env.SECRET,
  SECRET_SESSION: process.env.SECRET_SESSION,

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  SECRET_JWT: process.env.SECRET_JWT,
};

export default environment;
