import { defineConfig } from 'vite'
import viteReact from "@vitejs/plugin-react"
import viteSvgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), viteSvgr()],
})
