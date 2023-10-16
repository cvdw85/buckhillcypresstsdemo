import AdminLoginPage from '../page-objects/AdminLoginPage';
import AdminCustomersPage from '../page-objects/AdminCustomersPage';

describe('Petshop Admin Tests', () => {
    before(() => {
        cy.getAdminUserAuthToken(Cypress.env('ADMIN_USERNAME'), Cypress.env('ADMIN_PASSWORD')); // Call the custom command to get the token
    });

    it('Buckhill Admin Petshop Test', function(){
        AdminLoginPage.visit();
        AdminLoginPage.fillUsername(Cypress.env('ADMIN_USERNAME'));
        AdminLoginPage.fillPassword(Cypress.env('ADMIN_PASSWORD'));
        AdminLoginPage.clickLoginButton();
        cy.get(':nth-child(3) > :nth-child(1) > a > .v-list-item').click();
        cy.get('.table-header__content > .v-btn > .v-btn__content').click();
        cy.get('div:nth-child(1) > div > div.d-flex.justify-space-between.mb-5 > p').should('have.text', 'Add new customer');
    })
})