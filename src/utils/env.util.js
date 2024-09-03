import { config } from "dotenv";
import argsUtil from "./args.util.js";

const { env } = argsUtil;

const path = env === "dev" ? "./.env.dev" : "./.env.prod";
console.log(`Loading environment variables from ${path}`);
config({ path });

const environment = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  SECRET_COOKIE: process.env.SECRET_COOKIE,
  SECRET_SESSION: process.env.SECRET_SESSION,
  SECRET_JWT: process.env.SECRET_JWT,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_EMAIL: process.env.GOOGLE_EMAIL,
<<<<<<< HEAD
  GOOGLE_PASSWORD: process.env.GOOGLE_PASSWORD,
  STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
=======
  GOOGLE_PASSWORD: process.env.GOOGLE_PASSWORD
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
};

console.log(`Environment variables: ${JSON.stringify(environment, null, 2)}`);

export default environment;