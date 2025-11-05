import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"; // "When" buraya eklendi

Given('kullanici ana sayfayi acar', () => {
  cy.visit('/'); 
});

// EKSİK OLAN VE ŞİMDİ EKLEDİĞİMİZ ADIM
When('sayfa yuklenir', () => {
  // Bu adımda özel bir şey yapmamıza gerek yok,
  // sayfanın yüklenmesini bekleyelim
  cy.wait(500); // 500 milisaniye bekle
});

Then('kullanici blog yazilarinin listesini gorur', () => {
  // Testin BAŞARISIZ olmasını istediğimiz nokta bu!
  cy.get('.blog-listesi').should('be.visible');
});