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

Given("The user choose Affiliates option",()=>{
    cy.wait(1500);
    cy.contains("Affiliates").click({force: true});
});

When("The user click at Add new button",()=>{
    cy.wait(1500);
    cy.contains("Add new").click();
});
When("The user fill First name",()=>{
    cy.get("#Address_FirstName").type("shahd");

});
When("The user fill Last name",()=>{
    cy.get("#Address_LastName").type("sleem");

});
When("The user fill Email",()=>{
    cy.get("#Address_Email").type("shahdbadran32@gmail.com");

});
When("The user fill Company",()=>{
    cy.get("#Address_Company").type("knowledge academy");

});
When("The user select Country",()=>{
    cy.get("#Address_CountryId").select("Palestine");
    cy.wait(1000);

});
When("The user select State / province",()=>{
    cy.get("#Address_StateProvinceId").select("Other");
    cy.wait(1000);

});
When("The user fill County / region",()=>{
    cy.get("#Address_County").type("palestine");

});
When("The user fill City",()=>{
    cy.get("#Address_City").type("nablus");


});
When("The user fill Address 1",()=>{
    cy.get("#Address_Address1").type("nablus");


});
When("The user fill Address 2",()=>{
    cy.get("#Address_Address2").type("qalqielia");


});
When("The user fill Zip / postal code",()=>{
    cy.get("#Address_ZipPostalCode").type("123321");


});
When("The user fill Phone number",()=>{
    cy.get("#Address_PhoneNumber").type("0592765396");


});
When("The user fill Fax number",()=>{
    cy.get("#Address_FaxNumber").type("456654")


});
When("The user fill Admin comment",()=>{
    cy.get("#AdminComment").type("nothing")


});
When("The user fill Friendly URL name",()=>{
    cy.get("#FriendlyUrlName").type("https://github.com/shahd1997badran/shahd-qa-tasks")


});
When("The user click on save button",()=>{
    cy.contains("button","Save").click();

});
Then("The new affiliates has been added successfully message appear",()=>{
    cy.get(".alert-success").should("contain","The new affiliate has been added successfully.");
    cy.wait(3000);

});
