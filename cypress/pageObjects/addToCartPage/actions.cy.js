class addToCartActions{
    typeInSearchInputField(search){
        cy.get("#search").type(search+"{enter}");
    //cy.get(".counter-number").should("be.hidden");

    }
    chooseYourProduct(){
        cy.get(".products .list li").first().click();
    }
    chooseSizeOfTheProduct(){
        cy.get(".swatch-attribute.size").contains("M").click();

    }
    chooseColorOfTheProduct(){
        cy.get(".swatch-attribute.color .clearfix [option-label=Purple]").click();
    }
    chooseQuantityOfTheProduct(){
        cy.get("input[type=number]").clear().type(3);

    }
    clickOnAddToCartButton(){
        cy.get("button[type=submit]").click({ multiple: true,force: true });
    }


}
export default addToCartActions;