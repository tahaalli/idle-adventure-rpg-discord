import { Message } from "discord.js";
import { Bot } from "../client/client";

export interface ExecuteFunction {
  (client: Bot, message: Message, args: string[]): Promise<void>;
}

export interface Command {
  name: string;
  description: string;
  isActive: boolean;
  execute: ExecuteFunction;
}
