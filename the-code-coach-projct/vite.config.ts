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
      css: path.resolve(__dirname, 'src', 'theme', 'css', 'index.css'),
      theme: path.resolve(__dirname, 'src', 'theme', 'index.ts'),
      component: path.resolve(__dirname, 'src', 'component'),
      navbar: path.resolve(__dirname, 'src', 'component', 'index.ts'),
      page: path.resolve(__dirname, 'src', 'page'),
      withroot: path.resolve(__dirname, 'src', 'withroot.tsx'),
      // root: './App.jsx',
      // config: './config',
      // locale: path.resolve(__dirname, 'src', 'locale'),
      // route: path.resolve(__dirname, 'src', 'route'),
      // theme: path.resolve(__dirname, 'src', 'theme'),
      // util: path.resolve(__dirname, 'src', 'util'),
      // // @pages
      // dashboard: path.resolve(__dirname, 'src', 'pages', 'dashboard'),
      // customer: path.resolve(__dirname, 'src', 'pages', 'customer'),
      // machine: path.resolve(__dirname, 'src', 'pages', 'machine'),
      // document: path.resolve(__dirname, 'src', 'pages', 'document'),
    },
  },
})
