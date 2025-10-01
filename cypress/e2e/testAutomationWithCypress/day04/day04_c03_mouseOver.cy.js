describe('Hover', () => {

    it('', () => {
        cy.visit('https://www.e-bebek.com/')
        cy.get(':nth-child(1) > .header__megamenu-list').trigger('mouseover')
        //cy.wait(3000)
        cy.contains('Mobilya').click()
        
    });

});