import { Link, useParams } from "react-router-dom";
import { Curso, Equipamento, Servico } from "../../types/TypesCSE";
import logoPrincipal from '../../assets/LogoVector.png';
import { editarCurso, pegarCursoId } from "../../api/cursosAPI";
import { useEffect, useState } from "react";
import { editarServico, pegarServicoId } from "../../api/servicosAPI";
import { editarEquipamento, pegarEquipamentoId } from "../../api/equipamentosAPI";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notificacaoSucesso = () => toast.success('Editado com sucesso!', {
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

export default function EditorCSE() {
    const { tipo, id } = useParams();
    const [cse, setCSE] = useState<Curso | Servico | Equipamento>();
    const [aprendizados, setAprendizado] = useState<string>("");
    const [beneficios, setBeneficio] = useState<string>("");
    const [cargaHoraria, setCargaHoraria] = useState<number>();
    useEffect(() => {
        if (tipo === 'C') {
            pegarCursoId(id).then((value) => {
                setCSE(value);
                let textosAprendizados: string[] = [];
                value.aprendizado.map((aprendizado) => textosAprendizados.push(aprendizado.texto));
                setAprendizado(textosAprendizados.join("\n"));
                setCargaHoraria(value.cargaHoraria);
            });
            
        } else if (tipo === 'S') {
            pegarServicoId(id).then((value) => {
                setCSE(value);
                let textosBeneficios: string[] = [];
                value.beneficio.map((beneficio) => textosBeneficios.push(beneficio.texto));
                setBeneficio(textosBeneficios.join("\n"));
            });
        } else if (tipo === 'E') {
            pegarEquipamentoId(id).then((value) => setCSE(value));
        }
    }, [cse, aprendizados, beneficios]);
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
                </div>
                <h1 className="text-2xl font-black font-['Inter']">{"Editor de Objetos"}</h1>
                <div className="flex flex-col justify-center items-center w-3/5 bg-gray-200 border border-gray-300 rounded-lg p-4 gap-4">
                    <label htmlFor="nome" className='w-full'>Nome:</label>
                    <input required={true} defaultValue={cse?.nome} type="text" id="nome" name="nome" className=' bg-gray-100 border border-gray-300 rounded-md p-2 w-full' />
                    <label htmlFor="descricao" className="w-full">Descricao:</label>
                    <input required={true} defaultValue={cse?.descricao} type="text" id="descricao" name="descricao" className='bg-gray-100 border border-gray-300 rounded-md p-2 w-full' />
                    <label htmlFor="linkImagem" className="w-full">Link da imagem de capa:</label>
                    <input required={true} defaultValue={cse?.linkImagem} type="text" id="linkImagem" name="linkImagem" className='bg-gray-100 border border-gray-300 rounded-md p-2 w-full' />
                    {tipo === 'C' && 
                        <>
                            <label htmlFor="aprendizado" className="w-full">Aprendizados:</label>
                            <textarea required={true} defaultValue={aprendizados} id="aprendizado" name="aprendizado" className='bg-gray-100 border border-gray-300 rounded-md p-2 w-full h-fit' />
                            <label htmlFor="cargahoraria" className="w-full">Carga Horária:</label>
                            <input required={true} type="number" defaultValue={cargaHoraria} min={1} id="cargahoraria" name="cargahoraria" className='bg-gray-100 border border-gray-300 rounded-md p-2 w-full' />
                        </>
                    }
                    {
                        tipo === 'S' &&
                        <>
                            <label htmlFor="beneficio" className="w-full">Beneficios:</label>
                            <textarea required={true} defaultValue={beneficios} id="beneficio" name="beneficio" className='bg-gray-100 border border-gray-300 rounded-md p-2 w-full h-fit' />
                        </>
                    }
                    <button className="w-full bg-green-700 hover:bg-green-800 duration-150 ease-in text-white text-lg font-semibold font-['Inter] rounded-lg px-2 py-2" onClick={async () => {
                        let response: any;
                        if (tipo === 'C') {
                           response = await editarCurso({
                                id: id,
                                nome: (document.getElementById("nome") as HTMLInputElement).value,
                                descricao: (document.getElementById("descricao") as HTMLInputElement).value,
                                linkImagem: (document.getElementById("linkImagem") as HTMLInputElement).value,
                                aprendizado: (document.getElementById("aprendizado") as HTMLInputElement).value.split("\n")[0] === '' ? [] : (document.getElementById("aprendizado") as HTMLInputElement).value.split("\n"),
                                cargaHoraria: (document.getElementById("cargahoraria") as HTMLInputElement).valueAsNumber
                            })
                        } else if (tipo === 'S') {
                            response = await editarServico({
                                id: id,
                                nome: (document.getElementById("nome") as HTMLInputElement).value,
                                descricao: (document.getElementById("descricao") as HTMLInputElement).value,
                                linkImagem: (document.getElementById("linkImagem") as HTMLInputElement).value,
                                beneficio: (document.getElementById("beneficio") as HTMLInputElement).value.split("\n")[0] === '' ? [] : (document.getElementById("beneficio") as HTMLInputElement).value.split("\n")
                            });
                        } else if (tipo === 'E') {
                            response = await editarEquipamento({
                                id: id,
                                nome: (document.getElementById("nome") as HTMLInputElement).value,
                                descricao: (document.getElementById("descricao") as HTMLInputElement).value,
                                linkImagem: (document.getElementById("linkImagem") as HTMLInputElement).value
                            });
                        }
                        if (response === 200) {
                            notificacaoSucesso();
                        } else {
                            notificacaoErro(response);
                        }
                    }}>Editar</button>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
}