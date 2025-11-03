describe('Write Files', () => {

    it('Write Files', () => {
        cy.writeFile('cypress/fixtures/ornek.json', {
            username: 'mailaddressfortests@gmail.com',
            password: 'Ae123'
          })

       
    });
});