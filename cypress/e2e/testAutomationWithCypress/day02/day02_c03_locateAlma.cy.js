describe('Locate Alma', () => {
    beforeEach(() => {
        cy.visit('/'),
        
        //Acilan popuplari otomatik kontrol edip kapatma
        //1.Yontem: beforeEach'te method cagirma
      
        // commands.js dosyasina fonksiyonu yaziyoruz
        // e2e.js dosyasina commands.js 'yi import ediyoruz 
        // config.js  de  supportFile: 'cypress/support/e2e.js', olarak belirtiyoruz
        //  ve methodu cy. ile cagiriyoruz

        cy.handleOptionalPopups()  // Popup'lari otomatik kapatmak  icin  commands.js helper fonksiyonunu  cagiriyoruz
    });
    it('cy.get komutu', () => {        

        /*
        '2.Yontem:it blogu icinde 

        Cerezleri kabul etme fonksiyonu  burada tanimlanipta kullanilabilir
        const cookieBanner = '.flex-wrap > .flex-row > .btn.primary'

        cy.get('body').then(($body) => {
            if ($body.find(cookieBanner).length > 0) {
            cy.get(cookieBanner).click()
            }
        })
        */

        // 3.Yontem olarak asagidaki gibi elemeti direk clickletebiliriz ancak bu hic dinamik degil

        // cy.get('.flex-wrap > .flex-row > .btn.primary').click // cerez kabul etme icin
        //cy.get('#announcement-modal > .modal-wrapper > .dialog > .icon-only').click() // hemen dene reklam acilir penceresini gelirse kapatmak icin
        cy.get('#hamburger-btn')

    });
});

describe('Element Seciciler', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.handleOptionalPopups()
  })

  it('Cesitli seciciler kullanir', () => {
    
    // ID ile seçim  "#"
    cy.get('#hamburger-btn')
    
    // Class ile seçim   "."
    //cy.get('.btn large icon-only white')
    
    // Attribute ile seçim
    //cy.get('[data-cy="panel2ResizeHandle"]')
    cy.get('[aria-label="Giriş Yap / Üye Ol"]')
    
    // Text içeriği ile seçim
    cy.contains('Vizyondaki Filmler')
    
    // CSS seçici
    cy.get('button.primary')
    
    // İlk/son element
    cy.get('li').first()
    cy.get('li').last()
    
    // Index ile seçim
    cy.get('li').eq(2)
  })
})



// xpath ile locate alma  
// button[@id='hamburger-btn']  // xpathle aldigimiz bu locatei cy.get('') icine koyarsak 
// get parantezi icinde birden fazla cift ' isareti olur. Tirnak isaretleri karisir. cy.get('button[@id='hamburger-btn']')  
// Bunun onune gecmek icin xpath icindeki tirnak isaretlerini cift tirnak olarak yazmaliyiz
// cy.get('button[@id="hamburger-btn"]')  


// Not: eger css selector ile locate aliyorsak cy.get() komutunda id degeri aliniyorsa basina #, --> cy.get('#hamburger-btn')
//                                        class degeri aliniyorsa basina . koymak yeterli -->  cy.get('.flex-column > :nth-child(3) > a')