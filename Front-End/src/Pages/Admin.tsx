import {useContext, useState } from 'react';
import logoPrincipal from '../assets/LogoVector.png';
import MostrarCSE from '../Elements/Admin/MostrarCSE';
import AdminAuth from '../api/auth/AdminAuth';
import { Link } from 'react-router-dom';
const botao = 'bg-red-700 hover:bg-red-800 hover:scale-105 duration-150 ease-in text-white text-lg font-semibold font-[Inter] rounded-lg px-2 py-2'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Usuario } from '../App';

const notificacaoSucesso = () => toast.success('Login efetuado com sucesso!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
const notificacaoErro = () => toast.error('Login ou senha incorretos!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });

function Admin() {
    const [type, setTipo] = useState('C');
    const user = useContext(Usuario);
    const [logged, setLogged] = useState(!user.notLogged());
    return (
            <div className={`flex flex-col justify-start w-full min-h-screen font-[Inter] ${logged ? 'gap-8' : 'gap-0'}`}>
                <header className="flex w-full h-fit items-center justify-center p-2 gap-4 bg-[#a42323]">
                    <Link to="/"><img src={logoPrincipal} alt="Logo" className="w-12 h-12" /></Link>
                    <h1 className="text-2xl text-white text-center">PÁGINA DE ADMINISTRAÇÃO</h1>
                    
                </header>
                {!logged && 
                    <div className="w-full h-screen flex bg-gray-300 justify-center">
                        <div className="min-w-96 w- h-full flex justify-center items-center">
                            <div className='w-full h-fit flex flex-col justify-center items-center bg-white drop-shadow-lg rounded-lg p-4 gap-4'>
                                <label htmlFor="usuario" className="w-full text-left">Usuário</label>
                                <input type="text" id="usuario" name="usuario" className='w-full bg-gray-200 border border-gray-300 rounded-md p-2' />
                                <label htmlFor="senha" className="w-full text-left">Senha</label>
                                <input type="password" id="senha" name="senha" className='w-full bg-gray-200 border border-gray-300 rounded-md p-2' />
                                <button className='w-full bg-green-700 hover:bg-green-800 duration-150 ease-in text-white text-lg font-semibold font-[Inter] rounded-lg px-2 py-2' onClick={async () => {
                                    const nome = (document.getElementById("usuario") as HTMLInputElement).value;
                                    const senha = (document.getElementById("senha") as HTMLInputElement).value;
                                    AdminAuth(nome, senha).then((resp) => {
                                        if (resp.id) {
                                            user.login(nome, senha);
                                            setLogged(true);
                                            notificacaoSucesso();
                                        } else {
                                            notificacaoErro();
                                        }
                                    })
                                }}>Entrar</button>
                            </div>
                        </div>
                    </div>
                }
                {
                    logged && 
                    <>
                        <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-4'>
                            <button className='flex flex-row w-fit bg-gray-500 justify-center items-center hover:scale-105 duration-150 ease-in text-white text-lg font-semibold font-[Inter] rounded-lg px-2 py-2' onClick={() => {
                                    user.logout();
                                    setLogged(false);
                                }}>Deslogar</button>
                            <button type="button" className={botao} onClick={() => setTipo('C')}>Capacitações</button>
                            <button type="button" className={botao} onClick={() => setTipo('S')}>Serviços</button>
                            <button type="button" className={botao} onClick={() => setTipo('E')}>Equipamentos</button>
                        </div>
                        <MostrarCSE tipo={type} />
                    </>
                }
                
                <ToastContainer />
            </div>
    )
}

export default Admin;