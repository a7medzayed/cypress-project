class register
{
    ClickOnRegister()
    {
        cy.get('.ico-register').click();
    }

    FillUserNameField(name)
    {
        cy.get('#FirstName').type(name);
    }
    FillLastNameField(name)
    {
        cy.get('#LastName').type(name);
    }
    FillEmailField(name)
    {
        cy.get('#Email').type(name);
    }
    FillPasswordField(name)
    {
        cy.get('#Password').type(name);
    }
    FillConfirmPasswordField(name)
    {
        cy.get('#ConfirmPassword').type(name);
    }
  
    ConfirmRegister()
    {
        cy.get('#register-button').click();
        cy.wait(2000);
        cy.get('.result').should('contain', 'Your registration completed');
    }
}

export default register;