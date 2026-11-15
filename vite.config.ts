import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Duplicates dist/index.html into 404.html and static route folders so direct links
 * and refreshes on GitHub Pages return 200 without losing the client-side route.
 */
function githubPagesSpaFallback(): Plugin {
  const routes = ["work", "about", "cv", "contact"];
  return {
    name: "github-pages-spa-fallback",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexHtml = path.join(distDir, "index.html");
      if (!fs.existsSync(indexHtml)) return;

      fs.copyFileSync(indexHtml, path.join(distDir, "404.html"));
      for (const route of routes) {
        const routeDir = path.join(distDir, route);
        fs.mkdirSync(routeDir, { recursive: true });
        fs.copyFileSync(indexHtml, path.join(routeDir, "index.html"));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
});
