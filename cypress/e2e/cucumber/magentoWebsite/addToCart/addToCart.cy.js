import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../pageObjects/shared/actions.cy";
import addToCartActions from "../../../../pageObjects/addToCartPage/actions.cy";
import addToCartAssertions from "../../../../pageObjects/addToCartPage/assertions.cy";


const sharedAction = new sharedActions();
const addToCartAction = new addToCartActions();
const addToCartassertion = new addToCartAssertions();

Given("The user navigated to magento website",()=>{
    sharedAction.openMagentoWebsite();

});
When("The user type in  search field",()=>{
    addToCartAction.typeInSearchInputField("shirt");

});
When("The user choose any product",()=>{
    addToCartAction.chooseYourProduct();

});
When("The user choose size of the product",()=>{
    addToCartAction.chooseSizeOfTheProduct();
});
When("The user choose color of the product",()=>{
    addToCartAction.chooseColorOfTheProduct();
});
When("The user choose quantity of the product",()=>{
    addToCartAction.chooseQuantityOfTheProduct("3");
});
When("The user click on add to cart button",()=>{
    addToCartAction.clickOnAddToCartButton();
});
Then("The product will be added successfully",()=>{
    //cy.get(".message-success").should("contain","You added Radiant Tee to your shopping cart");
    addToCartassertion.checkIfTheProductAddedSuccessfully("3");

});