describe('Expect Test', () => {

    const requestUrl='https://jsonplaceholder.cypress.io/comments'

    /* {
         "postId": 2,
         "id": 6,
         "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
         "email": "Presley.Mueller@myrl.com",
         "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
       }
         */

    
       it('Test01', () => {
        cy.request(requestUrl).should((response) => {
            expect(response.status).to.equal(200) // assert equal'a alternatif bir dogrulama yontemi de expect().to.equal
            expect(response.body[202].email).to.equal('Bonita@karl.biz')
        })
    });

    it('Test02', () => {
        cy.request({
            url:requestUrl,
            method:'GET'
        }).should((response) => {
            expect(response.body[202].id).to.equal(203)
        })
    });
});