const optionKey = {
  GET_BY_ID: '2',
  GET_ALL: '1',
  EXIT: '3'
};

const mainOptionKey = {
  ENTER: '1',
  EXIT: '2'
};

const APIConfig = {
  baseDomain: process.env.baseDomain || "zccadityapandey",
  baseURL: 'zendesk.com/api/v2/',
  ticketEndpoint: 'tickets/'
};

const authConfigs = {
  email: process.env.email,
  token: process.env.token
};

export { optionKey, mainOptionKey, APIConfig, authConfigs };
