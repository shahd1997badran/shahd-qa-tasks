/// <reference types ="cypress" />


it("task",()=>{ 
    cy.visit("/checkout/#shipping"); 
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#search').clear('s');
    cy.get('#search').type('shirt{enter}');
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click(); 
    cy.get('#option-label-size-143-item-167').click();
    cy.get('.swatch-attribute.color > .swatch-attribute-options').click();
    cy.get('#option-label-color-93-item-57').click(); 
    cy.get('#product-addtocart-button > span').click();
    cy.wait(10000);
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').click();
    cy.wait(10000);
    /* ==== End Cypress Studio ==== */
    //#id selector
    cy.get('#customer-email');
    //[attribute=value] selector
    cy.get('[name="firstname"]');
    cy.get('[name="lastname"]');    
    cy.get('[name="company"]'); 
    cy.get('[name="street[0]"]') ;  
    cy.get('[name="street[1]"]') ;  
    cy.get('[name="street[2]"]') ;  
    cy.get('[name="city"]'); 
    cy.get('[name="region_id"]'); 
    cy.get('[name="postcode"]'); 
    cy.get('[name="country_id"]'); 
    cy.get('[name="telephone"]'); 
    cy.get('[name="ko_unique_1"]');
    cy.get('[name="ko_unique_2"]');
    //.class selector
    cy.get('.button.action.continue.primary').click();
    cy.wait(10000);









})