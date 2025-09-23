/*
Negatif Test:
http://automationexercise.com sayfasina gider
Sigun/Login sayfasina gider
gecersiz username ve password ile giris yapar
giris yapilamadigini dogrular
*/

describe('Login Testi', () => {

    it('Negatif Login Testi', () => {
        cy.visit('http://automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type('mailaddressfortests@gmail.com')
        cy.get('[data-qa="login-password"]').type('123')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('be.visible') // Your email or password is incorrect! yazisinin gorunurlugunu test ederek giris yapilamadigin dogruladik
        cy.log('Test Başarıyla Tamamlandı')
    });

});