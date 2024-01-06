import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../../pageObjects/shared/assertions.cy";
import createAccountActions from "../../../../pageObjects/createAccountPage/actions.cy";
import createAccountAssertions from "../../../../pageObjects/createAccountPage/assertions.cy";
const email ="shahdsleem"+ Math.floor(Math.random()*100)+"@gmail.com";
const createAccountAction = new createAccountActions();
const createAccountAssertion = new createAccountAssertions();


const sharedAction = new sharedActions();
const sharedAssertion = new sharedAssertions();

Given("The user navigated to magento website", () => {
  sharedAction.openMagentoWebsite();
});
When("The user click on create account button", () => {
  createAccountAction.clickOnCreateAccountButton();
});

When("The user fill First Name", () => {
  createAccountAction.typeInFirstNameInputField("Shahd");
});
When("The user fill Last Name", () => {
  createAccountAction.typeInLasttNameInputField("Sleem")
});
When("The user fill Email", () => {
  createAccountAction.typeInEmailInputField(email);
});
When("The user fill Password", () => {
  createAccountAction.typeInPasswordInputField("123321Shahd@");
});
When("The user fill Confirm Password", () => {
  createAccountAction.typeInConfirmPasswordInputField("123321Shahd@");
});
When("The user click on Create an account button", () => {
  createAccountAction.clickOnCreateAnAccountButton();
});
Then("The account successfully created", () => {
  //Thank you for registering with Main Website Store.
  createAccountAssertion.checkCretedOfTheAccount("Thank you for registering with Main Website Store.");
  sharedAssertion.checkUrlEqualValue("https://magento.softwaretestingboard.com/customer/account/");
  sharedAssertion.checkPageTitleContainValue("My Account");

  //cy.url().should("eq","https://magento.softwaretestingboard.com/customer/account/");
  //cy.get(".page-title").should("contain","My Account");

});
