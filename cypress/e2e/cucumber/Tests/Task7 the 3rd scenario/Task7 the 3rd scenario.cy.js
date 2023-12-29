import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to the website",()=>{
    cy.visit("https://admin-demo.nopcommerce.com/admin/");
});

Then("The user should log-in to the website",()=>{
   cy.get(".login-button").click();
});

Given("The user click on SideBarPusher",()=>{
    cy.wait(1500);
    cy.get("#nopSideBarPusher").click();
});

Given("The user choose promotions area",()=>{
    cy.wait(1500);
    cy.get(".nav-sidebar > li:nth-child(5) > a").click();
});

Given("The user choose Campaigns option",()=>{
    cy.wait(1500);
    cy.contains("Campaigns").click({force: true});
});

When("The user click at Add new button",()=>{
    cy.wait(1500);
    cy.contains("Add new").click();
});
When("The user fill Name",()=>{
    cy.get("#Name").type("shahd");

});
When("The user fill Subject",()=>{
    cy.get("#Subject").type("task");

});
When("The user fill Body",()=>{
    cy.get("#Body").type("bla bla bla");

});
When("The user fill Planned date of sending",()=>{
    cy.get(".k-i-calendar").click();
    cy.wait(1000);
    cy.contains("30").click();
    cy.wait(1000);
    cy.get(".k-i-clock").click();
    cy.get("#DontSendBeforeDate_timeview > li:nth-child(6)").click();
    cy.wait(3000);


});
When("The user select Limited to store",()=>{
    cy.get("#StoreId").select("Test store 2");

});
When("The user select Limited to customer role",()=>{
    cy.get("#CustomerRoleId").select("Registered");

});
When("The user click on save button",()=>{
    cy.contains("button","Save").click();

});
Then("The new campaigns has been added successfully message appear",()=>{
    cy.get(".alert-success").should("contain","The new campaign has been added successfully.");
    cy.wait(3000);

});