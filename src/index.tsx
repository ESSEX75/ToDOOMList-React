import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { GlobalStyle } from './styles'
import GlobalFonts from './assets/fonts/GlobalFonts'
//import "normalize.css";

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <BrowserRouter>
        <GlobalFonts />
        <GlobalStyle />
        <App />
    </BrowserRouter>
)
