describe('', () => {

    before(() => { // Tüm testlerden once bir kere calisir
        cy.visit('/')
        cy.handleOptionalPopups()
    });

    
    after(() => { // // Tüm testlerden sonra bir kere calisir (Testlerin tamami tamamlandiktan sonra)
        cy.log('Tüm testler tamamlandı')
    });


    beforeEach(() => { // Her bir testten once bir kere calisir
        cy.log('Yeni bir test başlıyor')
    });

  
    it('', () => {
        cy.get('#header-search')
        cy.get('#header-search').type('3 Idiots{enter}')
    });

    
    afterEach(() => { // Her bir testten sonra bir kere calisir
        cy.log('Bir test tamamlandı. Sonraki teste geçiliyor')
    });
    
});