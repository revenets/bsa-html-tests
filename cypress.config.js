const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    LAYOUT_URL: 'http://127.0.0.1:5500/works/hw-html-css/index.html'
  }
});
