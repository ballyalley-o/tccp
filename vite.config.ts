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
      global: path.resolve(__dirname, 'src', 'config'),
      config: path.resolve(__dirname, 'src', 'config'),
      constant: path.resolve(__dirname, 'src', 'constant'),
      types: path.resolve(__dirname, 'src', 'types'),
      css: path.resolve(__dirname, 'src', 'theme', 'css', 'index.css'),
      theme: path.resolve(__dirname, 'src', 'theme'),
      hook: path.resolve(__dirname, 'src', 'hook'),
      component: path.resolve(__dirname, 'src', 'component'),
      navbar: path.resolve(__dirname, 'src', 'component', 'index.ts'),
      section: path.resolve(__dirname, 'src', 'section'),
      route: path.resolve(__dirname, 'src', 'route'),
      page: path.resolve(__dirname, 'src', 'page'),
      withroot: path.resolve(__dirname, 'src', 'withroot.tsx'),
      util: path.resolve(__dirname, 'src', 'util'),
      _mock: path.resolve(__dirname, 'src', '_mock'),
    },
  },
})
