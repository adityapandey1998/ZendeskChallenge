const moreTicketsSchema = {
  properties: {
    moreTickets: {
      pattern: /[ynYN]/,
      message: 'Option Must be Y/N',
      required: true,
      description: 'Enter your choice (y/n)'
    }
  }
};

const optionSchema = {
  properties: {
    option: {
      pattern: /[123]/,
      message: 'Oops! The option Must be between 1-3',
      required: true,
      description: ' Enter your option'
    }
  }
};
const mainMenuSchema = {
  properties: {
    mainMenuOption: {
      pattern: /[12]/,
      message: 'Oops! The option Must be between 1-2',
      required: true,
      description: ' Enter your option'
    }
  }
};

const ticketIdSchema = {
  properties: {
    ticketId: {
      pattern: /[0-9]+/,
      message: 'Oops! The Entry Must Be a Number',
      required: true,
      description: ' Please enter the ticket ID'
    }
  }
};

export default { mainMenuSchema, ticketIdSchema, optionSchema, moreTicketsSchema };
