describe('DELETE Request', () => {

    it('DELETE Request Test', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'DELETE'
        }).then(response => {
            expect(response.status).to.eq(200)

        })
    });
});