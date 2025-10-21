///<reference types="cypress" />
import{ faker }from '@faker-js/faker'

describe('Faker Kullanimi', () => {
    // Kurulum islemi
    // www.npmjs.com adresinden alinan 
    // npm install --save-dev @faker-js/faker komutu ile kurulum yapilir

    // Cypressda 3 farkli degisken tanimlamasi yapilir
    // 1- let variablename= deger atanabilir ve degistirilebilir
    // 2- var variablename= deger atanabilir ve degistirilebilir
    // 3- const variablename= deger atanir ve degistirilemez


    it('automationexercise Login Testi', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    
        let firstname=faker.person.firstName('female') // uretilen isim icin cinsiyet secebiliriz
        let lastname=faker.person.lastName()
        let email=faker.internet.email()

        cy.get('[data-qa="signup-name"]').type(firstname+' '+lastname)
        cy.get('[data-qa="signup-email"]').type(email) // uretilen email adresi icin iceregi isim, uzantı, ozel karakter vb belirleyebliriz
        cy.get('[data-qa="signup-button"]').click()

        cy.get('#id_gender2').click()
        let password=faker.internet.password()
        cy.get('[data-qa="password"]').type(password) // uretilen password icin karakter sayisi, icerik vb belirleyebiliriz
        cy.get('[data-qa="first_name"]').type(firstname)
        cy.get('[data-qa="last_name"]').type(lastname)
        let address=faker.location.streetAddress()
        cy.get('[data-qa="address"]').type(address)
        cy.get('[data-qa="country"]').select(1)
        let state=faker.location.state()
        cy.get('[data-qa="state"]').type(state)
        let city=faker.location.city()
        cy.get('[data-qa="city"]').type(city)
        let zipcode=faker.location.zipCode('######') //kac haneli istedigini # sayisiyla belirleyebiliriz
        cy.get('[data-qa="zipcode"]').type(zipcode)
        let phonenumber=faker.phone.number({ style: 'human' }) // telefon numarasi tipi belirleyebiliriz
        cy.get('[data-qa="mobile_number"]').type(phonenumber)
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('include.text','Created')


        

    });
});