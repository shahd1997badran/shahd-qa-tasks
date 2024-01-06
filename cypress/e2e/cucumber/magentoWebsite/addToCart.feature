Feature: The user should be able to add to cart functionality

    The user should be able to add to cart


    Scenario: TC3 Add To Cart
        Given The user navigated to magento website
        When The user type in  search field 
        And The user choose any product
        And The user choose size of the product
        And The user choose color of the product
        And The user choose quantity of the product
        And The user click on add to cart button
        Then The product will be added successfully