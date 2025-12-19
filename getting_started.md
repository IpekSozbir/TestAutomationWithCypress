# 🚀 Cypress Hızlı Başlangıç Kılavuzu (First Run)

Bu belge, Cypress ile yeni bir proje başlatmak, temel kurulumları yapmak ve ilk testleri çalıştırmak için gereken adım adım rehberdir.
Özellikle VS Code kullanan ve Cypress'i ilk kez deneyecek kişiler için sade, hızlı ve çalışır bir başlangıç kılavuzudur.

> 🎯 Amaç: Projeyi kur → Cypress'i çalıştır → Gerekli eklentileri ekle → Test yazmaya hazır hale gel

---

## 1. Ön gereksinimler

Cypress'i kullanmak için sistemde aşağıdakiler olmalıdır:

1) **Node.js** yüklü olmalı.  
   - Desteklenen sürümler ve işletim sistemi gereksinimleri için Cypress resmi dokümanına bakın. :contentReference[oaicite:0]{index=0}

2) Paket yöneticisi: **npm** (veya yarn / pnpm).  
   - Node.js ile birlikte gelen npm genelde yeterlidir.

---

## 📁 2. Proje Oluşturma

Terminal / VS Code Terminal:

```bash
mkdir TestAutomationWithCypress
cd TestAutomationWithCypress
npm init -y
```

Bu komutlar sonrası otomatik oluşan **package.json** örneği:

```json
{
  "name": "cypress",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}
```

---

## ⚙️ 3. Cypress Kurulumu

```bash
npm install --save-dev cypress
```

Versiyon kontrol:

```bash
npx cypress -v
npm show cypress version
```

Cypress Test Runner'ı aç:

```bash
npx cypress open
```

> Açılan ekranda:
> - **E2E Testing** seç
> - Dosya yapısını oluştur
> - Tarayıcı olarak **Chrome** seç

---

## 🧱 4. Önerilen Klasör Yapısı

```
cypress/
 ├── e2e/
 ├── fixtures/
 ├── support/
 │    ├── commands.js
 │    └── e2e.js
 ├── downloads/
 ├── screenshots/

cypress.config.js
package.json
.gitignore
```

> 📌 `cypress/e2e` içindeki **example dosyalarını silebilirsin**

---

## 🔧 5. cypress.config.js Ayarları

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.site.com",
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 12000,
    retries: 2,
    chromeWebSecurity: false
  }
});
```

---

## 🧩 6. Gerekli Eklentiler

| Eklenti | Kurulum | Kullanım |
|------|------|------|
| Faker | `npm install @faker-js/faker` | `import { faker } from '@faker-js/faker'` |
| XPath | `npm install -D cypress-xpath` | `import 'cypress-xpath'` |
| Iframe | `npm install -D cypress-iframe` | `cy.frameLoaded()` |
| File Upload | `npm install -D cypress-file-upload` | `cy.attachFile()` |

### XPath Aktif Etme

`cypress/support/e2e.js`

```js
import 'cypress-xpath';
```

---

## 🧪 7. Temel Cypress Komutları

```js
cy.go('back');
cy.go('forward');
cy.reload();
```

---

## 🖥️ 8. Cypress CLI Kullanımı

| Komut | Açıklama |
|----|----|
| `npx cypress open` | GUI mod |
| `npx cypress run` | Headless |
| `npx cypress run --browser chrome` | Chrome |
| `npx cypress run --spec cypress/e2e/test.cy.js` | Tek test |
| `npx cypress open --e2e --browser chrome` | Chrome GUI |

---

## 📦 9. Custom Command Örneği

`cypress/support/commands.js`

```js
Cypress.Commands.add("login", (email, password) => {
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('button[type=submit]').click();
});
```

---

## 🔌 10. File Upload Örneği

```js
import 'cypress-file-upload';

cy.get('#upload').attachFile('test.pdf');
```

---

## 🧠 11. VS Code Önerilen Eklentiler

- Cypress Snippets — Sık kullanılan Cypress komutları için kısa yollar.
- Cypress Fixture IntelliSense — Fixtures dosyalarını kolay çağırmayı sağlar.
- ES6 Mocha Snippets — describe, it, hook'lar için hızlı tamamlama.
- Bracket Pair Colorization — Parantez, blok gibi kod yapılarını renkli gösterir.
- Postman - API’leri ayrıca bir Postman açmaya gerek duyamadan hızlıca test etmek ve doğrulamak için kullanılır.


## 12. ✅ Kurulum Doğrulama Kontrol Listesi

Bu bölüm, Cypress test ortamının yerel makinede doğru şekilde
hazırlandığını hızlıca doğrulamak için referans olarak kullanılmalıdır.

- [ ] Node.js ve npm yüklü
- [ ] Proje dizini oluşturuldu
- [ ] `package.json` dosyası mevcut
- [ ] Cypress `devDependency` olarak kuruldu
- [ ] `npx cypress open` komutu sorunsuz çalışıyor
- [ ] Varsayılan örnek dosyalar temizlendi
- [ ] Gerekli eklentiler kuruldu (XPath, Faker, iFrame, File Upload)
- [ ] VS Code uzantıları yüklendi
- [ ] `cypress.config.js` temel ayarları içeriyor
- [ ] İlk test dosyası yazıldı ve başarıyla çalıştırıldı

---

# 🚀 Cypress Quick Start Guide (First Run)

This document is a step-by-step guide for starting a new project with Cypress, completing the basic setup, and running your first tests.
It is specifically designed as a clean, fast, and practical starting guide for users who work with **VS Code** and are trying **Cypress** for the first time.

> 🎯 Goal: Set up the project → Run Cypress → Install required plugins → Be ready to write tests

---

## 1. Prerequisites

To use Cypress, the following must be installed on your system:

1. **Node.js**

   * Check the supported versions and operating system requirements in the official Cypress documentation.

2. A package manager: **npm** (or yarn / pnpm)

   * npm, which comes with Node.js, is usually sufficient.

---

## 📁 2. Create a Project

Terminal / VS Code Terminal:

```bash
mkdir TestAutomationWithCypress
cd TestAutomationWithCypress
npm init -y
```

Example of the automatically generated **package.json** file:

```json
{
  "name": "cypress",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}
```

---

## ⚙️ 3. Install Cypress

```bash
npm install --save-dev cypress
```

Check the installed version:

```bash
npx cypress -v
npm show cypress version
```

Open the Cypress Test Runner:

```bash
npx cypress open
```

> In the opened screen:
>
> * Select **E2E Testing**
> * Generate the project file structure
> * Choose **Chrome** as the browser

---

## 🧱 4. Recommended Folder Structure

```
cypress/
 ├── e2e/
 ├── fixtures/
 ├── support/
 │    ├── commands.js
 │    └── e2e.js
 ├── downloads/
 ├── screenshots/

cypress.config.js
package.json
.gitignore
```

> 📌 You can safely **delete the example files** inside `cypress/e2e`

---

## 🔧 5. cypress.config.js Configuration

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.site.com",
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 12000,
    retries: 2,
    chromeWebSecurity: false
  }
});
```

---

## 🧩 6. Required Plugins

| Plugin      | Installation                         | Usage                                     |
| ----------- | ------------------------------------ | ----------------------------------------- |
| Faker       | `npm install @faker-js/faker`        | `import { faker } from '@faker-js/faker'` |
| XPath       | `npm install -D cypress-xpath`       | `import 'cypress-xpath'`                  |
| Iframe      | `npm install -D cypress-iframe`      | `cy.frameLoaded()`                        |
| File Upload | `npm install -D cypress-file-upload` | `cy.attachFile()`                         |

### Enable XPath

`cypress/support/e2e.js`

```js
import 'cypress-xpath';
```

---

## 🧪 7. Basic Cypress Commands

```js
cy.go('back');
cy.go('forward');
cy.reload();
```

---

## 🖥️ 8. Cypress CLI Usage

| Command                                         | Description        |
| ----------------------------------------------- | ------------------ |
| `npx cypress open`                              | GUI mode           |
| `npx cypress run`                               | Headless execution |
| `npx cypress run --browser chrome`              | Run in Chrome      |
| `npx cypress run --spec cypress/e2e/test.cy.js` | Run a single test  |
| `npx cypress open --e2e --browser chrome`       | Chrome GUI mode    |

---

## 📦 9. Custom Command Example

`cypress/support/commands.js`

```js
Cypress.Commands.add("login", (email, password) => {
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('button[type=submit]').click();
});
```

---

## 🔌 10. File Upload Example

```js
import 'cypress-file-upload';

cy.get('#upload').attachFile('test.pdf');
```

---

## 🧠 11. Recommended VS Code Extensions

* **Cypress Snippets** — Shortcuts for commonly used Cypress commands.
* **Cypress Fixture IntelliSense** — Easy access to fixture files.
* **ES6 Mocha Snippets** — Fast autocomplete for describe, it, and hooks.
* **Bracket Pair Colorization** — Highlights brackets and code blocks.
* **Postman** — Quickly test and validate APIs without opening a separate Postman app.

---


## 12. ✅ Installation Verification Checklist

This section is intended to be used as a quick reference to verify that the Cypress test environment has been correctly set up on the local machine.
- [ ]  Node.js and npm installed
- [ ]  Project directory created
- [ ] `package.json` file exists
- [ ] Cypress installed as a `devDependency`
- [ ] `npx cypress open` runs without issues
- [ ] Default example files removed
- [ ] Required plugins installed (XPath, Faker, iFrame, File Upload)
- [ ] VS Code extensions installed
- [ ] `cypress.config.js` contains the basic configuration
- [ ] First test file written and executed successfully

