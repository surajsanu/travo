import { User } from "../models/user.model.js";

export const createUser = async ({ firstName, lastName, email, password }) => {
  if (!firstName || !email || !password) {
    throw new Error("First name, email and password are required");
  }

  const user = new User({
    fullName: {
      firstName,
      lastName,
    },
    email,
    password,
  });
  await user.save();
  return user;
};
