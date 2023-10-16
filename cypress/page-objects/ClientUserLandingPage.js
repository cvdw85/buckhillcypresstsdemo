class ClientUserLandingPage {
  visit() {
    cy.visit('/');
  }

  fillUsername(username) {
    cy.get('#input-10').type(username);
  }

  fillPassword(password) {
    cy.get('#input-12').type(password);
  }

  clickLoginButton() {
    cy.get('.ml-6').click();
  }

  clickFormLoginButton() {
    cy.get('body > div.v-overlay-container > div > div.v-overlay__content > div > button').click();
  }

  searchAndSelectCatFood() {
    cy.get('#input-4').type('Food')
                      .type('{enter}');
    cy.get('div.v-list.v-theme--PetGreen.v-list--density-compact.v-list--one-line > div:nth-child(1) > div > span').click();
  }
}

export default new ClientUserLandingPage();