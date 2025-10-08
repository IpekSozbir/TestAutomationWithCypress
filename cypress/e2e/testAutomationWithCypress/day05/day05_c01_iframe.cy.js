///<reference types="cypress" />


describe('', () => {

    // https://www.npmjs.com/package/cypress-iframe adresinden 
    // Terminalden npm install -D cypress-iframe komutu ile kurulum yaptik
    // require('cypress-iframe') kodunu e2e.js dosyaiına ekledik
    // Bu cy.frameLoaded ve cy.iframe komutlarini kullanmamizi sagliyor

    
    it('iframe Test', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr')
        cy.get('.tox-notification__dismiss').click() // notification var onu kapattik
       // cy.screenshot()

    });
});