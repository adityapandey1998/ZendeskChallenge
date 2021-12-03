import { menus } from './menus.js';
import output from './output.js';
import { optionKey, mainOptionKey } from './config.js';
import { getTicketById, getMultipleTickets } from './requestUtils.js';
import prompt from 'prompt';
prompt.start();

prompt.message = '';
prompt.delimiter = ':';
const optionSchema = {
  properties: {
    option: {
      pattern: /[12]/,
      message: 'Option Must be between 1-3',
      required: true,
      description: 'Enter your option'
    }
  }
};

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

const enterSchema = {
  properties: {
    mainMenuOption: {
      message: 'Press any key to continue',
      required: false,
      description: 'Press any key to continue'
    }
  }
};

const ticketIdSchema = {
  properties: {
    ticketId: {
      pattern: /[0-9]+/,
      message: 'Option Must Be a Number',
      required: true,
      description: 'Please enter the ticket ID'
    }
  }
};

async function main () {
  let programExit = true;
  console.clear()
  output.show(menus.entry);
  const { mainMenuOption } = await prompt.get(mainMenuSchema);
  if (mainMenuOption == mainOptionKey.ENTER) {
    programExit = false;
  } else if (mainMenuOption == mainOptionKey.EXIT) {
    programExit = true;
  } else {
    output.show("\n Taking you to the main menu anyway...");
    programExit = false;
  }
  
  while (!programExit) {
    try {
      output.show(menus.mainMenu);
      const { option } = await prompt.get(optionSchema);

      if (option == optionKey.GET_BY_ID) {
        console.clear()
        output.show(menus.ticketById);
        const { ticketId } = await prompt.get(ticketIdSchema);
        console.clear()
        await getTicketById(Number(ticketId));
        await prompt.get(enterSchema);
      } else if (option == optionKey.GET_ALL) {
        console.clear()
        const currentPage = 0;
        await getMultipleTickets(currentPage);
        await prompt.get(enterSchema);
      } else if (option == optionKey.EXIT) { programExit = true; }
      else {
        console.clear();
      }
    } catch (err) {
      programExit=true;
    }
    
  }
  console.clear()
  output.show(menus.exit);
}

main();