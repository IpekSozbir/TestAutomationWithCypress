describe('go Komutu Kullanimi', () => {

    it('', () => {
        cy.visit('/')
        cy.handleOptionalPopups()
        cy.get('#header-search').click()
        cy.get('#header-search').type('3 Idiots{enter}')
        cy.go('back') // sayfanin icinde geri gitme <-
        cy.go('forward') // sayfanin icinde ileri gitme ->
        cy.reload // sayfayi yenileme (refresh islemi)
        cy.reload(true) // sayfayi catch'den değil direkt sıfırdan acar

        cy.wait(3000) 

        cy.go(-1) // sayfanin icinde geri gitme <- Yani cy.go('back')'in alternatifi
        cy.go(1) // sayfanin icinde ileri gitme -> Yani cy.go('forward')'in alternatifi
        
    });
});