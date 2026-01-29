import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import TopToScroll from './components/scrolltotop/TopToScroll.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <TopToScroll />
      <App />
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
)
