 
describe('тестирование формы логина и пароля', function () {
    
    it('позитивная авторизация', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('');
        cy.get('#pass').type('');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
         })

    	
    it('восстановление пароля', function () {
    	cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();
          })

    it('ввести неверный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('');
        cy.get('#pass').type('');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
        })

    it('ввести неверный логин', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('');
        cy.get('#pass').type('');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
        })

    it('ввести логин без @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('');
        cy.get('#pass').type('');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        })

    it('строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('');
        cy.get('#pass').type('');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
        })
        


    })





