import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import pluginListBlogPosts from "../plugins/rollup-plugin-list-blog-posts";
import autoprefixer from "autoprefixer";

export default defineConfig({
    build: {
        emptyOutDir: true,
        outDir: "../public",
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer
            ]
        },
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
        pluginListBlogPosts({
            directory: "src/blog_posts/",
        }),
    ],
    preview: {
      port: 5173,
    }
});

