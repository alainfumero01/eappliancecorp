import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  build: {
    outDir: isSsrBuild ? 'dist/server' : 'dist',
  },
}))
