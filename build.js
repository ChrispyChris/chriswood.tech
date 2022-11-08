#!/usr/bin/env node

import { build } from "esbuild";

build({
    entryPoints: ["server/server.ts"],
    bundle: false,
    format: "esm",
    minify: true,
    outfile: "server-build/server.js",
    platform: "node",
}).catch(() => process.exit(1));

console.log("Server build succeeded.");
