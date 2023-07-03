import { getGreetingString } from './commands/operation_system/getGreetingString.js';

class App {
  constructor(){
    const cmd_args = process.argv.slice(2);
    console.log(getGreetingString());
  }
  init = () => {
    console.clear();
    console.log(getGreetingString());

    // const rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout,
    //   prompt: getPromptStr(this.appData.currDir),
    // });

    // rl.prompt();

    // rl.on('line', async (line) => {
    //   await this.lineHandler(line);
    //   rl.prompt();
    // });

    // process.on('exit', () => {
    //   console.log(getGoodbyeStr(this.appData.username));
    // });

    // this.appData.on('currDirChanged', () => {
    //   rl.setPrompt(getPromptStr(this.appData.currDir));
    // });
  };
}

export const app = new App();