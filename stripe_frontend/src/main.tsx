import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// import { defineConfig } from 'vite'
// import dotenv from 'dotenv'

// dotenv.config() // load env vars from .env


// import {loadEnv} from "vite"
// console.log(REACT_APP_STRIPE_KEY)

// import * as dotenv from "dotenv";
// dotenv.config({ path: '/.env' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
