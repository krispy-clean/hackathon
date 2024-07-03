import { Context } from "elysia";
import userModel from "../../db/models/userModel";
import type { User } from "../../db/schemas/userSchema";
import generatePasswordAndSalt from "../../utils/auth/genearatePasswordAndSalt";

const createUser = async (ctx: Context) => {
  const {
    body: {
      firstName,
      lastName,
      email,
      password: rawPassword,
      dailyFee,
      description,
    },
  } = ctx as { body: User };
  const [password, passwordHash] = await generatePasswordAndSalt(rawPassword);

  const user = await userModel.create({
    firstName,
    lastName,
    email,
    dailyFee,
    password,
    passwordHash,
    description,
  });

  return JSON.stringify(user);
};

export default createUser;
