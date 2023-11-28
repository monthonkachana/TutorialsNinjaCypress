const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      sccreenshotOnRunFailure : true,
      ignoreVideos : true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  e2e: {
    
    setupNodeEvents(on, config) {


    },
  },
});

