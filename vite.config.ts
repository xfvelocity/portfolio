import { defineConfig } from "vite";
import * as path from "path";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData(source, fp) {
          if (fp.endsWith("variables.scss"))
            return `@import "xf-cmpt-lib/dist/cmpt-lib-ts.css"; ${source}`;
          return `@import "@/assets/styles/variables.scss"; ${source}`;
        },
      },
    },
  },
});
