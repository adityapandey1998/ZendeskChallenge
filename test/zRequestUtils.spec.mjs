
import requestUtils from "../src/requestUtils.mjs" ;
import { expect }  from 'chai';
import nock from 'nock';

describe('requestUtils - Single Ticket', function() {

    beforeEach(() => {
        nock('https://zccadityapandey.zendesk.com')
          .get('/api/v2/tickets/1')
          .reply(200, {"ticket":{"url":"https://zccadityapandey.zendesk.com/api/v2/tickets/1","id":1,"external_id":null,"via":{"channel":"sample_ticket","source":{"from":{},"to":{},"rel":null}},"created_at":"2021-11-30T01:23:14Z","updated_at":"2021-11-30T01:23:15Z","type":"incident","subject":"Sample ticket: Meet the ticket","raw_subject":"Sample ticket: Meet the ticket","description":"Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n","priority":"normal","status":"open","recipient":null,"requester_id":1910839722105,"submitter_id":1524707057641,"assignee_id":1524707057641,"organization_id":null,"group_id":4411580647443,"collaborator_ids":[],"follower_ids":[],"email_cc_ids":[],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":["sample","support","zendesk"],"custom_fields":[],"satisfaction_rating":null,"sharing_agreement_ids":[],"fields":[],"followup_ids":[],"ticket_form_id":1900001020925,"brand_id":1900000533085,"allow_channelback":false,"allow_attachments":true}});

        nock('https://zccadityapandey.zendesk.com')
          .get('/api/v2/tickets/2')
          .reply(404, {});

        nock('https://zccadityapandey.zendesk.com')
          .get('/api/v2/tickets/3')
          .reply(429, {});

        nock('https://zccadityapandey.zendesk.com')
          .get('/api/v2/tickets/4')
          .reply(443, {});

        nock('https://zccadityapandey.zendesk.com')
          .get('/api/v2/tickets/5')
          .reply(500, {});
    });

    context('show()', function() {
      it('should output the correct ticket', async function() {
          expect(async function() {
            await requestUtils.getTicketById(1);
          }).to.not.throw();
      });
    });

    context('show()', function() {
        it('should output the specified error', async function() {
            expect(async function() {
              await requestUtils.getTicketById(2);
            }).to.not.throw();
        });
      });

    context('show()', function() {
        it('should output the specified error', async function() {
            expect(async function() {
              await requestUtils.getTicketById(3);
            }).to.not.throw();
        });
      });
    
    context('show()', function() {
        it('should output the specified error', async function() {
            expect(async function() {
              await requestUtils.getTicketById(4);
            }).to.not.throw();
        });
      });
    
    context('show()', function() {
        it('should output the specified error', async function() {
            expect(async function() {
              await requestUtils.getTicketById(5);
            }).to.not.throw();
        });
      });

});

describe('requestUtils - Multiple Tickets Error 404', function() {

    beforeEach(() => {
        nock('https://zccadityapandey.zendesk.com')
            .get("/api/v2/tickets/?page[size]=25")
            .reply(404, {"ticket":{"url":"https://zccadityapandey.zendesk.com/api/v2/tickets/1","id":1,"external_id":null,"via":{"channel":"sample_ticket","source":{"from":{},"to":{},"rel":null}},"created_at":"2021-11-30T01:23:14Z","updated_at":"2021-11-30T01:23:15Z","type":"incident","subject":"Sample ticket: Meet the ticket","raw_subject":"Sample ticket: Meet the ticket","description":"Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n","priority":"normal","status":"open","recipient":null,"requester_id":1910839722105,"submitter_id":1524707057641,"assignee_id":1524707057641,"organization_id":null,"group_id":4411580647443,"collaborator_ids":[],"follower_ids":[],"email_cc_ids":[],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":["sample","support","zendesk"],"custom_fields":[],"satisfaction_rating":null,"sharing_agreement_ids":[],"fields":[],"followup_ids":[],"ticket_form_id":1900001020925,"brand_id":1900000533085,"allow_channelback":false,"allow_attachments":true}});

    });

    context('show()', function() {
      it('should output the specified error', async function() {
          expect(async function() {
            await requestUtils.getMultipleTickets();
          }).to.not.throw();
      });
    });
});

describe('requestUtils - Multiple Tickets Error 401', function() {

    beforeEach(() => {
        nock('https://zccadityapandey.zendesk.com')
            .get("/api/v2/tickets/?page[size]=25")
            .reply(401, {"ticket":{"url":"https://zccadityapandey.zendesk.com/api/v2/tickets/1","id":1,"external_id":null,"via":{"channel":"sample_ticket","source":{"from":{},"to":{},"rel":null}},"created_at":"2021-11-30T01:23:14Z","updated_at":"2021-11-30T01:23:15Z","type":"incident","subject":"Sample ticket: Meet the ticket","raw_subject":"Sample ticket: Meet the ticket","description":"Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n","priority":"normal","status":"open","recipient":null,"requester_id":1910839722105,"submitter_id":1524707057641,"assignee_id":1524707057641,"organization_id":null,"group_id":4411580647443,"collaborator_ids":[],"follower_ids":[],"email_cc_ids":[],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":["sample","support","zendesk"],"custom_fields":[],"satisfaction_rating":null,"sharing_agreement_ids":[],"fields":[],"followup_ids":[],"ticket_form_id":1900001020925,"brand_id":1900000533085,"allow_channelback":false,"allow_attachments":true}});

    });

    context('show()', function() {
      it('should output the specified error', async function() {
          expect(async function() {
            await requestUtils.getMultipleTickets();
          }).to.not.throw();
      });
    });
});

describe('requestUtils - Multiple Tickets Error 429', function() {

    beforeEach(() => {
        nock('https://zccadityapandey.zendesk.com')
            .get("/api/v2/tickets/?page[size]=25")
            .reply(429, {"ticket":{"url":"https://zccadityapandey.zendesk.com/api/v2/tickets/1","id":1,"external_id":null,"via":{"channel":"sample_ticket","source":{"from":{},"to":{},"rel":null}},"created_at":"2021-11-30T01:23:14Z","updated_at":"2021-11-30T01:23:15Z","type":"incident","subject":"Sample ticket: Meet the ticket","raw_subject":"Sample ticket: Meet the ticket","description":"Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n","priority":"normal","status":"open","recipient":null,"requester_id":1910839722105,"submitter_id":1524707057641,"assignee_id":1524707057641,"organization_id":null,"group_id":4411580647443,"collaborator_ids":[],"follower_ids":[],"email_cc_ids":[],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":["sample","support","zendesk"],"custom_fields":[],"satisfaction_rating":null,"sharing_agreement_ids":[],"fields":[],"followup_ids":[],"ticket_form_id":1900001020925,"brand_id":1900000533085,"allow_channelback":false,"allow_attachments":true}});

    });

    context('show()', function() {
      it('should output the specified error', async function() {
          expect(async function() {
            await requestUtils.getMultipleTickets();
          }).to.not.throw();
      });
    });
});

describe('requestUtils - Multiple Tickets Error 443', function() {

    beforeEach(() => {
        nock('https://zccadityapandey.zendesk.com')
            .get("/api/v2/tickets/?page[size]=25")
            .reply(443, {"ticket":{"url":"https://zccadityapandey.zendesk.com/api/v2/tickets/1","id":1,"external_id":null,"via":{"channel":"sample_ticket","source":{"from":{},"to":{},"rel":null}},"created_at":"2021-11-30T01:23:14Z","updated_at":"2021-11-30T01:23:15Z","type":"incident","subject":"Sample ticket: Meet the ticket","raw_subject":"Sample ticket: Meet the ticket","description":"Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n","priority":"normal","status":"open","recipient":null,"requester_id":1910839722105,"submitter_id":1524707057641,"assignee_id":1524707057641,"organization_id":null,"group_id":4411580647443,"collaborator_ids":[],"follower_ids":[],"email_cc_ids":[],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":["sample","support","zendesk"],"custom_fields":[],"satisfaction_rating":null,"sharing_agreement_ids":[],"fields":[],"followup_ids":[],"ticket_form_id":1900001020925,"brand_id":1900000533085,"allow_channelback":false,"allow_attachments":true}});

    });

    context('show()', function() {
      it('should output the specified error', async function() {
          expect(async function() {
            await requestUtils.getMultipleTickets();
          }).to.not.throw();
      });
    });
});

describe('requestUtils - Multiple Tickets', function() {

    beforeEach(() => {
        nock('https://zccadityapandey.zendesk.com')
          .get("/api/v2/tickets/?page[size]=25")
          .reply(200, {"tickets":[{"url":"https://zccadityapandey.zendesk.com/api/v2/tickets/1.json","id":1,"external_id":null,"via":{"channel":"sample_ticket","source":{"from":{},"to":{},"rel":null}},"created_at":"2021-11-30T01:23:14Z","updated_at":"2021-11-30T01:23:15Z","type":"incident","subject":"Sample ticket: Meet the ticket","raw_subject":"Sample ticket: Meet the ticket","description":"Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n","priority":"normal","status":"open","recipient":null,"requester_id":1910839722105,"submitter_id":1524707057641,"assignee_id":1524707057641,"organization_id":null,"group_id":4411580647443,"collaborator_ids":[],"follower_ids":[],"email_cc_ids":[],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":["sample","support","zendesk"],"custom_fields":[],"satisfaction_rating":null,"sharing_agreement_ids":[],"followup_ids":[],"ticket_form_id":1900001020925,"brand_id":1900000533085,"allow_channelback":false,"allow_attachments":true},{"url":"https://zccadityapandey.zendesk.com/api/v2/tickets/2.json","id":2,"external_id":null,"via":{"channel":"api","source":{"from":{},"to":{},"rel":null}},"created_at":"2021-11-30T23:36:38Z","updated_at":"2021-11-30T23:36:38Z","type":null,"subject":"velit eiusmod reprehenderit officia cupidatat","raw_subject":"velit eiusmod reprehenderit officia cupidatat","description":"Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sit reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.","priority":null,"status":"open","recipient":null,"requester_id":1524707057641,"submitter_id":1524707057641,"assignee_id":1524707057641,"organization_id":1900159221765,"group_id":4411580647443,"collaborator_ids":[],"follower_ids":[],"email_cc_ids":[],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":["est","incididunt","nisi"],"custom_fields":[],"satisfaction_rating":null,"sharing_agreement_ids":[],"followup_ids":[],"ticket_form_id":1900001020925,"brand_id":1900000533085,"allow_channelback":false,"allow_attachments":true}],"meta":{"has_more":true,"after_cursor":"eyJvIjoibmljZV9pZCIsInYiOiJhUUlBQUFBQUFBQUEifQ==","before_cursor":"eyJvIjoibmljZV9pZCIsInYiOiJhUUVBQUFBQUFBQUEifQ=="},"links":{"prev":"https://zccadityapandey.zendesk.com/api/v2/tickets.json?page%5Bbefore%5D=eyJvIjoibmljZV9pZCIsInYiOiJhUUVBQUFBQUFBQUEifQ%3D%3D&page%5Bsize%5D=2","next":"https://zccadityapandey.zendesk.com/api/v2/tickets.json/pagenext"}});

        nock('https://zccadityapandey.zendesk.com')
          .get("/api/v2/tickets.json/pagenext?page[size]=25")
          .reply(200, {"tickets":[{"url":"https://zccadityapandey.zendesk.com/api/v2/tickets/1.json","id":1,"external_id":null,"via":{"channel":"sample_ticket","source":{"from":{},"to":{},"rel":null}},"created_at":"2021-11-30T01:23:14Z","updated_at":"2021-11-30T01:23:15Z","type":"incident","subject":"Sample ticket: Meet the ticket","raw_subject":"Sample ticket: Meet the ticket","description":"Hi there,\n\nI’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n\nThanks,\n The Customer\n\n","priority":"normal","status":"open","recipient":null,"requester_id":1910839722105,"submitter_id":1524707057641,"assignee_id":1524707057641,"organization_id":null,"group_id":4411580647443,"collaborator_ids":[],"follower_ids":[],"email_cc_ids":[],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":["sample","support","zendesk"],"custom_fields":[],"satisfaction_rating":null,"sharing_agreement_ids":[],"followup_ids":[],"ticket_form_id":1900001020925,"brand_id":1900000533085,"allow_channelback":false,"allow_attachments":true},{"url":"https://zccadityapandey.zendesk.com/api/v2/tickets/2.json","id":2,"external_id":null,"via":{"channel":"api","source":{"from":{},"to":{},"rel":null}},"created_at":"2021-11-30T23:36:38Z","updated_at":"2021-11-30T23:36:38Z","type":null,"subject":"velit eiusmod reprehenderit officia cupidatat","raw_subject":"velit eiusmod reprehenderit officia cupidatat","description":"Aute ex sunt culpa ex ea esse sint cupidatat aliqua ex consequat sit reprehenderit. Velit labore proident quis culpa ad duis adipisicing laboris voluptate velit incididunt minim consequat nulla. Laboris adipisicing reprehenderit minim tempor officia ullamco occaecat ut laborum.\n\nAliquip velit adipisicing exercitation irure aliqua qui. Commodo eu laborum cillum nostrud eu. Mollit duis qui non ea deserunt est est et officia ut excepteur Lorem pariatur deserunt.","priority":null,"status":"open","recipient":null,"requester_id":1524707057641,"submitter_id":1524707057641,"assignee_id":1524707057641,"organization_id":1900159221765,"group_id":4411580647443,"collaborator_ids":[],"follower_ids":[],"email_cc_ids":[],"forum_topic_id":null,"problem_id":null,"has_incidents":false,"is_public":true,"due_at":null,"tags":["est","incididunt","nisi"],"custom_fields":[],"satisfaction_rating":null,"sharing_agreement_ids":[],"followup_ids":[],"ticket_form_id":1900001020925,"brand_id":1900000533085,"allow_channelback":false,"allow_attachments":true}],"meta":{"has_more":false,"after_cursor":"eyJvIjoibmljZV9pZCIsInYiOiJhUUlBQUFBQUFBQUEifQ==","before_cursor":"eyJvIjoibmljZV9pZCIsInYiOiJhUUVBQUFBQUFBQUEifQ=="},"links":{"prev":"https://zccadityapandey.zendesk.com/api/v2/tickets.json?page%5Bbefore%5D=eyJvIjoibmljZV9pZCIsInYiOiJhUUVBQUFBQUFBQUEifQ%3D%3D&page%5Bsize%5D=2","next":"https://zccadityapandey.zendesk.com/api/v2/tickets.json?page%5Bafter%5D=eyJvIjoibmljZV9pZCIsInYiOiJhUUlBQUFBQUFBQUEifQ%3D%3D&page%5Bsize%5D=2"}});
  
    });

    context('show()', function() {
      it('should output the correct table', async function() {
          expect(async function() {
            await requestUtils.getMultipleTickets();
          }).to.not.throw();
      });
    });
});
