// import chalk from 1'chalk';
import chalk from 'chalk';
import changeCase from 'change-case';
import date from 'date-and-time';

function show (message) {
  console.log(message);
}

// This function takes in the response object returned after the API call and prints the details of the ticket 
function showSingleTicket (response) {
  if (response.status == 200) {
    var { subject, requester_id: requesterId, updated_at: updatedAt, status, id, description, priority, url } = response.data.ticket;
    
    if(priority==null)
      priority="None";
    let outputDict = {
      "Ticket Id": id,
      "Subject": subject,
      "Requested By": requesterId,
      "Last Updated": date.format(new Date(updatedAt), 'ddd, MMM DD YYYY at h:mm A'),
      "Current Status": changeCase.headerCase(status),
      // "Description": description,
      "Priority" : priority,
      "URL": url
    };
    console.table(outputDict);
    return true;
  } else {
    const outputString = '\nThere was an error completing your request - \n' +
    `\n ${chalk.redBright('We could not print the requested ticket\n Please Try Again in a while\n')}`;
    console.log(outputString);
    return false;
  }
}

// This function takes in the ticket array returned after the API call and prints the details of the ticket 
function showMultipleTickets (tickets) {
  try {
    var dictTickets = [];
    for (let i = 0; i < tickets.length; i++) {
      const ticket = tickets[i];
      const { subject, requester_id: requesterId, updated_at: updatedAt, status, id } = ticket;
      const outputString = `\nTicket Id: ${chalk.cyan(id)}` +
        `\n Subject: ${chalk.cyan(subject)}` +
        `\n This was requested by ${chalk.cyan(requesterId)}` +
        ` and was last updated on ${chalk.cyan(date.format(new Date(updatedAt), 'ddd, MMM DD YYYY at h:mm A'))}` +
        `\n The Current Status is ${chalk.cyan(changeCase.headerCase(status))}`;
      let outputDict = {
        "Ticket Id": id,
        "Subject": subject,
        "Requested By": requesterId,
        "Last Updated": date.format(new Date(updatedAt), 'ddd, MMM DD YYYY at h:mm A'),
        "Current Status": changeCase.headerCase(status),
      };
      dictTickets.push(outputDict);
    }
    console.table(dictTickets);
    return true;
  } catch(err) {
    const outputString = '\nThere was an error completing your request - \n' +
      `\n ${chalk.redBright('We could not print the tickets\n Please Try Again in a while\n')}`;
    console.log(outputString);
    return false;
  }
}

// The functions below contain standard eror messages
function showNotFoundError () {
  const outputString = '\nThere was an error completing your request - \n' +
    `\n ${chalk.redBright('We could not find any tickets with the specified ID(s)\n Please Try Again in a while\n')}`;
  console.log(outputString);
}

function showTooManyRequestsError () {
  const outputString = '\nThere was an error completing your request - \n' +
    `\n ${chalk.redBright('Too many failed login attempts in a short period of time.\n Please Try Again in a while')}`;
  console.log(outputString);
}

function showUnauthError () {
  const outputString = '\nThere was an error completing your request - \n' +
    `\n ${chalk.redBright('We could not authenticate you\n Please check your credentials and try Again')}\nHint: Check that you are passing the correct email and token in the environment variables\n`;
  console.log(outputString);
}

function showGenericError () {
  const outputString = '\nSomething went wrong on your side or ours :( \n' +
    `\n ${chalk.redBright(' Please Try Again in a while')}\n`;
  console.log(outputString);
}

export default { showSingleTicket, show, showNotFoundError, showMultipleTickets, showTooManyRequestsError, showUnauthError, showGenericError };
