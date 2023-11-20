/// <reference types ="cypress" />

describe ("test scenario",()=>{
    
    it ("test case",()=>{
       cy.visit("https://demo.productionready.io/#/");
       cy.contains("a","conduit");
       cy.contains("a","Home");
       cy.contains("a","Sign up");
       cy.contains("h1","conduit");
       cy.contains("p","A place to share your knowledge.");
       cy.contains("a","Global Feed");
       cy.contains("span","Read more...");
       cy.contains("p","Popular Tags");
       //heart icon
       cy.get("article-preview:first-child favorite-btn")
       cy.get(".tag-list").contains("codebaseShow");
       cy.get(".tag-list").contains("deserunt");

       //sign in page
       cy.contains("a","Sign in").click();
       cy.contains("h1","Sign in");
       cy.contains("a","Need an account");
       cy.get("[type=email]");
       cy.get("[type=password]");
       cy.contains("button","Sign in");

       //article in global feed
       cy.visit("https://demo.productionready.io/#/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863");
       cy.get(".container h1")
       //circle image
       cy.get(".banner .article-meta > a")
       cy.get(".banner .info a");
       cy.get(".banner .info span");
       cy.get(".banner follow-btn");
       cy.get(".banner favorite-btn");


       cy.get(".ng-binding p");
       cy.get(".tag-list li").first();
       cy.get(".tag-list li").last();




    })

})