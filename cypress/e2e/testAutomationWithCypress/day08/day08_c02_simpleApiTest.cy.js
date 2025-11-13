describe('Api Assertion', () => {

    it('Api Assertion 1', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments') // api testlerinde istek gonderecegimiz adrese cy.request() komutuyla gidiyoruz
        .its('headers').its('date').should('include','Thu, 13 Nov 2025')

        // .its('headers').its('content-type').should('include','application/json; charset=utf-8')
        // boyle headers icindeki bilgileri de test edebiliriz

    });

    it('Api Assertion 2', () => {
        cy.request({
            url:'https://jsonplaceholder.cypress.io/comments',
            method: 'GET'
        }) .its('headers').its('date').should('include','Thu, 13 Nov 2025')
    });



});