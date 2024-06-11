import { config } from "dotenv";
import argsUtil from "./args.util.js";

const { env } = argsUtil;
const path = env == "prod" ? "./.env.prod" : "./.env.dev";

config({ path });

const environment = {
  PORT: process.env.PORT,
  SECRET_COOKIE: process.env.SECRET_COOKIE,
  SECRET_SESSION: process.env.SECRET_SESSION,
  SECRET_JWT: process.env.SECRET_JWT,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  MONGO_URI: process.env.MONGO_URI,
};

export default environment;
