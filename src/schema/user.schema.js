import joi from "joi.oid";

const usersSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
  avatar: joi.string(),
  role: joi.string(),
  verify: joi.boolean(),
  verifyCode: joi.string(),
});

export default usersSchema;
