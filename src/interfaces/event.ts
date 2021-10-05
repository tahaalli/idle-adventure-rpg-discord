import { Bot } from "../client/client";

export interface ExecuteFunction {
  (client: Bot, ...args: any[]): Promise<void>;
}

export interface Event {
  name: string;
  execute: ExecuteFunction;
}
