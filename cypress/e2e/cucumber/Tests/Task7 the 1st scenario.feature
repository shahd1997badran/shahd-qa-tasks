
Feature: Task7 the first scenario

    The user should be able to  Add a new discount Under the promotions area
    @focus
    Scenario: TC1 Add a new discount
        Given The user navigated to the website
        Then The user should log-in to the website 
        Given The user click on SideBarPusher
        And The user choose promotions area
        And The user choose Discounts option
        When The user click at Add new button
        And The user fill Name
        And The user choose Discount type
        And The user Use percentage
        And The user fill Discount percentage
        And The user fill Coupon code
        And The user click on save button
        Then The new discount has been added successfully message appear







   
    
    
