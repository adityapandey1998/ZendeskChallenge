# Zendesk-Challenge

A CLI Based application using Node.js. 
The Zendesk API is used to get tickets present in the account and is displayed in a tabular format

## Installations

- [NodeJS](https://nodejs.org/en/) v16+
- NPM v8+

## Running Instructions

1. Clone this repository.

```
$ git clone https://github.com/adityapandey1998/ZendeskChallenge
```

2. Navigate to the cloned folder.
3. Install all npm modules with the following code.

```
$ npm install
```

4. Run the program with the following code.

```
$ npm start
```

#### Running Tests

1. Navigate to the cloned folder.
2. Run the following command

```
$ npm run test
```

#### Code Coverage

1. Navigate to the cloned folder.
2. Run the following command

```
$ npm run coverage
```

#### Tests + Coverage

1. Note that because it is an interactive application, one of the tests involves the user being prompted for an input.
2. Based on the input, the test suite is completed and the coverage results are shown.

## Design Choices

### Main Component Description

- ```index.js``` : Entry Point. The menus are displayed here.
- ```requestUtils.js``` : Uses the Zendesk API and gets a single ticket/multiple tickets based on user input.
- ```menus.js``` : Contains menu templates.
- ```inputScheme.js``` : Contains user input type details+schema.
- ```output.js``` : Prints the ticker in a tabular format. Also prints error messages.
- ```config.js``` : Contains the configurations to connect to the Zendesk API.

### Design Choices

We are using the Tickets API from Zendesk.
- [Tickets API](https://developer.zendesk.com/rest_api/docs/support/tickets#show-ticket)
All requests to the Zendesk API in the application are made using [axios](https://www.npmjs.com/package/axios) which is a lightweight but stable package to make HTTP requests.

The authentication method used is a Token Based Authentication method. The API token is generated on the Zendesk Account Portal and is passed in the header of every API request in a Base64 encoded string.
- [Basic Auth](https://developer.zendesk.com/rest_api/docs/support/introduction#basic-authentication)
- [API Token](https://developer.zendesk.com/api-reference/ticketing/introduction/#api-token)

The Token, Email ID and Base Domain are all passed as Environment variables (in a .env file) in the folllowing format - 
```
zccEmail=<Your Email Here>
zccToken=<Your Token Here>
zccBaseDomain=<Your Zendesk Base Domain Here>
```

#### Displaying Tickets

The tickets are displayed using the console.table() function.
The tabular formatting makes is easy to understand and also structures it in a user friendly way.
All the display functionalities are abstracted in the _output.mjs_ file

#### Pagination

Instead of requesting 100 records in each API request, only 25 records are requested by the application at one time through the query paramter provided in the [Pagination](https://developer.zendesk.com/rest_api/docs/support/introduction#pagination) Documentation.
This helps reduce the amount of data recieved at the initial point of time and also helps in keeping the data realtime.
If the user requests to see the next 25 records, the application simply uses the _links_ field in the response JSON and fetches the next set of 25 records.


## Other Resources

- To write the tests and mock the API calls, Mocha, Chai and Nock Packages were used

  - [Mocha](https://mochajs.org/)
  - [Chai](https://www.chaijs.com/)
  - [Nock](https://github.com/nock/nock)

- The Node JS application contains files written as ECMAScript modules (Hence the .mjs extension)
    
    - [ECMAScript](https://nodejs.org/docs/latest/api/esm.html)

- User input in NodeJS is taken through the _prompt_ package

    - [Prompt](https://www.npmjs.com/package/prompt)

- Node JS [Best Practices](https://github.com/goldbergyoni/nodebestpractices)

