// require = require("esm")(module);

import output from "../src/output.mjs" ;
import { expect }  from 'chai';

let singleTicketResponse = {
  status:200,
  data: {
      "ticket": 
      {
        "url": "https://zccadityapandey.zendesk.com/api/v2/tickets/1.json",
        "id": 1,
        "external_id": null,
        "created_at": "2021-11-30T01:23:14Z",
        "updated_at": "2021-11-30T01:23:15Z",
        "type": "incident",
        "subject": "Sample ticket: Meet the ticket",
        "raw_subject": "Sample ticket: Meet the ticket",
        "description": "Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n",
        "priority": null,
        "status": "open",
        "recipient": null,
        "requester_id": 1910839722105,
        "submitter_id": 1524707057641,
        "assignee_id": 1524707057641,
        "organization_id": null,
        "group_id": 4411580647443,
        "satisfaction_rating": null,
        "sharing_agreement_ids": [],
      }
    }
  };

let singleTicketResponse_404 = {
    status:404  
  };

  let multipleTicketResponse = [{
          "url": "https://zccadityapandey.zendesk.com/api/v2/tickets/1.json",
          "id": 1,
          "external_id": null,
          "created_at": "2021-11-30T01:23:14Z",
          "updated_at": "2021-11-30T01:23:15Z",
          "type": "incident",
          "subject": "Sample ticket: Meet the ticket",
          "raw_subject": "Sample ticket: Meet the ticket",
          "description": "Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n",
          "priority": null,
          "status": "open",
          "recipient": null,
          "requester_id": 1910839722105,
          "submitter_id": 1524707057641,
          "assignee_id": 1524707057641,
          "organization_id": null,
          "group_id": 4411580647443,
          "satisfaction_rating": null,
          "sharing_agreement_ids": [],
        }];

        let multipleTicketResponse_err = ["Err"];

describe('output functions testing', function() {

  context('show()', function() {
    it('should output the passed string', async function() {
        expect(function() {
          output.show(`Testing`);
        }).to.not.throw();
    });
    
  });
  
  context('showNotFoundError()', function() {
    it('should output the error message', async function() {
      expect(function() {
        output.showNotFoundError();
      }).to.not.throw();
    });
    
  });
  
  context('showUnauthError', function() {
    it('should output the error message', async function() {
      expect(function() {
        output.showUnauthError();
      }).to.not.throw();
    });
    
  });

  context('showGenericError', function() {
    it('should output the error message', async function() {
      expect(function() {
        output.showGenericError();
      }).to.not.throw();
    });
    
  });

  context('showTooManyRequestsError', function() {
    it('should output the error message', async function() {
      expect(function() {
        output.showTooManyRequestsError();
      }).to.not.throw();
    });
    
  });

  context('showTooManyRequestsError', function() {
    it('should output the error message', async function() {
      expect(function() {
        output.showTooManyRequestsError();
      }).to.not.throw();
    });
    
  });

  context('showSingleTicket - Correct', function() {
    it('should output the ticket', async function() {
      expect(function() {
        output.showSingleTicket(singleTicketResponse);
      }).to.not.throw();
    });
    
  });

  context('showSingleTicket - Not correct', function() {
    it('should output the error message', async function() {
      expect(function() {
        output.showSingleTicket(singleTicketResponse_404);
      }).to.not.throw();
    });
  });

  context('showMultipleTickets - Not correct', function() {
    it('should output the error message', async function() {
      expect(function() {
        output.showMultipleTickets(multipleTicketResponse);
      }).to.not.throw();
    });
  });

  context('showMultipleTickets - Not correct', function() {
    it('should output the error message', async function() {
      expect(function() {
        output.showMultipleTickets(multipleTicketResponse_err);
      }).to.not.throw();
    });
  });
});
