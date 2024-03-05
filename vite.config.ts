import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src', 'app.tsx'),
      global: path.resolve(__dirname, 'src', 'config', 'index.ts'),
      css: path.resolve(__dirname, 'src', 'theme', 'css', 'index.css'),
      theme: path.resolve(__dirname, 'src', 'theme'),
      component: path.resolve(__dirname, 'src', 'component'),
      navbar: path.resolve(__dirname, 'src', 'component', 'index.ts'),
      page: path.resolve(__dirname, 'src', 'page'),
      withroot: path.resolve(__dirname, 'src', 'withroot.tsx'),
    },
  },
})
