import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GalleryProvider } from './lib/GalleryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GalleryProvider>
      <App />
    </GalleryProvider>
  </StrictMode>
)
