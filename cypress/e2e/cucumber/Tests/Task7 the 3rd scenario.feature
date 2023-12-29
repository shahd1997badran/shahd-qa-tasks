Feature: Task7 the third scenario


    The user should be able to Add new campaigns Under the promotions area
    

    Scenario: TC3 Add new campaigns
            Given The user navigated to the website 
            Then The user should log-in to the website 
            Given The user click on SideBarPusher
            And The user choose promotions area
            And The user choose Campaigns option
            When The user click at Add new button 
            And The user fill Name
            And The user fill Subject
            And The user fill Body
            And The user fill Planned date of sending
            And The user select Limited to store
            And The user select Limited to customer role
            And The user click on save button
            Then The new campaigns has been added successfully message appear
              
