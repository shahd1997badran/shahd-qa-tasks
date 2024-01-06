class addToCartAssertions{
    checkIfTheProductAddedSuccessfully(counter){
        cy.get(".counter-number").should("contain",counter);
        //cy.get(".counter-number").should("be.visible");
    }

}
export default addToCartAssertions;