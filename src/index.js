'use-strict'
const menu = require("./menus");
const output = require("./output");
const { optionKey, mainOptionKey } = require("./config");

var prompt = require('prompt');
prompt.start();

prompt.message="";
prompt.delimiter=":";
const optionSchema = {
    properties: {
        option: {
            pattern: /[123]/,
            message: 'Option Must be between 1-3',
            required: true,
            description: 'Enter your option'
        },
    }
}
const mainMenuSchema = {
    properties: {
        mainMenuOption: {
            pattern: /[12]/,
            message: 'Option Must be between 1-2',
            required: true,
            description: 'Enter your option'
        }
      }
    };
  
async function main() {

    let programExit=true;

    output.show(menu.menus.entry);
    const { mainMenuOption } = await prompt.get(mainMenuSchema);
    if(mainMenuOption==mainOptionKey["ENTER"]) {
        programExit=false;
    }

    while(!programExit) {
        output.show(menu.menus.mainMenu);
        const { option } = await prompt.get(optionSchema);
        console.log("You entered option: "+ option);
        if(option=="1") {

        } else if (option==2) {

        } else if(option=="3")
            programExit=true;
    }

    output.show(menu.menus.exit);
}

main()