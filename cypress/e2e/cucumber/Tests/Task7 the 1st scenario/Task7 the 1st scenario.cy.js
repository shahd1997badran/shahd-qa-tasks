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

Given("The user choose Discounts option",()=>{
    cy.wait(1500);
    cy.contains("Discounts").click({force: true});
});

When("The user click at Add new button",()=>{
    cy.wait(1500);
    cy.contains("Add new").click();
});

When("The user fill Name",()=>{
    cy.wait(1500);
    cy.get("#Name").type("Shahd");
});

When("The user choose Discount type",()=>{
    cy.wait(1500);
    cy.get("#DiscountTypeId").select(5).should("contain","Assigned to order subtotal");
});

When("The user Use percentage",()=>{
    cy.wait(1500);
    cy.get("#UsePercentage").click();
});
When("The user fill Discount percentage",()=>{
    cy.wait(1500);
    //cy.get("#DiscountAmount").clear({force: true}).type("5",{force: true})
    for(let i =0; i<2 ; i++){
        cy.get("[title='Increase value']").click({ multiple: true,force: true});
    }

});
When("The user fill Coupon code",()=>{
    cy.wait(1500);
    cy.get("#RequiresCouponCode").click();
    cy.get("#CouponCode").type("123321");

});
When("The user click on save button",()=>{
    cy.contains("button","Save").click();
    //cy.get("#alert-success").should("contain","The new discount has been added successfully.");
});
Then("The new discount has been added successfully message appear",()=>{
    cy.get(".alert-success").should("contain","The new discount has been added successfully.");
    cy.wait(3000);
})