import ClientUserLandingPage from '../page-objects/ClientUserLandingPage';

describe('Petshop Client User Tests', () => {
    before(() => {
        cy.getClientUserAuthToken(Cypress.env('CLIENT_USERNAME'), Cypress.env('CLIENT_PASSWORD'));
    });

    it('Buckhill Client User Petshop Test', function(){
        ClientUserLandingPage.visit();
        ClientUserLandingPage.clickLoginButton();
        ClientUserLandingPage.fillUsername(Cypress.env('CLIENT_USERNAME'));
        ClientUserLandingPage.fillPassword(Cypress.env('CLIENT_PASSWORD'));
        ClientUserLandingPage.clickFormLoginButton();
    })
})