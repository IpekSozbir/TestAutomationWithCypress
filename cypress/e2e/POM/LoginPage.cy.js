class LoginPage {
    getUserEmail(){
        return cy.get('[data-qa="login-email"]');
    }

    getPassword(){
        return cy.get('[data-qa="login-password"]');
    }

    getLoginButton(){
       return cy.get('[data-qa="login-button"]');
    }

    getAssert(){
        return cy.get(':nth-child(10) > a').should('contain','Logged');
    }
  
}
export default LoginPage