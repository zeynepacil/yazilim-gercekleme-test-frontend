import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('kullanici ana sayfayi acar', () => {
  cy.visit('/'); 
});

When('sayfa yuklenir', () => {
  cy.wait(1000); // Burayı 1 saniye yaptım
});

Then('kullanici blog yazilarinin listesini gorur', () => {
  cy.get('.blog-listesi').should('be.visible');
  
  // VİDEODA GÖRÜNMESİ İÇİN 2 SANİYE BEKLE
  cy.wait(2000); 
});