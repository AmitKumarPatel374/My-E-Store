import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ProductContext from './Context/ProductContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <ProductContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </ProductContext>
)
