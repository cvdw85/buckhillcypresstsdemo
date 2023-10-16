import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://pet-shop.buckhill.com.hr/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
