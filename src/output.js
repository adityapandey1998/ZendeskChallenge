// import chalk from 1'chalk';
import chalk from 'chalk'
import changeCase from 'change-case'
import date from 'date-and-time'

function show (message) {
  console.log(message)
}

function showSingleTicket (response) {
  if (response.status == 200) {
    const { subject, requester_id: requesterId, updated_at: updatedAt, status, id } = response.data.ticket
    const outputString = '\nYour ticket - \n' +
        `\n Id: ${chalk.cyan(id)}` +
        `\n Subject: ${chalk.cyan(subject)}` +
        `\n Requested By: ${chalk.cyan(requesterId)}` +
        `\n Last Updated: ${chalk.cyan(date.format(new Date(updatedAt), 'ddd, MMM DD YYYY at h:mm A'))}` +
        `\n Current Status: ${chalk.cyan(changeCase.headerCase(status))}`
    console.log(outputString)
  } else {
    console.log('Invalid ID')
  }
}

function showNotFoundError () {
  const outputString = '\nThere was an error completing your request - \n' +
    `\n ${chalk.redBright('We could not find any ticket with that ID\n Please Try Again')}`
  console.log(outputString)
}

function showMultipleTickets (tickets) {
  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i]
    const { subject, requester_id: requesterId, updated_at: updatedAt, status, id } = ticket
    const outputString = `\nTicket Id: ${chalk.cyan(id)}` +
        `\n Subject: ${chalk.cyan(subject)}` +
        `\n This was requested by ${chalk.cyan(requesterId)}` +
        ` and was last updated on ${chalk.cyan(date.format(new Date(updatedAt), 'ddd, MMM DD YYYY at h:mm A'))}` +
        `\n The Current Status is ${chalk.cyan(changeCase.headerCase(status))}`
    console.log(outputString)
  }
}
export default { showSingleTicket, show, showNotFoundError, showMultipleTickets }
