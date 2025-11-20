describe('POST request', () => {

    const requestUrl='https://jsonplaceholder.cypress.io/comments'

    it('POST Request Test', () => {
        cy.request('POST',requestUrl,{
            userId:502,
            title:"Cypress",
            body:"JS"
        }).should((response) => {
            expect(response.body.title).to.equal("Cypress")
            expect(response.body.body).to.equal("JS")
        })
    });
});