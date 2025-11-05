describe('Write Files', () => {

    it('Write Files', () => {
        cy.writeFile('cypress/fixtures/ornek.txt', {
            username: 'mailaddressfortests@gmail.com',
            password: 'Ae123'
          })
          
    });

});