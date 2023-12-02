/// <reference types ="cypress

 describe("task5",()=>{

    it("visibility",()=>{
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        cy.get("#firstname").should("be.visible");
        cy.get("#lastname").should("be.visible");
        cy.get("#email_address").should("be.visible");
        cy.get("#password").should("be.visible");
        cy.get("#password-confirmation").should("be.visible");
        cy.get("[title='Create an Account']").should("be.visible");
    })
    it("TC create account",()=>{
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        cy.get("#firstname").type("Shahd",{delay:200});
        cy.get("#lastname").type("Sleem",{delay:200});
        cy.get("#email_address").type("shahdbadran32@gmail.com",{delay:200});
        cy.get("#password").type("1Q2w3E4r5T#");
        cy.get("#password-confirmation").type("1Q2w3E4r5T#");
        cy.get("[title='Create an Account']").click();
    })

})