import DEFAULT_USER_NAME from "./commands.js";

const parseArgs = () => {
    let command_line_args = process.argv.slice(2);
    let user_name = command_line_args.length == 1 ? command_line_args[0].split("=")[1] : DEFAULT_USER_NAME;  
    console.log(`Welcome to the File Manager, ${user_name}!`);

    while(true){
        
        
    }
};

parseArgs();