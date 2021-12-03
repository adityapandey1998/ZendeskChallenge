const menus = {
  entry: `  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ▒▓▓▓▓▓▓▓▓▓░░░░░▒▓▓▓▓▒░░░░░░░▒▓▓▓▓▓▒░░░░░░░▒▓▓▓▓▒░██▒░░░░▒▒▓▓▓▓▒░░░░░░▒▓▓▓▓▒▒░░░▓█▓░░░░▒▓▓░
  ▒▒▒▒▒▒▓██▓░░░▓█▓▒▒▒▒▓█▓░░░░▓█▓▒▒▒▓██░░░░▓██▓▒▒▒▓███▒░░░▓█▓▒▒▒▓██▒░░░██▒░░▒▓▓░░░▓█▓░░░▓█▓░░
  ░░░░░▓█▓▒░░░▓██▒░░░░▒██▓░░▓█▓░░░░░▓█▓░░▓█▓░░░░░░▒██▒░░██▓░░░░░▓██░░░██▓▒▒░░░░░░▓█▓░▓█▓▒░░░
  ░░░▓█▓▒░░░░░███▓▓▓▓▓▓▓▓▒░░▓█▓░░░░░▓█▓░░▓█▒░░░░░░░██▒░░██▓▓▓▓▓▓▓▓▓░░░░▒▒▒▓▓█▓▒░░▓███▓▓█▒░░░
  ▒▓█▓▒░░░░░░░▒██▓░░░░░▒░░░░▓█▓░░░░░▓█▓░░▒██▒░░░░▒▓██▒░░▓██▒░░░░▒▒░░░░▒▒░░░░▓█▓░░▓█▓░░░▓█▓░░
  ██████████▒░░░▒▓█████▓▒░░░▓█▓░░░░░▓█▓░░░░▓▓████▓▒██▒░░░▒▓██████▓░░░░▒▓██▓██▓░░░▓█▓░░░░▒██▒
  ` + 
  '\nWelcome to the Ticket Viewer App' +
    '\n Press 1 to enter and view choices' +
    '\n Press 2 to exit the program',

  mainMenu: `  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ▒▓▓▓▓▓▓▓▓▓░░░░░▒▓▓▓▓▒░░░░░░░▒▓▓▓▓▓▒░░░░░░░▒▓▓▓▓▒░██▒░░░░▒▒▓▓▓▓▒░░░░░░▒▓▓▓▓▒▒░░░▓█▓░░░░▒▓▓░
  ▒▒▒▒▒▒▓██▓░░░▓█▓▒▒▒▒▓█▓░░░░▓█▓▒▒▒▓██░░░░▓██▓▒▒▒▓███▒░░░▓█▓▒▒▒▓██▒░░░██▒░░▒▓▓░░░▓█▓░░░▓█▓░░
  ░░░░░▓█▓▒░░░▓██▒░░░░▒██▓░░▓█▓░░░░░▓█▓░░▓█▓░░░░░░▒██▒░░██▓░░░░░▓██░░░██▓▒▒░░░░░░▓█▓░▓█▓▒░░░
  ░░░▓█▓▒░░░░░███▓▓▓▓▓▓▓▓▒░░▓█▓░░░░░▓█▓░░▓█▒░░░░░░░██▒░░██▓▓▓▓▓▓▓▓▓░░░░▒▒▒▓▓█▓▒░░▓███▓▓█▒░░░
  ▒▓█▓▒░░░░░░░▒██▓░░░░░▒░░░░▓█▓░░░░░▓█▓░░▒██▒░░░░▒▓██▒░░▓██▒░░░░▒▒░░░░▒▒░░░░▓█▓░░▓█▓░░░▓█▓░░
  ██████████▒░░░▒▓█████▓▒░░░▓█▓░░░░░▓█▓░░░░▓▓████▓▒██▒░░░▒▓██████▓░░░░▒▓██▓██▓░░░▓█▓░░░░▒██▒` +
    '\n\nMenu' +
    '\n Press 1 to view all the tickets' +
    '\n Press 2 to view a specific ticket' +
    '\n Press 3 to exit the program',

  invalidChoice: '\nYou have entered an invalid option!' +
    '\nPlease try again -',

  exit: `  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ▒▓▓▓▓▓▓▓▓▓░░░░░▒▓▓▓▓▒░░░░░░░▒▓▓▓▓▓▒░░░░░░░▒▓▓▓▓▒░██▒░░░░▒▒▓▓▓▓▒░░░░░░▒▓▓▓▓▒▒░░░▓█▓░░░░▒▓▓░
  ▒▒▒▒▒▒▓██▓░░░▓█▓▒▒▒▒▓█▓░░░░▓█▓▒▒▒▓██░░░░▓██▓▒▒▒▓███▒░░░▓█▓▒▒▒▓██▒░░░██▒░░▒▓▓░░░▓█▓░░░▓█▓░░
  ░░░░░▓█▓▒░░░▓██▒░░░░▒██▓░░▓█▓░░░░░▓█▓░░▓█▓░░░░░░▒██▒░░██▓░░░░░▓██░░░██▓▒▒░░░░░░▓█▓░▓█▓▒░░░
  ░░░▓█▓▒░░░░░███▓▓▓▓▓▓▓▓▒░░▓█▓░░░░░▓█▓░░▓█▒░░░░░░░██▒░░██▓▓▓▓▓▓▓▓▓░░░░▒▒▒▓▓█▓▒░░▓███▓▓█▒░░░
  ▒▓█▓▒░░░░░░░▒██▓░░░░░▒░░░░▓█▓░░░░░▓█▓░░▒██▒░░░░▒▓██▒░░▓██▒░░░░▒▒░░░░▒▒░░░░▓█▓░░▓█▓░░░▓█▓░░
  ██████████▒░░░▒▓█████▓▒░░░▓█▓░░░░░▓█▓░░░░▓▓████▓▒██▒░░░▒▓██████▓░░░░▒▓██▓██▓░░░▓█▓░░░░▒██▒` +
  '\n\nThanks for being with us today! See you later!',

  gettingTicket: `  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ▒▓▓▓▓▓▓▓▓▓░░░░░▒▓▓▓▓▒░░░░░░░▒▓▓▓▓▓▒░░░░░░░▒▓▓▓▓▒░██▒░░░░▒▒▓▓▓▓▒░░░░░░▒▓▓▓▓▒▒░░░▓█▓░░░░▒▓▓░
  ▒▒▒▒▒▒▓██▓░░░▓█▓▒▒▒▒▓█▓░░░░▓█▓▒▒▒▓██░░░░▓██▓▒▒▒▓███▒░░░▓█▓▒▒▒▓██▒░░░██▒░░▒▓▓░░░▓█▓░░░▓█▓░░
  ░░░░░▓█▓▒░░░▓██▒░░░░▒██▓░░▓█▓░░░░░▓█▓░░▓█▓░░░░░░▒██▒░░██▓░░░░░▓██░░░██▓▒▒░░░░░░▓█▓░▓█▓▒░░░
  ░░░▓█▓▒░░░░░███▓▓▓▓▓▓▓▓▒░░▓█▓░░░░░▓█▓░░▓█▒░░░░░░░██▒░░██▓▓▓▓▓▓▓▓▓░░░░▒▒▒▓▓█▓▒░░▓███▓▓█▒░░░
  ▒▓█▓▒░░░░░░░▒██▓░░░░░▒░░░░▓█▓░░░░░▓█▓░░▒██▒░░░░▒▓██▒░░▓██▒░░░░▒▒░░░░▒▒░░░░▓█▓░░▓█▓░░░▓█▓░░
  ██████████▒░░░▒▓█████▓▒░░░▓█▓░░░░░▓█▓░░░░▓▓████▓▒██▒░░░▒▓██████▓░░░░▒▓██▓██▓░░░▓█▓░░░░▒██▒` +
  '\nFetching the ticket you requested...',

  gettingMultipleTickets: `  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ▒▓▓▓▓▓▓▓▓▓░░░░░▒▓▓▓▓▒░░░░░░░▒▓▓▓▓▓▒░░░░░░░▒▓▓▓▓▒░██▒░░░░▒▒▓▓▓▓▒░░░░░░▒▓▓▓▓▒▒░░░▓█▓░░░░▒▓▓░
  ▒▒▒▒▒▒▓██▓░░░▓█▓▒▒▒▒▓█▓░░░░▓█▓▒▒▒▓██░░░░▓██▓▒▒▒▓███▒░░░▓█▓▒▒▒▓██▒░░░██▒░░▒▓▓░░░▓█▓░░░▓█▓░░
  ░░░░░▓█▓▒░░░▓██▒░░░░▒██▓░░▓█▓░░░░░▓█▓░░▓█▓░░░░░░▒██▒░░██▓░░░░░▓██░░░██▓▒▒░░░░░░▓█▓░▓█▓▒░░░
  ░░░▓█▓▒░░░░░███▓▓▓▓▓▓▓▓▒░░▓█▓░░░░░▓█▓░░▓█▒░░░░░░░██▒░░██▓▓▓▓▓▓▓▓▓░░░░▒▒▒▓▓█▓▒░░▓███▓▓█▒░░░
  ▒▓█▓▒░░░░░░░▒██▓░░░░░▒░░░░▓█▓░░░░░▓█▓░░▒██▒░░░░▒▓██▒░░▓██▒░░░░▒▒░░░░▒▒░░░░▓█▓░░▓█▓░░░▓█▓░░
  ██████████▒░░░▒▓█████▓▒░░░▓█▓░░░░░▓█▓░░░░▓▓████▓▒██▒░░░▒▓██████▓░░░░▒▓██▓██▓░░░▓█▓░░░░▒██▒` +
  '\nFetching the tickets...',

  ticketById: `  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░██▒░░░░░░░░░░░░░░░░░░░░░░░░░░░▓█▓░░░░░░░░
  ▒▓▓▓▓▓▓▓▓▓░░░░░▒▓▓▓▓▒░░░░░░░▒▓▓▓▓▓▒░░░░░░░▒▓▓▓▓▒░██▒░░░░▒▒▓▓▓▓▒░░░░░░▒▓▓▓▓▒▒░░░▓█▓░░░░▒▓▓░
  ▒▒▒▒▒▒▓██▓░░░▓█▓▒▒▒▒▓█▓░░░░▓█▓▒▒▒▓██░░░░▓██▓▒▒▒▓███▒░░░▓█▓▒▒▒▓██▒░░░██▒░░▒▓▓░░░▓█▓░░░▓█▓░░
  ░░░░░▓█▓▒░░░▓██▒░░░░▒██▓░░▓█▓░░░░░▓█▓░░▓█▓░░░░░░▒██▒░░██▓░░░░░▓██░░░██▓▒▒░░░░░░▓█▓░▓█▓▒░░░
  ░░░▓█▓▒░░░░░███▓▓▓▓▓▓▓▓▒░░▓█▓░░░░░▓█▓░░▓█▒░░░░░░░██▒░░██▓▓▓▓▓▓▓▓▓░░░░▒▒▒▓▓█▓▒░░▓███▓▓█▒░░░
  ▒▓█▓▒░░░░░░░▒██▓░░░░░▒░░░░▓█▓░░░░░▓█▓░░▒██▒░░░░▒▓██▒░░▓██▒░░░░▒▒░░░░▒▒░░░░▓█▓░░▓█▓░░░▓█▓░░
  ██████████▒░░░▒▓█████▓▒░░░▓█▓░░░░░▓█▓░░░░▓▓████▓▒██▒░░░▒▓██████▓░░░░▒▓██▓██▓░░░▓█▓░░░░▒██▒` +
  '\nHope you have your ticket ID with you...'
};

export { menus };