import './Styles/main.css'
import Router from './Elements/Router'
import { createContext, useContext, useState } from 'react';
import ContextCSE from './Classes/ContextCSE';
export const CSE_Context = createContext(new ContextCSE([], [], []));

function App() {
  const CSEcontext = useContext(CSE_Context);
  return (
    <CSE_Context.Provider value={CSEcontext}>
      <Router />
    </CSE_Context.Provider>
  )
}

export default App
