import { Message } from "discord.js";
import { Bot } from "../client/client";
import { ExecuteFunction } from "../interfaces/command";

export const name: string = "ping";
export const description: string = "Replies with sender's id";
export const isActive: boolean = true;

export const execute: ExecuteFunction = async (client, message, args) => {
  message.reply("Hello " + message.author.tag);
};
