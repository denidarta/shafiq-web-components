import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ShafiqWebComponents",
      fileName: (format) => `shafiq-web-components.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["lit", /^lit\/.*/],
      output: {
        globals: {
          lit: "Lit",
          "lit/decorators.js": "LitDecorators",
        },
      },
    },
  },
  plugins: [dts({ insertTypesEntry: true })],
});
