///<reference types="cypress" />

describe('Custom Commands', () => {

    it('Pozitif Login Testi', () => {
        cy.visit('https://www.automationexercise.com/login')
        cy.get('[data-qa="login-email"]').type('mailaddressfortests@gmail.com')
        cy.get('[data-qa="login-password"]').type('Ae123')
        cy.get('[data-qa="login-button"]').click()
    });

    // istedigimiz islemleri command.js dosyasi altinda tanimlayip buradan komutu cagirarak gerceklestirebiliriz

    it('Komutla Pozitif Login Testi', () => {
        cy.automationexerciseLogin('mailaddressfortests@gmail.com','Ae123')
        cy.get(':nth-child(10) > a').should('contain','Logged') // basarili girisi dogruladik
    });

    it('Komutla Pozitif Login Testi', () => {
        cy.automationexerciseLogin('mailaddressfortests@gmail.com','123')
        cy.get('.login-form > form > p').should('be.visible') // giris yapilamadigini dogruladik

    });

});