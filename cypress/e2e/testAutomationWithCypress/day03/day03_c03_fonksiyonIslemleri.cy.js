describe('Locate Almada Fonksiyon İslemleri', () => {
    it('', () => {
        cy.visit('http://automationexercise.com') 
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click() 


        // 1.yontem
        cy.get('.login-form > h2').should('include.text','Login') 

        // 2.yontem
        cy.get('.login-form > h2').then(textcontrol => {
            expect(textcontrol.text()).to.contains('Login')
        })

        // 1. yontemle yapmis oldugumuz elementin textini kontrol etme islemini asagidaki 2. yontemle de gerceklestirebiliriz
        // 1. yontem daha kisa bir cozum oldugu icin tercih ediyoruz
    });
});