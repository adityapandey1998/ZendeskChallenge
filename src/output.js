// import chalk from 1'chalk';
import chalk from 'chalk';
import changeCase from 'change-case';
import date from 'date-and-time';

function show (message) {
  console.log(message);
}

function showSingleTicket (response) {
  if (response.status == 200) {
    const { subject, requester_id: requesterId, updated_at: updatedAt, status, id } = response.data.ticket;
    const outputString = '\nYour ticket - \n' +
        `\n Id: ${chalk.cyan(id)}` +
        `\n Subject: ${chalk.cyan(subject)}` +
        `\n Requested By: ${chalk.cyan(requesterId)}` +
        `\n Last Updated: ${chalk.cyan(date.format(new Date(updatedAt), 'ddd, MMM DD YYYY at h:mm A'))}` +
        `\n Current Status: ${chalk.cyan(changeCase.headerCase(status))}`;
    console.log(outputString);
  } else {
    console.log('Invalid ID');
  }
}

function showNotFoundError () {
  const outputString = '\nThere was an error completing your request - \n' +
    `\n ${chalk.redBright('We could not find any tickets\n Please Try Again in a while')}`;
  console.log(outputString);
}

function showTooManyRequestsError () {
  const outputString = '\nThere was an error completing your request - \n' +
    `\n ${chalk.redBright('Too many failed login attempts in a short period of time.\n Please Try Again in a while')}`;
  console.log(outputString);
}

function showUnauthError () {
  const outputString = '\nThere was an error completing your request - \n' +
    `\n ${chalk.redBright('We could not authenticate you\n Please check your credentials and try Again')}\nHint: Check that you are passing the correct email and token in the environment variables`;
  console.log(outputString);
}

function showGenericError () {
  const outputString = '\nSomething went wrong on your side or ours :( \n' +
    `\n ${chalk.redBright(' Please Try Again in a while')}`;
  console.log(outputString);
}

function showMultipleTickets (tickets) {
  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i];
    const { subject, requester_id: requesterId, updated_at: updatedAt, status, id } = ticket;
    const outputString = `\nTicket Id: ${chalk.cyan(id)}` +
        `\n Subject: ${chalk.cyan(subject)}` +
        `\n This was requested by ${chalk.cyan(requesterId)}` +
        ` and was last updated on ${chalk.cyan(date.format(new Date(updatedAt), 'ddd, MMM DD YYYY at h:mm A'))}` +
        `\n The Current Status is ${chalk.cyan(changeCase.headerCase(status))}`;
    console.log(outputString);
  }
}
export default { showSingleTicket, show, showNotFoundError, showMultipleTickets, showTooManyRequestsError, showUnauthError, showGenericError };
