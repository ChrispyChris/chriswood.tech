import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "../build",
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      entry: "index.tsx",
    },
    react({
      include: "**/*.{jsx,tsx}",
    }),
    ),
  ],
  preview: {
    port: 5173,
  }
});

