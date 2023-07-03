const WELCOME_STR = "Welcome to the File Manager,";

export const getGreetingString = () => {
    let result = "Username";
    if (process.argv.slice(2).length == 1 && process.argv.slice(2)[0].startsWith('--username=')){
        result = process.argv.slice(2)[0].split("=")[1];
    }

    let result_greeting_string =`${WELCOME_STR} ${result}`; 
    return result_greeting_string;
};