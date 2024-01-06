class createAccountActions{
    clickOnCreateAccountButton(){
        cy.contains("a","Create an Account").click();
        return this;
    }
    typeInFirstNameInputField(firstName){
        cy.get("#firstname").clear().type(firstName);
        return this;

    }
    typeInLasttNameInputField(lastName){
        cy.get("#lastname").clear().type(lastName);
        return this;

    }
    typeInEmailInputField(email){
        cy.wait(2000);
        cy.get("#email_address").clear().type(email);
        return this;

    }
    typeInPasswordInputField(password){
        cy.get("#password").clear().type(password);
        return this;

    }
    typeInConfirmPasswordInputField(confirmPassword){
        cy.get("#password").clear().type(confirmPassword);
        return this;

    }
    typeInPasswordInputField(password){
        cy.get("#password-confirmation").clear().type(password);
        return this;

    }
    clickOnCreateAnAccountButton(){
        cy.get("[title='Create an Account']").click();
        return this;
    }
}
export default createAccountActions;