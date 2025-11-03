import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ensure production builds don't use eval
    minify: "esbuild", // Use esbuild instead of terser (more CSP-friendly)
    target: "esnext",
    // Ensure no eval is used in production
    rollupOptions: {
      output: {
        // Use function expressions instead of eval
        format: "es",
      },
    },
  },
  // CSP configuration for production
  ...(mode === "production" && {
    define: {
      // Ensure no eval usage in production
      "process.env.NODE_ENV": '"production"',
    },
  }),
}));
