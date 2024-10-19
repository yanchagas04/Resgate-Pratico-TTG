import { useState } from 'react';
import logoPrincipal from '../assets/LogoVector.png';
import Header from '../Elements/Header';
import MostrarCSE from '../Elements/Admin/MostrarCSE';
import LogIn from '../Elements/Admin/LogIn';
const botao = 'bg-red-700 hover:bg-red-800 hover:scale-105 duration-150 ease-in text-white text-lg font-semibold font-[Inter] rounded-lg px-2 py-2'

function Admin() {
    const [type, setTipo] = useState('C');
    const [logged, setLogged] = useState(true);
    return (
            <div className={`flex flex-col justify-start w-full h-screen font-[Inter] ${logged ? 'gap-8' : 'gap-0'}`}>
                <header className="flex w-full h-fit items-center justify-center p-2 gap-4 bg-[#a42323]">
                    <img src={logoPrincipal} alt="Logo" className="w-12 h-12" />
                    <h1 className="text-2xl text-white text-center">PÁGINA DE ADMINISTRAÇÃO</h1>
                </header>
                {!logged && <LogIn />}
                {
                    logged && 
                    <>
                        <div className='w-full flex flex-row justify-center items-center gap-4'>
                            <button type="button" className={botao} onClick={() => setTipo('C')}>Capacitações</button>
                            <button type="button" className={botao} onClick={() => setTipo('S')}>Serviços</button>
                            <button type="button" className={botao} onClick={() => setTipo('E')}>Equipamentos</button>
                        </div>
                        <MostrarCSE tipo={type} />
                    </>
                }
            </div>
    )
}

export default Admin;