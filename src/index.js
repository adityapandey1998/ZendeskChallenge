import { menus } from './menus.js'
import output from './output.js'
import { optionKey, mainOptionKey } from './config.js'
import { getTicketById, getMultipleTickets } from './requestUtils.js'
import prompt from 'prompt'
prompt.start()

prompt.message = ''
prompt.delimiter = ':'
const optionSchema = {
  properties: {
    option: {
      pattern: /[123]/,
      message: 'Option Must be between 1-3',
      required: true,
      description: 'Enter your option'
    }
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
}

const ticketIdSchema = {
  properties: {
    ticketId: {
      pattern: /[0-9]+/,
      message: 'Option Must Be a Number',
      required: true,
      description: 'Please enter the ticket ID'
    }
  }
}

async function main () {
  let programExit = true

  output.show(menus.entry)
  const { mainMenuOption } = await prompt.get(mainMenuSchema)
  if (mainMenuOption == mainOptionKey.ENTER) {
    programExit = false
  }

  while (!programExit) {
    output.show(menus.mainMenu)
    const { option } = await prompt.get(optionSchema)
    console.log('You entered option: ' + option)
    if (option == optionKey.GET_BY_ID) {
      output.show(menus.ticketById)
      const { ticketId } = await prompt.get(ticketIdSchema)
      await getTicketById(Number(ticketId))
    } else if (option == optionKey.GET_ALL) {
      const currentPage = 0
      await getMultipleTickets(currentPage)
    } else if (option == optionKey.EXIT) { programExit = true }
  }
  output.show(menus.exit)
}

main();