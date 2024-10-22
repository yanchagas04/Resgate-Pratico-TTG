import './Styles/main.css'
import Router from './Elements/Router'
import { createContext, useContext, useState } from 'react';
import ContextCSE from './Classes/ContextCSE';
export const CSE_Context = createContext(new ContextCSE([], [], []));
import Home from './Pages/Home'
import HomePage from './Pages/HomePage'
import PaginaCursos from './Pages/PaginaCursos'
import PaginaServicos from './Pages/PaginaServicos'
import Footer from './Elements/Footer'
import Carrosel from './Elements/Carrosel'
import Responsive from './Elements/carrosel2'
function App() {
  const CSEcontext = useContext(CSE_Context);
  return (
    <CSE_Context.Provider value={CSEcontext}>
      <Router />
    </CSE_Context.Provider>
  )
}

export default App
