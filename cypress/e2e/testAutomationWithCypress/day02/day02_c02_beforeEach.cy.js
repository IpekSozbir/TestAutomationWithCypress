describe('', () => {
beforeEach(() => { // beforeEach her bir it blogundan yani her bir testten once calisir
     cy.visit('/')
 });
    it('title', () => {
        cy.title().should('match', /Türkiye'nin sinema sitesi\s+-\s+Sinemalar\.com/) // bosluklar equal ile kontrollerde sorun cikarabildigi icin match ile test edebiliriz
        cy.title().should('include','Sinemalar')
    });

    it('url testi', () => {
        cy.url().should('include','sinemalar') 
        
    });
});