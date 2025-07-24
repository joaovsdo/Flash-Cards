import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FlashCardApp from './FlashCardApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlashCardApp />
  </StrictMode>,
)
