it('google test', function(){
    cy.visit('')
    cy.get('#input-4')
        .type('food')
        .type('{enter}')
})