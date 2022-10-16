import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
    build: {
      emptyOutDir: true,
      outDir: "../build",
    },
    plugins: [
      createHtmlPlugin({
        minify: true,
        entry: "index.tsx",
      }),
      react({
        include: "**/*.{jsx,tsx}",
      }),
      viteStaticCopy({
          targets: [{
              src: "blog_posts/*",
              dest: "blog_posts"
          }]
      }),
    ],
    preview: {
      port: 5173,
    }
});
