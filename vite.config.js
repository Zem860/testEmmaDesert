import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { glob } from "glob";

async function globHtmlFiles(pattern) {
  const files = await glob(pattern);
  const entries = {};
  files.forEach((file) => {
    const name = file.replace(/^src\/(.*?)\.html$/i, "$1");
    entries[name] = file;
  });
  return entries;
}

export default defineConfig(async () => ({
  plugins: [
    ViteEjsPlugin({
      domain: "example.com",
      title: "My Vite Project!",
    }),
  ],
  server: {
    open: "/index.html",
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: await globHtmlFiles("src/**/*.html"),
    },
  },
  base: "/testEmmaDesert/",  // 👈 修改這行為 GitHub Pages 的 repo 名稱
  root: "src",
}));
