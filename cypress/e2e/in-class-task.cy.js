/// <reference types ="cypress" />
describe("",()=>{
    beforeEach(()=>{
        cy.visit("/");
        cy.get("#search").type("shirt {enter}");
        cy.get(".product-items li").first().click();
        cy.get(".swatch-option").contains("M").click().wait(1000);;
        cy.get(".swatch-option.color").last().click().wait(1000);;
        cy.get(".tocart").click();
        cy.wait(3000)
    });

    it("Verify that the search button is disabled by default ",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("#search").should("be.disabled");
    })
    it("Verify that the search button is disabled by default , and when the user types in the search bar it will be enabled .",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("#search").type("Shirt");
        cy.get("#search").should("be.enabled");

    })
    it("Verify that the user can add products to the shopping cart ",()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        
        cy.get("#search").type("shirt"+"{enter}");
        cy.get(".products .list li").first().click();
        cy.get(".swatch-attribute.size").contains("M").click();
        cy.get(".swatch-attribute.color .clearfix [option-label=Purple]").click();
        cy.get("input[type=number]").clear().type(3);
        cy.get("#product-addtocart-button").click();
        //cy.get(".counter-number").should("be.visible");
        cy.get(".counter-number").should("have.text","3");

    })
    it("Verify that the user can delete products from the shopping cart",()=>{
        cy.visit("/");
        cy.get("[title='Remove item']").click({force: true});
        cy.contains("span","OK").click({force: true});
        cy.get(".counter-number").should("have.text","0");
        cy.get(".subtitle").should("have.text","You have no items in your shopping cart.");

    })
    it.only("Verify that the user can update products from the shopping cart",()=>{
        cy.visit("/");
        cy.get(".showcart").click();
        cy.get(".primary .edit").click();
        //cy.get(".swatch-attribute.color .clearfix[option-label=Orange]").click();
        // cy.get("#product-updatecart-button").click();
    })


})