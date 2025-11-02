import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ninja-repair-empire/',
  plugins: [react()],
})
