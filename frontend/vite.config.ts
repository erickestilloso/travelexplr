import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), reactRefresh()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    css: {
        postcss: "./postcss.config.js",
    },
});
