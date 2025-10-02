describe('Scroll Islemleri', () => {

    it('Scroll ile sayfayi belirli bir yere kadar kaydirma', () => {
        cy.visit('/')
        cy.handleOptionalPopups()
        cy.get('#announcement-modal > .modal-wrapper > .dialog > .icon-only').click() // hemen dene reklam acilir penceresini gelirse kapatmak icin

        cy.get(':nth-child(13) > .section-title > .link > h2 > span').scrollIntoView() // Haberler basligina kadar kaydirdik
        cy.get(':nth-child(11) > .section-title > h2').scrollIntoView({duration:1000}) // TV dizileri basligina kadar kaydirdik. Burada oncesine bekleme suresi vermis olduk
        
    });

    it('Scroll ile belirli bir koordinata kadar kaydirma', () => {
        cy.visit('/')
        cy.handleOptionalPopups()
        cy.scrollTo(0,1900) // istedigimiz koordinata kadar asagi kaydirdik
        cy.wait(2000)
        cy.scrollTo(0,-1900) // ayni olcude geri cikardik

    });

    it('Koordinat ile gitme', () => {
        cy.visit('/') 
        cy.handleOptionalPopups()
        cy.get(':nth-child(11) > .section-title > h2').scrollIntoView()
        cy.wait(3000)


        cy.get(':nth-child(11) > .section-title > h2').scrollIntoView({ offset: { top: 200, left: 0 } })
    });
  
});