describe('Intercept', () => {

    it('Test', () => {
        cy.visit('https://example.cypress.io/commands/waiting') 
        //cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1')
        cy.intercept('GET', '**/comments/**').as('getComment') 
        // as() komutu daha sonra kullanilmak uzere degisken atiyor
        // atanan degisken @getComment ile cagirilir
        // Yani,
        // 'GET' istegi yapan herhangi bir URL icinde 'comments' gecen istekleri yakaliyoruz
        // '**/comments/**' = URL’de 'comments' gecen her seyi eslestirir
        // .as('getComment') ile bu yakalamaya bir isim veriyoruz
        cy.get('.network-btn').click()
        cy.wait('@getComment').its('response').then(response => {  // daha once intercept ile yakaladigimiz istegin tamamlanmasini bekliyoruz
            console.log(response)
            assert.equal(response.statusCode,200, 'Status Code Controlled') // Yanitin status kodunun 200 olup olmadıgını kontrol ediyoruz ve sonuna mesaj ekleyebiliyoruz
        })
    });

});