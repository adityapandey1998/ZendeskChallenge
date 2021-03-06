import axios from 'axios';
import prompt from 'prompt';
import output from './output.mjs';
import schema from './inputSchema.mjs';
import { URL } from 'url';
import { authConfigs, APIConfig } from './config.mjs';
import { menus } from './menus.mjs';

prompt.start();

prompt.message = '';
prompt.delimiter = ':';

// This function gets the ticket based on the id and displays it
// If the ticket ID is not present, an error message is diaplayed
async function getTicketById (id) {
  const requestId = id;
  const myURL = new URL(`https://${APIConfig.baseDomain}.${APIConfig.baseURL}${APIConfig.ticketEndpoint}${requestId}`);

  const auth = authConfigs.token || '';
  const email = authConfigs.email || '';

  const tokenString = `${email}/token:${auth}`;
  const authString = Buffer.from(tokenString).toString('base64');

  const config = {
    method: 'get',
    url: myURL.href,
    headers: {
      Authorization: `Basic ${authString}`
    }
  };

  try {
    output.show(menus.gettingTicket);
    var response = await axios(config);
    output.showSingleTicket(response);
  } catch (err) {
    if (err.response.status == 404) {
      output.showNotFoundError();
    } else if (err.response.status == 429) {
      output.showTooManyRequestsError();
    } else if (err.response.status == 401) {
      output.showUnauthError();
      throw err;
    } else {
      output.showGenericError();
      throw err;
      }
  }
}

// This function gets 25 tickets and displays them
// After the first 25 tickets, the user is asked if they want to view more tickets and is yes, another request is 
// sent to the API using the "links.next" value
async function getMultipleTickets () {
  const myURL = new URL(`https://${APIConfig.baseDomain}.${APIConfig.baseURL}${APIConfig.ticketEndpoint}`);
  const auth = authConfigs.token || '';
  const email = authConfigs.email || '';

  const tokenString = `${email}/token:${auth}`;
  const authString = Buffer.from(tokenString).toString('base64');

  const config = {
    method: 'get',
    url: myURL.href,
    params: {
      'page[size]': 25
    },
    headers: {
      Authorization: `Basic ${authString}`
    }
  };

  let paginationExit = false;
  output.show(menus.gettingMultipleTickets);
  while (!paginationExit) {
    try {
      const response = await axios(config);
      const { tickets, meta, links } = response.data;
      output.showMultipleTickets(tickets);

      if (meta.has_more) {
        output.show('\n Do you want to see some more tickets?');
        const { moreTickets } = await prompt.get(schema.moreTicketsSchema);
        if (moreTickets.toLowerCase() == 'y') {
          const nextUrl = links.next;
          config.url = nextUrl;
          paginationExit = false;
        } else {
          output.show('\nTaking you back to the main menu...\n');
          paginationExit = true;
        }
      } else {
        output.show('\nDone with all tickets!\nTaking you back to the main menu...\n');
        paginationExit = true;
      }
    } catch (err) {
      paginationExit = true;
      if (err.response.status == 404) {
        output.showNotFoundError();
      } else if (err.response.status == 429) {
        output.showTooManyRequestsError();
      } else if (err.response.status == 401) {
        output.showUnauthError();
        throw err;
      } else {
        output.showGenericError();
        throw err;
      }
    }
  }
}

export { getTicketById, getMultipleTickets };
