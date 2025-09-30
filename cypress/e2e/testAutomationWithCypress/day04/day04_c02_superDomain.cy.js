describe('Super Domain', () => {

    it('Ayni Classta Iki Farkli visit', () => {
        cy.visit('https://sinemalar.com')

        cy.visit('https://google.com')
        

        // Bir test icinde iki farkli domain ziyaret etmek istersek sorun yasanabiliyor 
        // Ayni domainin farkli sayfalarina ziyaret etmek istedigimizde bu sorun yasanmiyor
 
    });
});