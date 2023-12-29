Feature: Task7 the second scenario

    The user should be able to Add new affiliates Under the promotions area


Scenario: TC2 Add new affiliates
        Given The user navigated to the website
        Then The user should log-in to the website 
        Given The user click on SideBarPusher
        And The user choose promotions area
        And The user choose Affiliates option
        When The user click at Add new button  
        And The user fill First name
        And The user fill Last name
        And The user fill Email
        And The user fill Company
        And The user select Country
        And The user select State / province
        And The user fill County / region
        And The user fill City
        And The user fill Address 1
        And The user fill Address 2
        And The user fill Zip / postal code
        And The user fill Phone number
        And The user fill Fax number
        And The user fill Admin comment
        And The user fill Friendly URL name
        And The user click on save button
        Then The new affiliates has been added successfully message appear



     