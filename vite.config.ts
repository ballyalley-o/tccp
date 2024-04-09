import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src', 'app.tsx'),
      auth: path.resolve(__dirname, 'src', 'auth'),
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
      schema: path.resolve(__dirname, 'src', 'schema'),
      store: path.resolve(__dirname, 'src', 'store'),
      slice: path.resolve(__dirname, 'src', 'store', 'slice'),
      authEndpoint: path.resolve(__dirname, 'src', 'store', 'slice', 'auth', 'endpoint.ts'),
      route: path.resolve(__dirname, 'src', 'route'),
      page: path.resolve(__dirname, 'src', 'page'),
      withroot: path.resolve(__dirname, 'src', 'withroot.tsx'),
      util: path.resolve(__dirname, 'src', 'util'),
      _mock: path.resolve(__dirname, 'src', '_mock')
    }
  }
})
