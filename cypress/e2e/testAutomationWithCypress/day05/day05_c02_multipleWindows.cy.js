///<reference types="cypress" />

describe('Multiple Windows', () => {

    it('Attribute Remove', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()

        // HTML kodlarda target="_blank" attribute'u baglantinin yeni bir sekme yada windowda acilmasina sebep olabilir
        // baglantinin yeni sekme yada windowda acilmasinin onune gecmek icin invoke('removeAttr','target') komutunu kullanarak
        // once target attribute'unu kaldirip sonra tiklatabiliriz

        cy.get('h3').should('have.text','New Window')
    });

    it('New Url', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((element)=>{
            const newUrl=element.prop('href')
            cy.visit(newUrl)
        })
    });

});