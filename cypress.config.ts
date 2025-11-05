import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    // Next.js projemizin ana adresi
    // (Next.js'i 'npm run dev' ile çalıştırdığımızda bu adreste açılır)
    baseUrl: "http://localhost:3000", 
    
    // Cypress'e .feature uzantılı dosyaları aramasını söylüyoruz
    specPattern: "cypress/e2e/**/*.feature", 
    
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      
      // Bu, .feature dosyalarını okumak için eklentiyi kurar
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Yeni konfigürasyonu geri döndür
      return config;
    },
  },
});