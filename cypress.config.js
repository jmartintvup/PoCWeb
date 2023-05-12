const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    retries: {
      "runMode": 3
    },
    specPattern: 'cypress/integration/**/*.spec.js',
    viewportWidth: 1920,
    viewportHeight: 1080,
    reporter: "cypress-junit-reporter",
    reporterOptions: {
      mochaFile: "reports/results-[hash].xml",
      toConsole: true
    }

  
  },
  
  
});
