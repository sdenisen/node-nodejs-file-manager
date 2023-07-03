const CMD_EXIT = ".exit";
export const DEFAULT_USER_NAME = "User";

export const COMMANDS = {"add": cmdAdd}

export const executeCommand = async ({ cmd_alias, args }) => {
    if (COMMANDS.has(cmd_alias)) {
      const cmd = COMMANDS.get(cmd_alias);
      return await cmd(args);
    } else {
      throw new Error(errType.INVALID_INPUT, { cause: `Invalid command name: ${cmd_alias}` });
    }
  };