describe('Read Files', () => {

    it('Read Files', () => {
        cy.readFile('cypress/fixtures/ornek.json').its('username').should('contain', 'gmail')
    });
});