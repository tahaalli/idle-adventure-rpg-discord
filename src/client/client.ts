import dotenv from "dotenv";
dotenv.config();
import glob from "glob";
import { promisify } from "util";

import {
  Client,
  Intents,
  Collection,
  MessageEmbedOptions,
  MessageEmbed,
  Message,
} from "discord.js";
import { Command } from "../interfaces/command";
import { Event } from "../interfaces/event";

const globPromise = promisify(glob);

class Bot extends Client {
  public commands: Collection<string, Command> = new Collection();
  public events: Collection<string, Event> = new Collection();

  public constructor() {
    super({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
  }

  public async start(): Promise<void> {
    // Login to Discord with your client's token
    this.login(process.env.TOKEN);
    // Get command files
    const commandFiles: string[] = await globPromise(
      `${__dirname}/../commands/*{.ts, .js}`
    );
    // Get event files
    const eventFiles: string[] = await globPromise(
      `${__dirname}/../events/*{.ts, .js}`
    );
    // Set commands
    commandFiles.map(async (path: string) => {
      const command: Command = await import(path);
      this.commands.set(command.name, command);
    });
    // Set events
    eventFiles.map(async (path: string) => {
      const event: Event = await import(path);
      this.events.set(event.name, event);
      // Set on client event
      this.on(event.name, event.execute.bind(null, this));
    });
  }
}

export { Bot };
