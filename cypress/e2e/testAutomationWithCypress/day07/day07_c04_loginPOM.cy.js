import HomePage from "../../POM/HomePage.cy";
import LoginPage from "../../POM/LoginPage.cy";

describe('POM ile Login', () => {

    it('Login Testi', () => {
        const Homepage = new HomePage()
        const Loginpage = new LoginPage()

        Homepage.getVisit()
        Homepage.getLoginLink().click()
        Loginpage.getUserEmail().type('mailaddressfortests@gmail.com')
        Loginpage.getPassword().type('Ae123')
        Loginpage.getLoginButton().click()
        Loginpage.getAssert()

        // POM icinde olusturdugumuz page'lerde sadece locateleri return ettirebilecegimiz gibi type ve click islemlerini de yaptirabiliriz
        // yeniden kullanilabilirligini attirmasi acisindan bu komutlari test(it) icinde kullanmayi tercih ettik

    });

});