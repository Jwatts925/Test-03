import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "assets",
    sourcemap: false,
    minify: "oxc",
    lib: {
      entry: path.resolve("src/ifc-viewer.js"),
      formats: ["es"],
      fileName: () => "ifc-viewer-app.js",
    },
    rollupOptions: {
      output: {
        assetFileNames: "ifc-viewer-[name][extname]",
      },
    },
  },
});
