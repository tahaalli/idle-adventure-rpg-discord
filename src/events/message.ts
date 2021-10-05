import { ExecuteFunction, Command } from "../interfaces/command";
import { GetUser } from "../utils/database";

export const name: string = "messageCreate";

export const execute: ExecuteFunction = async (client, message) => {
  // Set prefix
  const prefix = "!cmd";
  // Validate the author
  if (message.author.bot || !message.guild) return;
  // Validate the prefix
  if (!message.content.toLowerCase().startsWith(prefix)) return;
  // Get arguments from message
  const args: string[] = message.content
    .toLowerCase()
    .slice(prefix.length)
    .trim()
    .split(/ +g/);
  // Get command from arguments
  const commandString: string | undefined = args.shift();
  if (!commandString) return;
  // Get command obj from Commands collection
  const command: Command | undefined = client.commands.get(commandString);
  // Validate command
  if (!command) {
    message.reply("Invalid command! Type [!cmd help] to see command list.");
    return;
  }
  // Validate if command is active
  if (!command.isActive) {
    message.reply(
      "Command is depreciated! Type [!cmd help] to see command list."
    );
    return;
  }
  // Validate user
  const user = await GetUser(message.author.id);
  if (!user && command.name != "init") {
    message.reply("Type [!cmd init] to create new user.");
    return;
  }
  // Execute command
  command.execute(client, message, args).catch((err) => {
    message.reply("Server Error: Something went wrong!");
  });
};
