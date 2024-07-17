class login {
    // Logout after registration
    Confirmlogout()
    {
        cy.get('.ico-logout').click();
        
    }
    // Login
    clicklogin()
    {
        cy.get('.ico-login').click();
    }
    FillEmailFieldlogin(name)
    {
        cy.get('#Email').type(name);
    }
    FillPasswordFieldlogin(name)
    {
        cy.get('#Password').type(name);
    }
    Confirmlogin()
    {
        cy.get('form > .buttons > .button-1').click();
        cy.wait(2000);
        //assert
        cy.get('.ico-account').click();
        cy.contains("My account - Customer info"); 
       }


     
}
export default login;