import { Message } from "discord.js";
import { Bot } from "../client/client";
import { ExecuteFunction } from "../interfaces/command";
import { GetUser, InsertUser } from "../utils/database";
import { CreateUser } from "../utils/userUtils";

export const name: string = "init";
export const description: string = "Create new user.";
export const isActive: boolean = true;

export const execute: ExecuteFunction = async (client, message, args) => {
  if (await GetUser(message.author.id)) {
    message.reply("User already exists! Type [!cmd help] to see commands!");
    return;
  }

  const user = CreateUser(message.author.id, message.author.username);
  await InsertUser(user);
  message.reply(
    `User [${user.username}] has been created! Type [!cmd help] to see commands!`
  );
};
