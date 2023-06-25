import { resolve } from "path"
import { defineConfig } from 'vite'
import { createVuePlugin as vue } from "vite-plugin-vue2";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})