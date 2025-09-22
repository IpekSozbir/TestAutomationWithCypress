/*
Potizif Test:
http://automationexercise.com sayfasina gider
Sigun/Login sayfasina gider
"Login  to your account" yazisinin bulundugunu dogrular
"New User Signup!" yazsininin varligini dogrular
gecerli username ve password ile giris yapar
giris yapildigini dogrular
cikis yapar
cikis yapildigini dogrular
*/

describe('Login Testi', () => {

    it('Pozitif Login Testi', () => {
        // cy.viewport(1500,1200) // sayfa boyutlarını ayarlamak gerekirse cy.viewport() komutuyla istedigimiz boyuta getirebiliriz
        // cy.viewport(macbook-16) // ya da ekran boyutlarini hazir cihaz boyutlariyla da verebiliriz
        // viewport olculerini config dosyasinda da tanimlayabiliriz
        cy.visit('http://automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.log('Login to your account yazisi kontrol ediliyor'); // cy.log(); komutuyla istedigimiz log mesajlarini yazdirabiliriz
        cy.get('.login-form > h2').should('be.visible')
        // cy.get('.login-form > h2').should('have.text','Login to your account') // tercih edilebilecek bir diger assert yontemi
        cy.get('[data-qa="login-email"]').type('mailaddressfortests@gmail.com')
        cy.get('[data-qa="login-password"]').type('Ae123')
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('contain','Logged') // logged yazisinin gorunurlugunu assert ettik
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click() // logout butonuna tikladik
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('have.text',' Signup / Login') //login yazisinin yeniden gorunur oldugunu kontrol ederek logout yaptigimizi dogruladik


    });

});