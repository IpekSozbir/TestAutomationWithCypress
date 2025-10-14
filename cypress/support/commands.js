// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Herhangi bir Popup, Cookie vb. bir elementi kapatmak istersek bir functionin icine aliyoruz bunu
// helper  fonksiyonu olarak kullanabiliriz.
// bu fonksiyon popup, cookie vb bir element var mi kontrol  eder, bulursa tiklar
// element yoksa yoluna devam eder

// <reference types="cypress" />

// Yuklendigini anlamak icin log
console.log('[commands.js] loaded')

Cypress.Commands.add('handleOptionalPopups', () => {
  const selectors = [
    '.flex-wrap > .flex-row > .btn.primary',   // Çerez kabul et
    '#announcement-modal .icon-only',          // Reklam kapatma
    '.newsletter-popup .close-btn'             // Newsletter kapatma
  ]

  selectors.forEach((selector) => {
    // DOM hazir mi ve element var mi kontrol et
    cy.document().then((doc) => {
      const el = doc.querySelector(selector)
      if (el) {
        cy.wrap(el).click({ force: true })
      }
    })
  })
})

Cypress.Commands.add('automationexerciseLogin',(username,password)=>{
  cy.visit('https://www.automationexercise.com/login')
  cy.get('[data-qa="login-email"]').type(username)
  cy.get('[data-qa="login-password"]').type(password)
  cy.get('[data-qa="login-button"]').click()
})

Cypress.Commands.add('amazonSearch',(productName)=>{
  cy.visit('https://www.amazon.com')
  cy.get('#twotabsearchtextbox').type(productName)
  cy.get('#nav-search-submit-button').click()
  cy.get('#twotabsearchtextbox').should('have.value',productName)
})