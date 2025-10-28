describe('Json ile Login Testi', () => {

before(function () {
    cy.fixture('sinemalar').then(function(data){
        this.data=data
    }) 
    // json dosyasinin yerini tanimladik ve veriyi this.data'ya atadik
    // Testler baslamadan once 'sinemalar.json' fixture dosyasini yukleyip veriyi this.data icine kaydeder

    
});

    it('Json Login Testi', function() {
        cy.visit(this.data.url)
        cy.get('.account > .icon-only').click()
        cy.contains('giriş yap',{matchCase:false}).click()
        cy.get('#login-username').type(this.data.username)
        cy.get('#login-password').type(this.data.password)
        
    });
});