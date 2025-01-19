const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    defaultCommandTimeout: 15000, // Set timeout to 15 seconds
    BACKTRACE_DISABLED: true, // Disables Backtrace error reporting
    
    baseUrl: 'https://www.saucedemo.com/',
    env:{
      userstg: "user stg",
      userprod: "user prod" 
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 650,
    viewportWidth: 950,
    defaultCommandTimeout: 4500,
    screenshotOnRunFailure: false
  },
  chromeWebSecurity: false
});
