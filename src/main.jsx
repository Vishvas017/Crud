import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './Product'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Product/>
  </StrictMode>,
)
