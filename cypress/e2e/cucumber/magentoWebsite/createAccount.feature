Feature: The user should be able to Create New Customer Account functionality

    The user should be able to able to Create New Customer Account


    Scenario: TC2 Create New Customer Account
        Given The user navigated to magento website
        When The user click on create account button
        And The user fill First Name 
        And The user fill Last Name
        And The user fill Email
        And The user fill Password
        And The user fill Confirm Password
        And The user click on Create an account button
        Then The account successfully created
