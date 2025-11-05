Feature: Blog Ana Sayfasi

  Scenario: Kullanici ana sayfayi ziyaret ettiginde blog yazilarini gorur
    Given kullanici ana sayfayi acar
    When sayfa yuklenir
    Then kullanici blog yazilarinin listesini gorur