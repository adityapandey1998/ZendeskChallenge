import { menus } from './menus.mjs';
import { optionKey, mainOptionKey } from './config.mjs';
import { getTicketById, getMultipleTickets } from './requestUtils.mjs';
import schema from "./inputSchema.mjs";
import output from './output.mjs';
import prompt from 'prompt';

// The index.mjs file is the starting point of our program
// The initial menu and the business logic is controlled from here

prompt.start();

prompt.message = '';
prompt.delimiter = ':';

async function main () {
  let programExit = true;
  console.clear();
  output.show(menus.entry);
  const { mainMenuOption } = await prompt.get(schema.mainMenuSchema);
  if (mainMenuOption == mainOptionKey.ENTER) {
    programExit = false;
    console.clear();
  } else if (mainMenuOption == mainOptionKey.EXIT) {
    programExit = true;
  } else {
    console.clear();
    output.show(`\n Did you mean to enter ${mainOptionKey.ENTER}? Here's the main menu anyway...`);
    programExit = false;
  }
  
  while (!programExit) {
    try {
      output.show(menus.mainMenu);
      const { option } = await prompt.get(schema.optionSchema);

      if (option == optionKey.GET_BY_ID) {
        console.clear();
        output.show(menus.ticketById);
        const { ticketId } = await prompt.get(schema.ticketIdSchema);
        console.clear();
        await getTicketById(Number(ticketId));
        await prompt.get(schema.enterSchema);
      } else if (option == optionKey.GET_ALL) {
        console.clear();
        const currentPage = 0;
        await getMultipleTickets(currentPage);
        await prompt.get(schema.enterSchema);
      } else if (option == optionKey.EXIT) { programExit = true; }
      else {
        console.clear();
      }
      console.clear();
    } catch (err) {
      await prompt.get(schema.enterSchema);
      programExit=true;
    }
    
  }
  console.clear();
  output.show(menus.exit);
}

main();