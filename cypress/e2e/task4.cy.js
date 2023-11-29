
/// <reference types ="cypress



describe("Actions",()=>{

    it("test case",()=>{
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get("#search").type("shirt"+"{enter}");
        cy.get(".products .list li").first().click();
        cy.get(".swatch-attribute.size").contains("M").click();
        cy.get(".swatch-attribute.color .clearfix [option-label=Orange]").click();
        cy.get("input[type=number]").clear().type(3);
        cy.get("button[type=submit]").click({ multiple: true ,force: true});

        

    })
    

})
