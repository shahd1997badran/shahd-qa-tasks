/// <reference types ="cypress" />
describe('',()=>{
    it.only('',()=>{
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
        cy.fixture("./example.json").then((data)=>{
            cy.login(data.email,data.password)
        })
        cy.get("#nopSideBarPusher").click();
        cy.get(".nav-sidebar > li:nth-child(2) > a").click();
        cy.contains("Products").click({force: true});
        cy.contains("Add new").click();
        cy.get("#Name").clear().type("Laptop123");
        cy.get("#product-info .card-tools button").click()
        cy.wait(500)
        cy.get("#product-price-area input").last().clear({force:true}).type("3000",{force:true});
        cy.get("#product-info").find(".fa-plus").parent().click();
        cy.get("[name=save]").click();
        cy.get(".alert-success").should("contain","The new product has been added successfully.")
        cy.get("#SearchProductName").type("Laptop123");
        cy.get("#search-products").click()
        cy.get("#products-grid tbody tr").should("contain","Laptop123").and("contain","3000")
        // Delete the searched product 
        cy.get(".dataTable .sorting_disabled .mastercheckbox").click({ multiple: true,force: true });
        cy.get("#delete-selected").click();
        cy.get("#delete-selected-action-confirmation-submit-button").click();
        cy.get("#products-grid").find("tr td").should("contain","No data available in table");


    })
   
})