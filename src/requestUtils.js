import axios from 'axios';
import { URL } from 'url';
import { authConfigs, APIConfig } from './config.js';
import output from './output.js';
import prompt from 'prompt';
prompt.start();

prompt.message = '';
prompt.delimiter = ':';

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
    const response = await axios(config);
    output.showSingleTicket(response);
  } catch (err) {
    if (err.response.status == 404) {
      output.showNotFoundError();
    } else if (err.response.status == 429) {
      output.showTooManyRequestsError();
    } else if (err.response.status == 443) {
      output.showUnauthError();
    } else {
      output.showGenericError();
      }
  }
}

async function getMultipleTickets (currOffset) {
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
  while (!paginationExit) {
    try {
      const response = await axios(config);
      const { tickets, meta, links } = response.data;
      output.showMultipleTickets(tickets);

      if (meta.has_more) {
        output.show('\n Do you want to see some more tickets?');
        const { moreTickets } = await prompt.get(moreTicketsSchema);
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
      console.log(err.response.status);
      if (err.response.status == 404) {
        output.showNotFoundError();
      } else if (err.response.status == 429) {
        output.showTooManyRequestsError();
        throw err;
      } else if (err.response.status == 401) {
        output.showUnauthError();
        throw err;
      } else {
        output.showGenericError();
      }
    }
  }
}

export { getTicketById, getMultipleTickets };
