describe('Тестирование формы логина и пароля', function () {
    it('Вход при верном логине и пароле', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru'); // Ввод корректного e-mail
         cy.get('#pass').type('iLoveqastudio1'); // Ввод корректного пароля
         cy.get('#loginButton').click(); // Клик на кнопку "войти"
         cy.get('#messageHeader').should('be.visible'); // Сообщение видно для пользователя
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Содержание сообщения верно
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
     })
 })

 describe('Тестирование формы логина и пароля', function () {
    it('Работа восстановления пароля', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru'); // Ввод корректного e-mail
         cy.get('#forgotEmailButton').click(); // Нажать на кнопку "забыли пароль"
         cy.get('#mailForgot').type('andrey@yandex.ru'); // Ввод e-mail в поле
         cy.get('#restoreEmailButton').click(); // Клик на кнопку "Отправить код"
         cy.get('#messageHeader').should('be.visible'); // Сообщение видно пользователю
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Сообщение содердит верный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
     })
 })

 describe('Тестирование формы логина и пароля', function () {
    it('Вход при неверном пароле', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru'); // Ввод корректного e-mail
         cy.get('#pass').type('iLoveqastud'); // Ввод некорректного пароля
         cy.get('#loginButton').click(); // Клик на кнопку "войти"
         cy.get('#messageHeader').should('be.visible'); // Сообщение видно для пользователя
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Содержание сообщения верно
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
    })
})

describe('Тестирование формы логина и пароля', function () {
    it('Вход при неверном логине', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov1.ru'); // Ввод корректного e-mail
         cy.get('#pass').type('iLoveqastudio1'); // Ввод некорректного пароля
         cy.get('#loginButton').click(); // Клик на кнопку "войти"
         cy.get('#messageHeader').should('be.visible'); // Сообщение видно для пользователя
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Содержание сообщения верно
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
    })
})

describe('Тестирование формы логина и пароля', function () {
    it('Валидация логина', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('germandolnikov1.ru'); // Ввод корректного e-mail
         cy.get('#pass').type('iLoveqastudio1'); // Ввод некорректного пароля
         cy.get('#loginButton').click(); // Клик на кнопку "войти"
         cy.get('#messageHeader').should('be.visible'); // Сообщение видно для пользователя
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Содержание сообщения верно
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
    })
})

describe('Тестирование формы логина и пароля', function () {
    it('Приведение к нижнему регистру логина', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввод корректного e-mail
         cy.get('#pass').type('iLoveqastudio1'); // Ввод некорректного пароля
         cy.get('#loginButton').click(); // Клик на кнопку "войти"
         cy.get('#messageHeader').should('be.visible'); // Сообщение видно для пользователя
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Содержание сообщения верно
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден пользователю
    })
})