import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),   // đặt riêng, KHÔNG nằm trong babel
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']]
      }
    }),
  ],
})
