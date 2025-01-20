import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PaginaBase from './Pages/PaginaBase/index.jsx'
import './index.css'
import Approutes from './routes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Approutes />
  </StrictMode>,
)
