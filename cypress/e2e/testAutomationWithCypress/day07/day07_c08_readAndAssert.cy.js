describe('Read and Assert from Files', () => {

    it('Read and Assert', () => {
        cy.readFile('cypress/fixtures/user.json').then((userdata) => {
            expect(userdata[7].name).to.equal('Nicholas Runolfsdottir V') // 7. indexteki datalari kontrol ettik
            expect(userdata[7].username).to.equal('Maxime_Nienow')
            expect(userdata[7].email).to.equal('Sherwood@rosamond.me')
        })
    });
});