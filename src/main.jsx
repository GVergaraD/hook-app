// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HooksApp from './HooksApp.jsx'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <HooksApp/>
  </BrowserRouter>
  // <StrictMode>
  // </StrictMode>,
)
