const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  viewportHeight:1000,
  viewportWidth:1200,
  // istedimiz ekran olculeri

  // defaultCommandTimeout: 12000, // Genel bekleme suresi
  video: false,  // Gereksiz hafiza kullaniminin onune gecmek icin false 
  // screenshotOnRunFailure: true,  // Eklenmesi zorunlu degil Cypress zaten screenshot aliyor
  retries:2,  // Fail olan testlerin 2 kere daha calistirilmasini saglar

    baseUrl:"https://www.sinemalar.com",
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});







