describe('Json ile Login Testi', () => {

before(function () {
    cy.fixture('automationexercise').then(function(data){
        this.data=data
    }) 
    // json dosyasinin yerini tanimladik ve veriyi this.data'ya atadik
    // Testler baslamadan once 'automationexercise.json' fixture dosyasini yukleyip veriyi this.data icine kaydeder

    
});

    it('Json Login Testi', function() {
        cy.visit(this.data.url)
        cy.contains('login',{matchCase:false}).click()
        
    });
});