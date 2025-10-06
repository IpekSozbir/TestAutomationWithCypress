describe('JS Alerts Click', () => {

    it('Only Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click() // Cypress default olarak Tamam(Ok)'e tikliyor
        cy.get('#result').should('have.text','You successfully clicked an alert')
    });

    it('Confirm Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        // Cypress default olarak ok butonuna tiklar
        cy.get('#result').should('have.text','You clicked: Ok')
    });

    it('Dismiss Alerts', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm', ()=> { // on() fonksiyonu JQuery fonksiyonudur. Browserda pencerelerin kontrolunu saglar
            return false // yani onaylama isleminin false'unu yada tersini yaptirdik 
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    });

    it('Prompt Alerts', () => {
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.window().then((win) => {
              cy.stub(win, 'prompt').returns('test')
            })
            cy.get(':nth-child(3) > button').click()
            cy.get('#result').should('have.text','You entered: test')
    });
});