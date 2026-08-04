import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './Header.jsx'
import Introduction from './Introduction.jsx'
import AboutMe from './AboutMe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Introduction />} />
        <Route path='/about_me' element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
