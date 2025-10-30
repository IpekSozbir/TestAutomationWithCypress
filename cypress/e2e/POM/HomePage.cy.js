class HomePage{
    getLoginLink(){
       return cy.contains('login',{matchCase:false});
    }

    getVisit(){
        return cy.visit('http://automationexercise.com');
    }

}
export default HomePage // diger dosyalardan ulasabilmek icin