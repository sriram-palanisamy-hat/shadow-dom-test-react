/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // include an index.html
      output: {
        entryFileNames: "internal-app.js", // single entry JS
        chunkFileNames: "internal-app-[hash].js",
        assetFileNames: "[name]-[hash].[ext]",
      },
    },
  },
});
