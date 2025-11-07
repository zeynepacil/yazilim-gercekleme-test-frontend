import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('kullanici vardiya sayfasini acar', () => {
  cy.visit('/vardiyalar');
  
  // SAYFA AÇILINCA 2 SANİYE BEKLE
  cy.wait(2000); 
});

Then('kullanici "Test Kullanıcısı" icin "Sabah Vardiyası" kaydini gorur', () => {
  cy.contains('Test Kullanıcısı')
    .parent() 
    .should('contain', 'Sabah Vardiyası');
    
  // VİDEODA GÖRÜNMESİ İÇİN 2 SANİYE DAHA BEKLE
  cy.wait(2000);
});