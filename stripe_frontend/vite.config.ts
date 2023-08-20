import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config(); // load env vars from .env

// console.log(process.env)
// const x = Object.entries(process.env).reduce(function(a,b){
//   console.log(b)
//   a[b[0]]=b[1]
//   return a
// }, {})
// console.log((x))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: 
  {
    REACT_APP_STRIPE_KEY: `"${process.env.REACT_APP_STRIPE_KEY}"`,

  }
})
