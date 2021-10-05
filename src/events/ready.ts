import { Bot } from "../client/client";
import { ExecuteFunction } from "../interfaces/event";

export const name: string = "ready";

export const execute: ExecuteFunction = async (client, args) => {
  console.info("Ready!");
};
