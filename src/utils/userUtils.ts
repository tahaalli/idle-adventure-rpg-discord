import { User } from "../interfaces/user";
import UserModel from "../models/userModel";

export const CreateUser = (id: string, username: string): User => {
  return new UserModel(id, username);
};
