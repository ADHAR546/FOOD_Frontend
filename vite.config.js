import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "https://food-backend-6cqs.onrender.com/api",
    },
  },
  esbuild: {
    jsx: "automatic", // ✅ Use 'automatic' or 'classic', not boolean
  },
});
