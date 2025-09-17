describe('Login Islemleri', () => {
    
    it('SinemalarCom Login Islemleri', () => {
        cy.visit('/')
        cy.handleOptionalPopups()
        cy.get('#account-btn').click()
        //cy.get('#account-nav > .flex-column > .primary').click() // 1. yontem : klasik yontemle locate alip click yapabiliriz
        // cy.contains('Giriş Yap').click() // 2. yontem : icerigi 'Giriş Yap' olan elemente click yap diyebiliriz
        cy.contains('giriş yap',{matchCase:false}).click() // 3. yontem : case sensitive olmamasi icin {matchCase:false} kullanabiliriz
        cy.get('#login-username').type('tester tester')
        cy.get('#login-password').type('Sinema123')
        cy.get('#login-form > .btn.primary').click() // login butonunun locateine click yapabiliriz
        // cy.get('#login-password').type('test{enter}') // ya da sifreyi girip entera basabiliriz
    
    });
});