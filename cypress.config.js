const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    overwrite: false,
    html:false,
    json:true,
    //embeddedVideos: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  screenshotOnRunFailure: true,
  video: true,
  screenshotsFolder: "mochawesome-report/assets",
  e2e: {
    testIsolation: false,
    viewportHeight: 1400,
    viewportWidth: 1600,
    baseUrl: "https://demoqa.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require("mochawesome/plugin")(on);
      //return config;
    },
  },
});
