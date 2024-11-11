import React from 'react'
import Inicio from './components/Inicio/inicio.jsx'
import Sobre from './components/Sobre/sobre.jsx'
import Contatos from './components/Contatos/contatos.jsx'
import './global.scss'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <nav>
      <ul>
        <li>
        <Link to="/">Inicio</Link>
        </li>
        <li>
        <Link to="/sobre">Sobre</Link>
        </li>
        <li>
        <Link to="/contatos">Contatos</Link>
        </li>
      </ul>
    </nav>
    <Routes>

      <Route path="/" element={<Inicio/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/contatos" element={<Contatos/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App