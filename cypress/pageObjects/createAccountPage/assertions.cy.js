class createAccountAssertions{
    checkCretedOfTheAccount(message){
        cy.get(".message-success.success").should("contain",message);
        return this;
    }
}
export default createAccountAssertions;