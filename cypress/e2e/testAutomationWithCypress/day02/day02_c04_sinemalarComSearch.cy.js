describe('', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.handleOptionalPopups()

    });

    it('sinemalarda 3 Idiots search', () => {
        cy.get('#header-search').click()
        cy.get('#header-search').type('3 Idiots{enter}')
      
    });

    it('sinemalarda er ryani kurtarmak search', () => {
        cy.get('#header-search').click()
        cy.get('#header-search').type('er ryani kurtarmak{enter}')
        
      
    });
    
});