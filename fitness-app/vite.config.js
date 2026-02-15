import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";

dotenv.config();

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env);
  return {
     plugins: [react()],
    server: {
      proxy: {
        '/auth': {
          target: env.VITE_BACKEND_URL || "http://localhost:8080",
          changeOrigin: true,
          secure: false
       }
     }
    }
  }
})
