import register from '../../PageObjects/RegisterPage.cy';
import login from '../../PageObjects/loginpage.cy';
const {faker} = require ('@faker-js/faker');



describe('User Registration and Login', () => {
  const userData = require('../fixtures/users.json');
  const RandomEmail = faker.internet.email();
  userData.forEach((user) => {
    it(`should register and login user with email `, () => {
      // Registration
      cy.visit('https://demo.nopcommerce.com/');
      const rg = new register();
      const lo = new login ();
      rg.ClickOnRegister();
      rg.FillUserNameField(user.firstName);
      rg.FillLastNameField(user.lastName);
      rg.FillEmailField(RandomEmail);
      rg.FillPasswordField(user.password);
      rg.FillConfirmPasswordField(user.password);
      rg.ConfirmRegister();

      
      //cy.get('.ico-register').click();

      //cy.get('#FirstName').type(user.firstName);
      //cy.get('#LastName').type(user.lastName);
    //   cy.get('#Email').type(RandomEmail);
    //   cy.get('#Password').type(user.password);
    //   cy.get('#ConfirmPassword').type(user.password);
    //   cy.get('#register-button').click();
    //  cy.wait(2000);
    //  cy.get('.result').should('contain', 'Your registration completed');
lo.Confirmlogout();
lo.clicklogin()
lo.FillEmailFieldlogin(RandomEmail);
lo.FillPasswordFieldlogin(user.password);
lo.Confirmlogin();

      // Logout after registration

    //   cy.get('.ico-logout').click();

    //   // Login
    //  cy.get('.ico-login').click();
      
    //   cy.get('#Email').type(RandomEmail);
    //   cy.get('#Password').type(user.password);
    //   cy.get('form > .buttons > .button-1').click();
    //   cy.wait(2000);

    //   // Assert login success
    //   cy.get('.ico-account').click();
    //   cy.contains("My account - Customer info");

        });
  });
});