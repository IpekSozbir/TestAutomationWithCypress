 ///<reference types="Cypress" /> // komutlarin hemen gelmesi icin
 
 describe('Dropdown Locate', () => {

    it('Dropdown Menu', () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        cy.get('#dropdown').select('Option 1').should('have.value','1') 
        cy.get('#dropdown').select('Option 2').should('have.value','2') 
        // dropdown webElemnetlerde assertion islemi icin have.text gibi have.value kullanabiliriz
    });

 });