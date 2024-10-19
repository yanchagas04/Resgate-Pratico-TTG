import { useState } from 'react';
import logoPrincipal from '../assets/LogoVector.png';
import Header from '../Elements/Header';
import MostrarCSE from '../Elements/Admin/MostrarCSE';
const botao = 'bg-red-700 hover:bg-red-800 hover:scale-105 duration-150 ease-in text-white text-lg font-semibold font-[Inter] rounded-lg px-4 py-2'

function Admin() {
    const [type, setTipo] = useState('C');
    return (
            <div className="flex flex-col items-center justify-center w-screen font-[Inter] gap-4">
                <header className="flex w-full items-center justify-center p-2 gap-4 bg-[#a42323]">
                    <img src={logoPrincipal} alt="Logo" className="w-12 h-12" />
                    <h1 className="text-2xl text-white text-center">PÁGINA DE ADMINISTRAÇÃO</h1>
                </header>
                <div className='w-fit flex flex-row justify-center items-center gap-4 p-4'>
                    <button type="button" className={botao} onClick={() => setTipo('C')}>Capacitações</button>
                    <button type="button" className={botao} onClick={() => setTipo('S')}>Serviços</button>
                    <button type="button" className={botao} onClick={() => setTipo('E')}>Equipamentos</button>
                </div>
                <MostrarCSE tipo={type} />
            </div>
    )
}

export default Admin;