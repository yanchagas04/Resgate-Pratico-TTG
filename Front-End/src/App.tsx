import './Styles/main.css'
import Router from './Elements/Router'
import { createContext, useContext } from 'react';
import ContextCSE from './Classes/ContextCSE';
import User from './Classes/User';
export const CSE_Context = createContext(new ContextCSE([], [], []));
export const Usuario = createContext(new User());

function App() {
  const CSEcontext = useContext(CSE_Context);
  const user = useContext(Usuario);
  return (
    <CSE_Context.Provider value={CSEcontext}>
      <Usuario.Provider value={user}>
        <Router />
      </Usuario.Provider>
    </CSE_Context.Provider>
  )
}

export default App
