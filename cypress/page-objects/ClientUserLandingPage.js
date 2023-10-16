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
}

export default new ClientUserLandingPage();