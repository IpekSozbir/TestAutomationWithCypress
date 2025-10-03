describe('CheckBox Methodlari', () => {

    it('CheckBox Secimi', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(3)').uncheck().should('not.be.checked')
    });

    it('Sirasina gore checkbox secme', () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
        cy.get("input[type='checkbox']").eq(1).uncheck()
        cy.wait(1000)
        cy.get("input[type='checkbox']").first().check() // eq(0) ve first ayni seyi ifade eder
    });

    it('Toplu checkbox secme', () => {
        cy.visit('https://www.e-bebek.com/bebek-oto-koltugu-c4219')
        // cy.get('input[type="checkbox"]').check() // sayfadaki butun checkboxlara sirayla check yapar. Yani input[type="checkbox"] olan her seye tikla dedik
        cy.get('input[type="checkbox"]').eq(10).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(17).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(25).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(32).check().should('be.checked')
    });
    
});