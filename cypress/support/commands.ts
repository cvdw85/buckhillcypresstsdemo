/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }


// I could write some code to dynamically search for a valid username, but I believe that is out of the scope of this task. Woe to me if I am wrong.
// I know the application should work out of the box as mentioned, so for the future's sake I should grab a valid username programmatically. Alas, I am out of time.
Cypress.Commands.add('getClientUserAuthToken', (USERNAME,PASSWORD) => {
    cy.request({
      method: 'POST',
      url: 'https://pet-shop.buckhill.com.hr/api/v1/user/login',
      body: {
        email: USERNAME,
        password: PASSWORD,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('authToken', response.body.data.token); // Store the token in Cypress.env
    });
});

Cypress.Commands.add('getAdminUserAuthToken', (USERNAME,PASSWORD) => {
    cy.request({
      method: 'POST',
      url: 'https://pet-shop.buckhill.com.hr/api/v1/admin/login',
      body: {
        email: USERNAME,
        password: PASSWORD,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('authToken', response.body.data.token); // Store the token in Cypress.env
    });
  });