class ProductPage {
    clickAddToCart() {
      cy.get('.product__actions-wrapper > .v-btn').click();
    }
    clickCartButton() {
      cy.get(':nth-child(3) > :nth-child(1) > .v-btn__content').click();
    }
    assertCartButtonText(){
      cy.get('.v-toolbar__content > .v-container > :nth-child(3) > :nth-child(1)').should('have.text', ' Cart (1) ');
    }
    assertAddRemoveToCartText(){
      cy.get('div.product__action-btn.d-flex.mt-10 > button > span.v-btn__content').should('have.text', ' Remove from cart ');
    }   
  }
  
  export default new ProductPage();