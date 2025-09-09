describe('Temel Cypress komutları', () => {

    it('cy.visit komutu', () => {
        // cy.visit('https://www.google.com') // base url tanimli degilse
        cy.visit('/') // base url tanımlandiysa
       
    });

    it('cy.visit komutu2', () => {
        cy.visit('/iletisim')

    });

    it('cy.title komutu', () => {
        cy.visit('/') // baseUrl adrese gider
        // cy.title().should('equal',"Türkiye'nin sinema sitesi  - Sinemalar.com") // title icin tam esitlik durumu
        cy.title().should('match', /Türkiye'nin sinema sitesi\s+-\s+Sinemalar\.com/) // bosluklar equal ile kontrollerde sorun cikarabildigi icin match ile test edebiliriz
        cy.title().should('include','sinema') // verilen string icerme durumu
        cy.title().should('contains','sinema')
        
    });

    it('cy.url ve cy.location', () => {
        cy.visit('/')
        cy.url().should('equal','https://www.sinemalar.com/') // url tam esitlik durumunu kontrol eder
        cy.url().should('include','sinemalar') // url string icerme durumunu kontrol eder


        cy.visit('/iletisim')
        cy.location('pathname').should('eq','/iletisim')  //gidilen pathi dogrulamıs oluyoruz
        cy.location('protocol').should('eq','https:')  //gidilen protokolu dogrular
        cy.location('hostname').should('eq','www.sinemalar.com')  //tam esitlik dogrular

        
    });





   
   








});