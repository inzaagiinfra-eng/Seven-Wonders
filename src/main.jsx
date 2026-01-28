import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import TopToScroll from './components/scrolltotop/TopToScroll.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <App />
      <TopToScroll />
    </BrowserRouter>

  </StrictMode>
)
