import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GhostPepper } from './GhostPepper'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GhostPepper />
    </BrowserRouter>
  </React.StrictMode>
)
