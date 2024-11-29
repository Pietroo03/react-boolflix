import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MyContextData } from './context/MyContext.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <MyContextData >
    <StrictMode>
      <App />
    </StrictMode>
  </MyContextData>
)
