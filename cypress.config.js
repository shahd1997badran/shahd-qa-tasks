///<reference.....
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: { 
    
    specPattern: "**/*.feature",
    setupNodeEvents(on, config){
      on("file:preprocessor", cucumber());
      // implement node event listeners here
    },
    baseUrl:"https://magento.softwaretestingboard.com",
    // viewportHeight:660,
    // viewportWidth:550,
    experimentalStudio:true,

  },
});
