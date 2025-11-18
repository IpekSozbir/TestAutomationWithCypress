describe('Jsonplaceholder Assert', () => {

    const requestUrl='https://jsonplaceholder.cypress.io/comments'

   /* {
    "postId": 2,
    "id": 7,
    "name": "repellat consequatur praesentium vel minus molestias voluptatum",
    "email": "Dallas@ole.me",
    "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
      }
        */

    it('Jsonplaceholder Test', () => {
        cy.request(requestUrl).should((response) => {
            assert.equal(response.body[6].id,7)
            assert.equal(response.body[6].email,'Dallas@ole.me')
            assert.equal(response.body[6].name,'repellat consequatur praesentium vel minus molestias voluptatum')
        })

    });
});