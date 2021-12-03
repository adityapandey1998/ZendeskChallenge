import { menus } from './menus.js';
import { optionKey, mainOptionKey } from './config.js';
import { getTicketById, getMultipleTickets } from './requestUtils.js';
import schema from "./inputSchema.js";
import output from './output.js';
import prompt from 'prompt';
prompt.start();

prompt.message = '';
prompt.delimiter = ':';

async function main () {
  let programExit = true;
  console.clear()
  output.show(menus.entry);
  const { mainMenuOption } = await prompt.get(schema.mainMenuSchema);
  if (mainMenuOption == mainOptionKey.ENTER) {
    programExit = false;
    console.clear();
  } else if (mainMenuOption == mainOptionKey.EXIT) {
    programExit = true;
  } else {
    console.clear();
    output.show("\n Taking you to the main menu anyway...");
    programExit = false;
      
  }
  
  while (!programExit) {
    try {
      output.show(menus.mainMenu);
      const { option } = await prompt.get(schema.optionSchema);

      if (option == optionKey.GET_BY_ID) {
        console.clear()
        output.show(menus.ticketById);
        const { ticketId } = await prompt.get(schema.ticketIdSchema);
        console.clear()
        await getTicketById(Number(ticketId));
        await prompt.get(schema.enterSchema);
      } else if (option == optionKey.GET_ALL) {
        console.clear()
        const currentPage = 0;
        await getMultipleTickets(currentPage);
        await prompt.get(schema.enterSchema);
      } else if (option == optionKey.EXIT) { programExit = true; }
      else {
        console.clear();
      }
      console.clear();
    } catch (err) {
      programExit=true;
    }
    
  }
  console.clear()
  output.show(menus.exit);
}

main();