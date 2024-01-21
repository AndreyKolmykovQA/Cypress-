describe('Тестирование формы логина и пароля', function () {
    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('a.kolmykov1@yandex.ru'); // Ввод корректного логина
         cy.get('#password').type('Byathyj12'); // Ввод Корректного пароля
         cy.get('.auth__button').click(); // Клик на кнопку "Войти"
         cy.get('.header__btns > [href="/shop"]').click(); // Клик на кнопку "Магазин"
         cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // Выбор незанятого аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // Ввод номера карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1124'); // Ввод срока карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввод cvv
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ANDREY KOLMYKOV'); // Ввод имени и фамилии
         cy.get('.pay-btn').click(); // Клик на кнопку "Оплатить"
         cy.get('#cardnumber').type('56456'); // Ввод кода из смс
         cy.get('.payment__submit-button').click(); // Клик на кнопку "отправить"
         cy.get('.payment__adv').click(); // Клик на кнопку "Вернуться в магазин"
    })
})
   