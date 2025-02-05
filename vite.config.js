import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { glob } from "glob";

async function globHtmlFiles(pattern) {
  const files = await glob(pattern);  // 使用 await
  const entries = {};
  files.forEach(file => {
    const name = file.replace(/^src\/(.*?)\.html$/i, "$1");
    entries[name] = file;
  });
  return entries;
}

export default defineConfig(async () => ({
  plugins: [
    ViteEjsPlugin((viteConfig) => ({
      root: viteConfig,
      domain: "example.com",
      title: "My Vue Project!",
    })),
  ],
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: await globHtmlFiles("src/**/*.html"), // 這裡要加 await
    },
  },
  base: "./",
  root: "src",
}));
