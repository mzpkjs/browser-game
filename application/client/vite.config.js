import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import cssAutoImport from "vite-plugin-css-auto-import"
import inspectPlugin from "vite-plugin-inspect"


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        cssAutoImport(),
        inspectPlugin()
    ]
})
