# 🌐 TestAutomationWithCypress E2E Projesi

Bu depo, modern web uygulamaları için **uçtan uca (End-to-End, E2E) test otomasyonu** çalışmalarını içermektedir. Proje, hızlı, güvenilir ve modern bir test aracı olan **Cypress** framework'ü ve **JavaScript** kullanılarak geliştirilmiştir. Çalışmalar, Cypress'in temel komutlarından (Element Etkileşimleri) ileri seviye konulara (Custom Commands, POM, API Interception, Faker ve Fixtures) kadar geniş bir yelpazeyi kapsar.

---

## 🛠️ Teknolojiler ve Bağımlılıklar

Bu otomasyon projesinde kullanılan temel teknolojiler ve ek kütüphaneler:

* **Cypress:** Ana E2E test framework'ü.
* **JavaScript:** Test yazım dili.
* **Mocha/Chai:** Test yapısı (`describe`, `it`, `context`) ve Assertion kütüphaneleri.
* **`@faker-js/faker`:** Rastgele ve gerçekçi test verileri üretimi için.
* **`cypress-file-upload`:** Dosya yükleme testlerini kolaylaştırmak için.
* **`cypress-iframe`:** Iframe içindeki elementlerle etkileşim kurmak için.

### 📁 Proje Yapısı ve Gelişim Takvimi

Proje, 10 günlük bir eğitim/geliştirme planına göre yapılandırılmış ve her günün testleri ayrı bir dizinde toplanmıştır.

```
TestAutomationWithCypress/ 
├── cypress/ 
│   ├── e2e/ 
│   │   ├── POM/ # (Day 7'de Kullanıldı) Page Object Model Sınıfları 
│   │   └── testAutomationWithCypress/ 
│   │   ├── day01/ # Temel Cypress Komutları (visit, title, url, location) 
│   │   ├── day02/ # Mocha Hook'ları (beforeEach), Locate Alma, Assertionlar 
│   │   ├── day03/ # Login Testleri, before/after, Go Komutu 
│   │   ├── day04/ # Dropdown, Scroll, Checkbox, Alerts, Mouse Over 
│   │   ├── day05/ # Iframe, Multiple Windows, Custom Commands, File Upload 
│   │   ├── day06/ # Faker Kütüphanesi 
│   │   ├── day07/ # Fixtures, POM Kullanımı, Read/Write Files 
│   │   ├── day08/ # Basic API Testing (GET, Assertion) 
│   │   └── day09/ # Advanced API (POST, DELETE, Intercept, Auth) 
│   ├── fixtures/ # Test verileri (JSON, TXT) │   └── support/ 
│   ├── commands.js # Özel Cypress Komutları (Örn: cy.handleOptionalPopups()) 
│   └── e2e.js # Genel konfigürasyon ve import'lar  
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

---

## 🎯 Kapsanan Otomasyon Konuları (Detaylı Liste)

Bu kısım, günlük test dosyalarında işlenen temel konuları özetlemektedir.

# 🚀 Cypress E2E Test Otomasyon Eğitimi

Bu repository, uçtan uca (E2E) test otomasyonu için popüler JavaScript tabanlı bir araç olan **Cypress** kullanılarak geliştirilen senaryoları içermektedir. Temel UI etkileşimlerinden, gelişmiş API testlerine ve Page Object Model (POM) uygulamalarına kadar geniş bir yelpazede konular ele alınmıştır.

---

## 📚 Kapsanan Konular ve Öğrenim Günlüğü

Aşağıdaki tablolar, eğitimde günlük bazda ele alınan temel konuları, açıklamalarını ve kullanılan Cypress/Mocha komutlarını özetlemektedir.

### 🗓️ Day 01: Temel Cypress ve Mocha Komutları

| Konu | Açıklama | Örnek Komutlar |
| :--- | :--- | :--- |
| **cy.visit()** | Sayfa ziyareti. Base URL tanımlı iken (`/path`) veya tam URL ile. | `cy.visit('/')`, `cy.visit('http://www.site.com')` |
| **cy.title()** | Sayfa başlığını alma ve doğrulama. Regex, tam eşitlik (`eq`) ve içerme (`include`) ile doğrulama. | `cy.title().should('match', /regex/)`, `cy.title().should('include','...')` |
| **cy.url() & cy.location()** | Mevcut URL ve URL'in parçalarını (pathname, protocol, hostname) doğrulama. | `cy.url().should('eq', '...`)`, `cy.location('pathname').should('eq', '/path')` |
| **Mocha Yapısı** | Test bloklarını tanımlama (`describe`, `it`) ve alternatif olarak `context` kullanımı. | `describe('Test Adı', () => {})`, `it('Senaryo Adı', () => {})` |

### 🗓️ Day 02: Test Ön Hazırlık, Locate Alma ve Assertionlar

| Konu | Açıklama | Örnek Komutlar |
| :--- | :--- | :--- |
| **`beforeEach` Hook'u** | Her test (`it` bloğu) öncesinde çalışacak kurulum adımları (Örn: `cy.visit('/')`, Pop-up kapatma). | `beforeEach(() => { ... })` |
| **Element Locate Alma** | ID (`#`), Class (`.`), Attribute (`[]`), Text içeriği (`cy.contains`), CSS Selector, Index (`.eq()`), İlk/Son element (`.first()`, `.last()`) ile seçim. | `cy.get('#id')`, `cy.contains('Yazi')`, `cy.get('li').eq(2)` |
| **Custom Command Kullanımı** | Tekrarlanan işlemleri (`Pop-up kapatma`) `commands.js` dosyasına tanımlayıp `cy.` ile çağırma. | `cy.handleOptionalPopups()` |
| **Basit Etkileşimler** | Arama yapma (`.type('{enter}')`), Buton tıklama (`.click()`), Login formu doldurma. | `cy.get('#search').type('film{enter}')` |
| **Assertion Çeşitleri** | **have.text**, **include**, **be.visible**, **have.value**, **equal** gibi yöntemlerle elementin metnini, görünürlüğünü veya URL'i doğrulama. | `cy.get('h2').should('be.visible')`, `cy.title().should('equal', 'Başlık')` |

### 🗓️ Day 03: Senaryo Akışı ve Mocha Gelişmiş Komutlar

| Konu | Açıklama | Örnek Komutlar |
| :--- | :--- | :--- |
| **Pozitif/Negatif Test** | Başarılı (`Pozitif`) ve başarısız (`Negatif`) login senaryoları ile farklı hata mesajlarını doğrulama. | `cy.get('.error-message').should('be.visible')` |
| **`before` ve `after` Hook'ları** | Tüm test süiti başlamadan önce (`before`) ve bittikten sonra (`after`) tek sefer çalışan kod blokları. | `before(() => { ... })` |
| **`afterEach` Hook'u** | Her test (`it` bloğu) tamamlandıktan sonra çalışan kod (Örn: Log mesajı yazdırma). | `afterEach(() => { ... })` |
| **Navigasyon Komutları** | Tarayıcı geçmişinde ileri/geri gitme ve sayfayı yenileme. | `cy.go('back')` / `cy.go(-1)`, `cy.go('forward')` / `cy.go(1)`, `cy.reload(true)` |
| **Fonksiyonel Assertion** | Cypress'in zincirleme yapısından çıkıp **Mocha/Chai**'ın `expect` fonksiyonu ile manuel doğrulama yapma. | `cy.get('h2').then(text => { expect(text.text()).to.contains('...') })` |
| **Ekran Boyutu** | `cy.viewport()` komutu veya `cypress.config.js` ile ekran boyutunu ayarlama. | `cy.viewport(1366, 768)` |

### 🗓️ Day 04: Gelişmiş UI Etkileşimleri

| Konu | Açıklama | Örnek Komutlar |
| :--- | :--- | :--- |
| **Dropdown Menü** | `select()` komutu ile elementin **value** veya görünen metnine göre seçenek seçme. | `cy.get('#dropdown').select('Option 1').should('have.value','1')` |
| **Scroll İşlemleri** | Belirli bir element görünene kadar kaydırma veya koordinatlara kaydırma. Hız ayarlama (`duration`). | `cy.get('h2').scrollIntoView({duration: 8000})`, `cy.scrollTo(0, 1900)` |
| **Mouse Over (Hover)** | Bir elementin üzerine gelindiğinde açılan menüleri `trigger('mouseover')` ile açma. | `cy.get('.menu').trigger('mouseover')` |
| **Checkbox Yönetimi** | `check()` ve `uncheck()` komutları ile elementleri seçme veya seçimini kaldırma. Toplu veya index ile seçim. | `cy.get(':checkbox').check()`, `cy.get('input').eq(1).uncheck()` |
| **JavaScript Alerts** | **Alert** (Tamam), **Confirm** (Tamam/İptal) ve **Prompt** (Giriş) pencerelerini yönetme. İptal için `cy.on('window:confirm', () => false)` kullanılır. | `cy.on('window:confirm', ...)` |
| **Super Domain Sorunu** | Tek bir test (`it` bloğu) içinde farklı iki domain'e `cy.visit()` yapmanın Cypress kısıtlaması olduğunu anlama. | N/A |

---

## 🎯 Kapsanan Otomasyon Konuları (Detaylı Liste)

Bu kısım, günlük test dosyalarında işlenen temel konuları özetlemektedir.

### 🗓️ Day 05: İleri UI Etkileşimleri ve Custom Commands

| Konu | Açıklama | Örnek Komutlar |
| :--- | :--- | :--- |
| **Iframe Yönetimi** | `cypress-iframe` eklentisi ile **Iframe** içindeki elementlere erişim. Iframe'in yüklendiğini kontrol etme. | `cy.frameLoaded('#iframeID')`, `cy.iframe().find('selector')` |
| **Çoklu Pencere (Multi Window)** | Yeni sekmede açılan linkleri, `target="_blank"` niteliğini **`invoke('removeAttr','target')`** ile kaldırarak aynı sekmede açma. | `cy.get('a').invoke('removeAttr','target').click()` |
| **URL ile Yeni Pencere** | Yeni açılacak sayfanın URL'ini alıp, **`cy.visit()`** ile aynı sekmede açma. | `cy.get('a').then((el) => { cy.visit(el.prop('href')) })` |
| **Custom Commands (Özel Komutlar)** | Tekrarlanan görevleri (`Login`, `Arama`) **`commands.js`**'e tanımlayarak testlerde basitçe kullanma. | `cy.automationexerciseLogin('email', 'pass')`, `cy.amazonSearch('...')` |
| **Dosya Yükleme (File Upload)** | `cypress-file-upload` eklentisi ile tekli veya çoklu dosya yükleme (`.attachFile()`). | `cy.get('#input').attachFile('foto.png')`, `cy.get('#input').attachFile([f1, f2])` |

### 🗓️ Day 06: Dinamik Veri Üretimi (Faker)

| Konu | Açıklama | Örnek Komutlar |
| :--- | :--- | :--- |
| **Faker Kurulumu** | **`@faker-js/faker`** kütüphanesini projeye dahil etme (`npm install --save-dev`). | `import { faker } from '@faker-js/faker'` |
| **Dinamik Veri Üretimi** | Gerçekçi kullanıcı adı, e-posta, şifre, adres vb. bilgileri test senaryolarında kullanmak. | `faker.person.firstName()`, `faker.internet.email()`, `faker.location.zipCode('######')` |
| **Değişken Tanımlama** | JavaScript'te `let`, `var`, `const` ile değişken tanımlama ve kullanma. | `let email = faker.internet.email()` |
| **Veri Tipi Belirleme** | Faker'da üretilen veriler için opsiyonel tipler/şekiller belirleme (Örn: Cinsiyet, telefon numarası formatı). | `faker.person.firstName('female')`, `faker.phone.number({ style: 'human' })` |
11:26
### 🗓️ Day 07: Veri Yönetimi, Fixtures ve POM

| Konu | Açıklama | Örnek Komutlar |
| :--- | :--- | :--- |
| **Fixtures (Veri Dosyaları)** | Statik test verilerini (`URL`, `username`, `password`) harici **JSON** dosyalarında tutma ve **`cy.fixture()`** ile yükleme. | `cy.fixture('sinemalar').then(function(data){ this.data=data })` |
| **Fixture Kullanımı** | `before()` hook'u ile JSON dosyasını yükleme ve **`this.data`** ile verilere erişme. | `cy.visit(this.data.url)`, `cy.get('#login-username').type(this.data.username)` |
| **Page Object Model (POM)** | Locate'leri ve etkileşim metotlarını ayrı **Page** sınıflarında toplama. Test kodunu temiz ve okunur hale getirme. | `const Homepage = new HomePage();`, `Homepage.getLoginLink().click()` |
| **Dosya Yazma (`cy.writeFile`)** | Dinamik olarak **JSON** veya **TXT** formatında dosya oluşturma ve içerik yazma. | `cy.writeFile('cypress/fixtures/ornek.json', { username: '...' })` |
| **Dosya Okuma (`cy.readFile`)** | Mevcut bir dosyadan verileri okuma ve üzerinde doğrulama (`assert` / `expect`) yapma. | `cy.readFile('users.json').then((data) => { expect(data[7].name).to.equal('...') })` |

### 🗓️ Day 08: Temel API (GET İstekleri)

| Konu | Açıklama | Örnek Komutlar |
| :--- | :--- | :--- |
| **JSON Objesi Kullanımı** | JavaScript'te JSON objeleri, Diziler ve İç İçe Objelere erişim (`key`/`index` ile). | `simpleObject.key2`, `body.student[1].firstname` |
| **`cy.request()`** | Cypress'in yerleşik **API istek** komutu. URL'e `GET` isteği gönderme. | `cy.request('https://.../comments')` |
| **Header Doğrulama** | API yanıtının başlık bilgilerini (`headers`, `content-type`, `date`) kontrol etme. | `.its('headers').its('date').should('include','...')` |
| **Basic Response Assertion** | API yanıtının **Status Code**'unu veya **Body** içeriğini **`assert.equal`** ile kontrol etme. | `.should((response) => { assert.equal(response.body.data[3].id, 4) })` |
| **Body (Payload) Doğrulama** | Yanıt gövdesindeki belirli alanların (`id`, `name`, `email`) değerlerini doğrulama. | `assert.equal(response.body[6].email, 'Dallas@ole.me')` |

### 🗓️ Day 09: Gelişmiş API (POST, DELETE, Intercept, Auth)

| Konu | Açıklama | Örnek Komutlar |
| :--- | :--- | :--- |
| **`expect()` Assertion** | API yanıtlarını kontrol etmek için `assert` yerine **Chai**'ın **`expect()`** yöntemini kullanma. | `expect(response.status).to.equal(200)`, `expect(response.body.id).to.equal(123)` |
| **POST İstekleri** | Veri oluşturmak için API'ye **`POST`** isteği gönderme ve yanıtı doğrulama. | `cy.request('POST', url, { title: "Cypress" })` |
| **DELETE İstekleri** | Kaynak silmek için API'ye **`DELETE`** isteği gönderme ve **Status Code 200** ile başarılı olduğunu doğrulama. | `cy.request({ method: 'DELETE', url: '...' })` |
| **Kimlik Doğrulama (Authentication)** | API isteklerine **`auth`** nesnesi ile **username/password** veya **`token`** ekleme. | `cy.request({ url: '...', auth: { username: 'admin', password: '...' } })` |
| **Network Interception** | **`cy.intercept()`** ile giden/gelen ağ isteklerini yakalama ve dinleme. | `cy.intercept('GET', '**/comments/**').as('getComment')` |
| **İstek Bekleme ve Doğrulama** | **`cy.wait('@alias')`** ile yakalanan isteğin tamamlanmasını bekleme ve yanıtını (`response`) doğrulama. | `cy.wait('@getComment').its('response').then(response => { assert.equal(response.statusCode, 200) })` |

---

## 🚀 Nasıl Çalıştırılır?

Projeyi yerel ortamınızda ayağa kaldırmak ve çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

### Ön Gereksinimler

* **Node.js:** (LTS sürümü önerilir)
* **npm** veya **yarn:** Paket yöneticisi.

### Kurulum ve Çalıştırma

1.  **Depoyu Klonlayın:**
    ```bash
    git clone https://github.com/IpekSozbir/TestAutomationWithCypress.git
   
    ```
2.  **Bağımlılıkları Kurun:**
    ```bash
    npm install
    ```
3.  **Cypress Test Runner'ı Açın:**
    Aşağıdaki komut, Cypress uygulamasını başlatır.
    ```bash
    npx cypress open
    ```

### CLI (Komut Satırı) Çalıştırma Komutları

| Komut | Açıklama |
| :--- | :--- |
| **`npx cypress open`** | Test Runner'ı açar (Tarayıcı ve Test seçimi yapılır). |
| **`npx cypress run`** | **Headless** (Tarayıcı açmadan) modda, **Electron** ile tüm testleri çalıştırır ve ekran görüntüsü/video kaydı alır. |
| **`npx cypress run --browser chrome --headed`** | Chrome tarayıcısını **Görünür** (`headed`) modda açarak tüm testleri çalıştırır. |
| **`npx cypress run --spec 'cypress/e2e/day02/'`** | Sadece `day02` klasöründeki tüm testleri çalıştırır. |

---

# 🌐 TestAutomationWithCypress E2E Project

This repository contains **End-to-End (E2E) test automation** exercises for modern web applications. The project is developed using the **Cypress** framework and **JavaScript**, a fast, reliable, and modern testing tool. The work covers a wide range of topics, from basic Cypress commands (Element Interactions) to advanced subjects (Custom Commands, POM, API Interception, Faker, and Fixtures).

---

## 🛠️ Technologies and Dependencies

The core technologies and supplementary libraries used in this automation project are:

* **Cypress:** The main E2E test framework.
* **JavaScript:** The test scripting language.
* **Mocha/Chai:** Test structure (`describe`, `it`, `context`) and Assertion libraries.
* **`@faker-js/faker`:** For generating random and realistic test data.
* **`cypress-file-upload`:** To facilitate file upload testing.
* **`cypress-iframe`:** For interacting with elements inside Iframes.

### 📁 Project Structure and Development Timeline

The project is structured according to a 10-day training/development plan, with each day's tests gathered in a separate directory.

```
TestAutomationWithCypress/
├── cypress/
│ ├── e2e/
│ │ ├── POM/ # (Used in Day 7) Page Object Model Classes
│ │ └── testAutomationWithCypress/
│ │ ├── day01/ # Basic Cypress Commands (visit, title, url, location)
│ │ ├── day02/ # Mocha Hooks (beforeEach), Locating Elements, Assertions
│ │ ├── day03/ # Login Tests, before/after Hooks, Go Command
│ │ ├── day04/ # Dropdown, Scroll, Checkbox, Alerts, Mouse Over
│ │ ├── day05/ # Iframe, Multiple Windows, Custom Commands, File Upload
│ │ ├── day06/ # Faker Library
│ │ ├── day07/ # Fixtures, POM Usage, Read/Write Files
│ │ ├── day08/ # Basic API Testing (GET, Assertion)
│ │ └── day09/ # Advanced API (POST, DELETE, Intercept, Auth)
│ ├── fixtures/ # Test data (JSON, TXT)
│ └── support/
│ ├── commands.js # Custom Cypress Commands (e.g., cy.handleOptionalPopups())
│ └── e2e.js # General configuration and imports
├── .gitignore             # Files that should not be tracked by the Git version control system.
├── cypress.config.js      # Cypress's main configuration file (Base URL, viewport, test folders, etc.)
├── package-lock.json      # Contains the exact and locked version information of dependencies (for consistent installation).
├── package.json           # Defines the project name, version, and all dependencies (Cypress, Faker, etc.) here.
└── README.md
```

---

## 🎯 Covered Automation Topics (Detailed List)

This section summarizes the key topics covered in the daily test files.

### 🗓️ Day 01: Basic Cypress and Mocha Commands

| Topic | Description | Example Commands |
| :--- | :--- | :--- |
| **`cy.visit()`** | Page navigation. Used with Base URL (`/path`) or full URL. | ``cy.visit('/')``, ``cy.visit('http://www.site.com')`` |
| **`cy.title()`** | Getting and asserting the page title. Assertions via regex, exact match (`eq`), and inclusion (`include`). | ``cy.title().should('match', /regex/)``, ``cy.title().should('include','...')`` |
| **`cy.url() & cy.location()`** | Asserting the current URL and its components (pathname, protocol, hostname). | ``cy.url().should('eq', '...')``, ``cy.location('pathname').should('eq', '/path')`` |
| **Mocha Structure** | Defining test blocks (`describe`, `it`) and using `context` as an alternative. | ``describe('Test Name', () => {})``, ``it('Scenario Name', () => {})`` |

### 🗓️ Day 02: Test Setup, Element Locators, and Assertions

| Topic | Description | Example Commands |
| :--- | :--- | :--- |
| **`beforeEach` Hook** | Setup steps that run before each test (`it` block) (e.g., `cy.visit('/')`, closing a pop-up). | ``beforeEach(() => { ... })`` |
| **Element Locating** | Selecting elements using ID (`#`), Class (`.`), Attribute (`[]`), Text content (`cy.contains`), CSS Selector, Index (`.eq()`), First/Last element (`.first()`, `.last()`). | ``cy.get('#id')``, ``cy.contains('Text')``, ``cy.get('li').eq(2)`` |
| **Custom Command Usage** | Defining repetitive operations (e.g., Pop-up closing) in `commands.js` and calling them with `cy.`. | ``cy.handleOptionalPopups()`` |
| **Basic Interactions** | Searching (`.type('{enter}')`), Clicking a button (`.click()`), Filling out a login form. | ``cy.get('#search').type('film{enter}')`` |
| **Assertion Types** | Asserting an element's text, visibility, or URL using methods like **have.text**, **include**, **be.visible**, **have.value**, **equal**. | ``cy.get('h2').should('be.visible')``, ``cy.title().should('equal', 'Title')`` |

### 🗓️ Day 03: Scenario Flow and Advanced Mocha Commands

| Topic | Description | Example Commands |
| :--- | :--- | :--- |
| **Positive/Negative Testing** | Asserting different error messages with successful (`Positive`) and unsuccessful (`Negative`) login scenarios. | ``cy.get('.error-message').should('be.visible')`` |
| **`before` and `after` Hooks** | Code blocks that run once before the entire test suite starts (`before`) and once after it finishes (`after`). | ``before(() => { ... })`` |
| **`afterEach` Hook** | Code that runs after each test (`it` block is completed) (e.g., logging a message). | ``afterEach(() => { ... })`` |
| **Navigation Commands** | Moving backward/forward in the browser history and refreshing the page. | ``cy.go('back')`` / ``cy.go(-1)``, ``cy.go('forward')`` / ``cy.go(1)``, ``cy.reload(true)`` |
| **Functional Assertion** | Breaking the Cypress command chain to perform manual assertion using Mocha/Chai's `expect` function. | ``cy.get('h2').then(text => { expect(text.text()).to.contains('...') })`` |
| **Viewport Size** | Setting the screen size with the `cy.viewport()` command or in `cypress.config.js`. | ``cy.viewport(1366, 768)`` |

### 🗓️ Day 04: Advanced UI Interactions

| Topic | Description | Example Commands |
| :--- | :--- | :--- |
| **Dropdown Menu** | Selecting an option based on the element's **value** or visible text using the `select()` command. | ``cy.get('#dropdown').select('Option 1').should('have.value','1')`` |
| **Scroll Operations** | Scrolling until a specific element is visible or scrolling to coordinates. Setting scroll speed (`duration`). | ``cy.get('h2').scrollIntoView({duration: 8000})``, ``cy.scrollTo(0, 1900)`` |
| **Mouse Over (Hover)** | Triggering menus that open upon hovering over an element using `trigger('mouseover')`. | ``cy.get('.menu').trigger('mouseover')`` |
| **Checkbox Management** | Selecting or deselecting elements using `check()` and `uncheck()` commands. Selection can be collective or by index. | ``cy.get(':checkbox').check()``, ``cy.get('input').eq(1).uncheck()`` |
| **JavaScript Alerts** | Handling **Alert** (OK), **Confirm** (OK/Cancel), and **Prompt** (Input) windows. Use `cy.on('window:confirm', () => false)` to cancel. | ``cy.on('window:confirm', ...)`` |
| **Super Domain Issue** | Understanding the Cypress limitation of not being able to use `cy.visit()` to two different domains within a single test (`it` block). | N/A |

---

## :dart: Covered Automation Topics (Detailed List)

This section summarizes the key topics covered in the daily test files.

### :spiral_calendar_pad: Day 05: Advanced UI Interactions and Custom Commands

| Topic | Description | Example Commands |
| :--- | :--- | :--- |
| **Iframe Management** | Accessing elements inside an **Iframe** using the `cypress-iframe` plugin. Checking if the Iframe is loaded. | ``cy.frameLoaded('#iframeID')``, ``cy.iframe().find('selector')`` |
| **Multiple Windows** | Opening links that usually open in a new tab by removing the `target="_blank"` attribute with **`invoke('removeAttr','target')`** to keep them in the same tab. | ``cy.get('a').invoke('removeAttr','target').click()`` |
| **New Window via URL** | Getting the URL of the page that would open and navigating to it in the same tab using **`cy.visit()`**. | ``cy.get('a').then((el) => { cy.visit(el.prop('href')) })`` |
| **Custom Commands** | Defining repetitive tasks (`Login`, `Search`) in **`commands.js`** and calling them simply in tests. | ``cy.automationexerciseLogin('email', 'pass')``, ``cy.amazonSearch('...')`` |
| **File Upload** | Uploading single or multiple files using the `cypress-file-upload` plugin with **`.attachFile()`**. | ``cy.get('#input').attachFile('photo.png')``, ``cy.get('#input').attachFile([f1, f2])`` |

### :spiral_calendar_pad: Day 06: Dynamic Data Generation (Faker)

| Topic | Description | Example Commands |
| :--- | :--- | :--- |
| **Faker Setup** | Including the **`@faker-js/faker`** library in the project (`npm install --save-dev`). | ``import { faker } from '@faker-js/faker'`` |
| **Dynamic Data Generation** | Using realistic data like usernames, email, passwords, addresses, etc., in test scenarios. | ``faker.person.firstName()``, ``faker.internet.email()``, ``faker.location.zipCode('######')`` |
| **Variable Definition** | Defining and using variables in JavaScript with `let`, `var`, and `const`. | ``let email = faker.internet.email()`` |
| **Data Type Specification** | Specifying optional types/formats for data generated by Faker (e.g., Gender, phone number format). | ``faker.person.firstName('female')``, ``faker.phone.number({ style: 'human' })`` |

### :spiral_calendar_pad: Day 07: Data Management, Fixtures, and POM

| Topic | Description | Example Commands |
| :--- | :--- | :--- |
| **Fixtures (Data Files)** | Storing static test data (`URL`, `username`, `password`) in external **JSON** files and loading them with **`cy.fixture()`**. | ``cy.fixture('cinemas').then(function(data){ this.data=data })`` |
| **Fixture Usage** | Loading the JSON file in the `before()` hook and accessing the data using **`this.data`**. | ``cy.visit(this.data.url)``, ``cy.get('#login-username').type(this.data.username)`` |
| **Page Object Model (POM)** | Grouping locators and interaction methods into separate **Page** classes. Making test code clean and readable. | ``const Homepage = new HomePage();``, ``Homepage.getLoginLink().click()`` |
| **Writing Files (`cy.writeFile`)** | Dynamically creating a file in **JSON** or **TXT** format and writing content to it. | ``cy.writeFile('cypress/fixtures/example.json', { username: '...' })`` |
| **Reading Files (`cy.readFile`)** | Reading data from an existing file and performing assertions (`assert` / `expect`) on it. | ``cy.readFile('users.json').then((data) => { expect(data[7].name).to.equal('...') })`` |

### :spiral_calendar_pad: Day 08: Basic API Testing (GET Requests)

| Topic | Description | Example Commands |
| :--- | :--- | :--- |
| **JSON Object Usage** | Accessing JSON objects, Arrays, and Nested Objects in JavaScript (using `key`/`index`). | `simpleObject.key2`, `body.student[1].firstname` |
| **`cy.request()`** | Cypress's built-in **API request** command. Sending a `GET` request to a URL. | ``cy.request('https://.../comments')`` |
| **Header Assertion** | Checking the API response's header information (`headers`, `content-type`, `date`). | ``.its('headers').its('date').should('include','...')`` |
| **Basic Response Assertion** | Checking the API response's **Status Code** or **Body** content using **`assert.equal`**. | ``.should((response) => { assert.equal(response.body.data[3].id, 4) })`` |
| **Body (Payload) Assertion** | Asserting the values of specific fields (`id`, `name`, `email`) within the response body. | ``assert.equal(response.body[6].email, 'Dallas@ole.me')`` |

### :spiral_calendar_pad: Day 09: Advanced API (POST, DELETE, Intercept, Auth)

| Topic | Description | Example Commands |
| :--- | :--- | :--- |
| **`expect()` Assertion** | Using Chai's **`expect()`** method instead of `assert` to check API responses. | ``expect(response.status).to.equal(200)``, ``expect(response.body.id).to.equal(123)`` |
| **POST Requests** | Sending a **`POST`** request to the API to create data and asserting the response. | ``cy.request('POST', url, { title: "Cypress" })`` |
| **DELETE Requests** | Sending a **`DELETE`** request to the API to delete a resource and asserting its success with **Status Code 200**. | ``cy.request({ method: 'DELETE', url: '...' })`` |
| **Authentication** | Adding **username/password** via the **`auth`** object or a **`token`** to API requests. | ``cy.request({ url: '...', auth: { username: 'admin', password: '...' } })`` |
| **Network Interception** | **`cy.intercept()`** to intercept and mock outgoing/incoming network requests. | ``cy.intercept('GET', '**/comments/**').as('getComment')`` |
| **Waiting and Assertion** | Waiting for the intercepted request to complete using **`cy.wait('@alias')`** and asserting its response. | ``cy.wait('@getComment').its('response').then(response => { assert.equal(response.statusCode, 200) })`` |

---

## :rocket: How to Run

Follow the steps below to set up and run the project in your local environment.

### Prerequisites

* **Node.js:** (LTS version recommended)
* **npm** or **yarn:** Package manager.

### Setup and Execution

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/IpekSozbir/TestAutomationWithCypress.git
    ```
2. **Install Dependencies:**
    ```bash
    npm install
    ```
3. **Open the Cypress Test Runner:**
    The following command launches the Cypress application.
    ```bash
    npx cypress open
    ```

### CLI (Command Line Interface) Run Commands

| Command | Description |
| :--- | :--- |
| **`npx cypress open`** | Opens the Test Runner (Allows selection of Browser and Tests). |
| **`npx cypress run`** | Runs all tests in **Headless** mode (without opening a browser) with **Electron**, capturing screenshots/video recordings. |
| **`npx cypress run --browser chrome --headed`** | Runs all tests using the Chrome browser in **Headed** (visible) mode. |
| **`npx cypress run --spec 'cypress/e2e/day02/'`** | Runs only the tests within the `day02` folder. 