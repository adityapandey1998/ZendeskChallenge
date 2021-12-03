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
  baseDomain: process.env.zccBaseDomain || "zccadityapandey",
  baseURL: 'zendesk.com/api/v2/',
  ticketEndpoint: 'tickets/'
};

const authConfigs = {
  email: process.env.zccEmail || "",
  token: process.env.zccToken || ""
};

export { optionKey, mainOptionKey, APIConfig, authConfigs };
