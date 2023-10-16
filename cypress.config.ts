import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://pet-shop.buckhill.com.hr/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      CLIENT_USERNAME: "dion.west@example.org",
      CLIENT_PASSWORD: "userpassword",
      ADMIN_USERNAME: "admin@buckhill.co.uk",
      ADMIN_PASSWORD: "admin"
    },
  },
});
