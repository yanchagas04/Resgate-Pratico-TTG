import { Link } from "react-router-dom";
import logoPrincipal from '../../assets/LogoVector.png';
import { useState } from "react";
import { criarCurso } from "../../api/cursosAPI";
import { criarServico } from "../../api/servicosAPI";
import { criarEquipamento } from "../../api/equipamentosAPI";
const botao = 'bg-red-700 hover:bg-red-800 hover:scale-105 duration-150 ease-in text-white text-lg font-semibold font-[Inter] rounded-lg px-2 py-2'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notificacaoSucesso = () => toast.success('Criado com sucesso!', {
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
const notificacaoErro = (response: any) => toast.error(`Erro ao criar! ${response === 400 ? 'Verifique os campos e tente novamente.' : 'Erro no servidor'}`, {
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

export default function CriadorCSE() {
    const [type, setTipo] = useState('C');
    const tipo = type === 'C' ? 'Capacitações' : type === 'S' ? 'Serviços' : 'Equipamentos';
    return (
        <div className="flex flex-col justify-start w-full h-screen font-['Inter'] gap-4">
            <header className="flex w-full h-fit items-center justify-center p-2 gap-4 bg-[#a42323]">
                    <Link to="/"><img src={logoPrincipal} alt="Logo" className="w-12 h-12" /></Link>
                    <h1 className="text-2xl text-white text-center">PÁGINA DE ADMINISTRAÇÃO</h1>
            </header>
            <main className="flex flex-col justify-center items-center font-['Inter'] gap-4">
                <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-4'>
                    <Link to="/Admin">
                        <button className='flex flex-row justify-center items-center bg-gray-500 hover:bg-gray-600 hover:scale-105 duration-150 ease-in text-white text-lg font-semibold font-[Inter] rounded-lg px-2 py-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                            </svg>
                            Voltar
                        </button>
                    </Link>
                    <button type="button" className={botao} onClick={() => setTipo('C')}>Capacitações</button>
                    <button type="button" className={botao} onClick={() => setTipo('S')}>Serviços</button>
                    <button type="button" className={botao} onClick={() => setTipo('E')}>Equipamentos</button>
                </div>
                <h1 className="text-2xl font-black font-['Inter']">{"Criador de " + tipo}</h1>
                <div className="flex flex-col justify-center items-center w-3/5 bg-gray-200 border border-gray-300 rounded-lg p-4 gap-4">
                    <label htmlFor="nome" className='w-full'>Nome:</label>
                    <input required={true}  type="text" id="nome" name="nome" className=' bg-gray-100 border border-gray-300 rounded-md p-2 w-full' />
                    <label htmlFor="descricao" className="w-full">Descricao:</label>
                    <input required={true} type="text" id="descricao" name="descricao" className='bg-gray-100 border border-gray-300 rounded-md p-2 w-full' />
                    <label htmlFor="linkImagem" className="w-full">Link da imagem de capa:</label>
                    <input required={true} type="text" id="linkImagem" name="linkImagem" className='bg-gray-100 border border-gray-300 rounded-md p-2 w-full' />
                    {type === 'C' && 
                        <>
                            <label htmlFor="aprendizado" className="w-full">Aprendizados:</label>
                            <textarea required={true} id="aprendizado" name="aprendizado" className='bg-gray-100 border border-gray-300 rounded-md p-2 w-full h-fit' />
                            <label htmlFor="cargahoraria" className="w-full">Carga Horária:</label>
                            <input required={true} type="number" min={1} id="cargahoraria" name="cargahoraria" className='bg-gray-100 border border-gray-300 rounded-md p-2 w-full' />
                        </>
                    }
                    {
                        type === 'S' &&
                        <>
                            <label htmlFor="beneficio" className="w-full">Beneficios:</label>
                            <textarea required={true} id="beneficio" name="beneficio" className='bg-gray-100 border border-gray-300 rounded-md p-2 w-full h-fit' />
                        </>
                    }
                    <button className="w-full bg-green-700 hover:bg-green-800 duration-150 ease-in text-white text-lg font-semibold font-['Inter] rounded-lg px-2 py-2" onClick={async () => {
                        let response;
                        if (type === 'C') {
                            response = await criarCurso({
                                nome: (document.getElementById("nome") as HTMLInputElement).value,
                                descricao: (document.getElementById("descricao") as HTMLInputElement).value,
                                linkImagem: (document.getElementById("linkImagem") as HTMLInputElement).value,
                                aprendizado: (document.getElementById("aprendizado") as HTMLInputElement).value.split("\n")[0] === '' ? [] : (document.getElementById("aprendizado") as HTMLInputElement).value.split("\n"),
                                cargaHoraria: (document.getElementById("cargahoraria") as HTMLInputElement).valueAsNumber
                            })
                        } else if (type === 'S') {
                            response = await criarServico({
                                nome: (document.getElementById("nome") as HTMLInputElement).value,
                                descricao: (document.getElementById("descricao") as HTMLInputElement).value,
                                linkImagem: (document.getElementById("linkImagem") as HTMLInputElement).value,
                                beneficio: (document.getElementById("beneficio") as HTMLInputElement).value.split("\n")[0] === '' ? [] : (document.getElementById("beneficio") as HTMLInputElement).value.split("\n")
                            });
                        } else if (type === 'E') {
                            response = await criarEquipamento({
                                nome: (document.getElementById("nome") as HTMLInputElement).value,
                                descricao: (document.getElementById("descricao") as HTMLInputElement).value,
                                linkImagem: (document.getElementById("linkImagem") as HTMLInputElement).value
                            });
                        }
                        if (response === 201) {
                            notificacaoSucesso();
                        } else {
                            notificacaoErro(response);
                        }
                    }}>Criar</button>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
}