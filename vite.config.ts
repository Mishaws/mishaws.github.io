import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function githubPagesFallback(): Plugin {
  return {
    name: "github-pages-fallback",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexHtml = path.join(distDir, "index.html");
      if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, path.join(distDir, "404.html"));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), githubPagesFallback()],
});
