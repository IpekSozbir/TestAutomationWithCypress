/**
 * 🏆 CYPRESS LOCATOR STRATEJİSİ & KARAR REHBERİ
 * ---------------------------------------------------
 * Bu rehber, Cypress'te element bulma (locating) sürecinin
 * felsefesini, tekniklerini ve "Best Practice" kurallarını açıklar.
 *
 * 📌 TEMEL FELSEFE:
 * "Kullanıcının gördüğü metne veya işlevsel özelliklere odaklan,
 * değişken HTML yapılarına saplanma."
 */

describe('Cypress Locator Master Notes', () => {

    /*
     * 🟢 ADIM 1: KULLANICI ODAKLI (BUILT-IN) LOCATORS
     * ---------------------------------------------------------
     * Cypress'in en güçlü olduğu alan "cy.contains" ve "Attribute" kullanımıdır.
     */
    it('Built-in Locators', () => {
        // 1. cy.contains(): Playwright'ın getByText'i gibidir. Ekranda görünen metni bulur.
        // Hassas arama için regex veya seçici ile birleştirilebilir.
        cy.contains('Giriş Yap');
        cy.contains('button', 'Gönder'); // Sadece butonların içindeki 'Gönder' yazısına bakar.

        // 2. Attribute Tabanlı: Cypress 'data-cy' veya 'data-testid' kullanımını şiddetle önerir.
        cy.get('[data-cy="submit-button"]');
        cy.get('[placeholder="Şifrenizi giriniz..."]');

        // 3. Label ve Input İlişkisi:
        // Cypress'te direkt 'getByLabel' yoktur (Testing Library eklenmedikçe).
        // Yerine genellikle hiyerarşik veya contains kullanılır.
        cy.get('label').contains('Email adresi').parent().find('input');
    });

    /*
     * 🟡 ADIM 2: TEKNİK SEÇİCİLER (CSS SELECTORS)
     * ---------------------------------------------------------
     * Built-in yöntemler yetmediğinde standart CSS gücü devreye girer.
     */
    it('Technical Locators', () => {
        // # -> ID: Hızlı ve tekildir.
        cy.get('#login-btn');

        // . -> Class: Stil odaklıdır, değişme riski yüksektir. Dikkatli kullanılmalı.
        cy.get('.btn-primary');

        // [] -> Attribute: Tip, isim veya özel nitelikler için.
        cy.get('[type="submit"]');

        // Boşluk veya find() -> Anne-Çocuk ilişkisi.
        cy.get('.login-form').find('input[name="username"]');
    });

    /*
     * 🟠 ADIM 3: FİLTRELEME, ZİNCİRLEME VE SCOPING
     * ---------------------------------------------------------
     * Cypress'in "zincirleme" (Chaining) yapısı burada parlar.
     */
    it('Filtering and Chaining', () => {
        // .filter(): Belirli bir kritere uyanları ayıklar.
        cy.get('tr').filter(':contains("Picasso")').find('button.delete').click();

        // .within(): Aramayı sadece belirli bir bölgeyle sınırlar. (Playwright'taki locator.locator gibi)
        cy.get('.navbar').within(() => {
            cy.get('button').click(); // Sadece navbar içindeki butona tıklar.
        });

        // Sıralama: .first(), .last(), .eq(index)
        cy.get('ul > li').first();   // İlk eleman
        cy.get('ul > li').eq(2);     // 3. eleman (0-based)
    });

    /*
     * 🔴 ADIM 4: KRİTİK AYRIMLAR & CYPRESS'İN DOĞASI
     * ---------------------------------------------------------
     */
    it('Critical Differences', () => {
        // 1. .get() vs .find():
        // .get() -> Tüm sayfada (DOM root) arar.
        // .find() -> Daha önce seçilmiş bir elementin içinde arar.

        // 2. Metin Yakalama:
        // .text() -> jQuery fonksiyonudur, metni döndürür.
        // .invoke('text') -> Cypress komutudur, metni bir sonraki zincire taşır.

        // 3. Visibility (Görünürlük):
        // Cypress varsayılan olarak gizli (hidden) elementlere tıklamaz, hata verir.
        // Bu, Playwright'ın aksine bir güvenlik bariyeridir.
    });

    /*
     * ⚡ ADIM 5: ASSERTIONS (DOĞRULAMALAR)
     * ---------------------------------------------------------
     * Cypress 'Should' komutu ile "Retry-ability" (Tekrar deneme) özelliğini kullanır.
     */
    it('Assertions', () => {
        const locator = cy.get('.status-message');

        locator.should('be.visible');               // Görünüyor mu?
        locator.should('not.be.disabled');          // Aktif mi?
        locator.should('have.text', 'Başarılı');    // Tam metin eşleşmesi?
        locator.should('contain', 'İşlem');         // Metin içeriyor mu?
        locator.should('have.attr', 'type', 'text'); // Attribute kontrolü.
    });
});

/**
 * 🚀 CYPRESS KARAR AĞACI :
 * 1. Elementin kendine has bir metni var mı? -> cy.contains() kullan.
 * 2. Geliştirici ile iletişimdesin veya imkanın var mı? -> Elementlere [data-cy] eklet.
 * 3. Bir liste veya tablo ile mi uğraşıyorsun? -> .eq() veya .filter() kullan.
 * 4. Karmaşık bir formda mısın? -> .within() kullanarak alanı daralt.
 * 5. Dinamik yüklenen bir yapı mı var? -> Cypress implicit wait yapar ama .should() ile bekleme ekle.
 */