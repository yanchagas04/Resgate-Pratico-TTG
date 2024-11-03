import { useParams } from 'react-router-dom';
import Footer from '../Elements/Footer';
import Header from '../Elements/Header';
import CursoProps from '../Elements/Interfaces/Curso';
import icone from '../assets/certinho.png';
import imgTeste from '../assets/imgTeste.png';
import { pegarCursoId } from '../api/cursosAPI';
import { Aprendizado, Curso } from '../types/TypesCSE';
import { useEffect, useState } from 'react';

function PaginaCursos(){
    const [curso, setCurso] = useState<Curso>(); //realizar o fetch aq
    const { id } = useParams();
    useEffect(() => {
        pegarCursoId(id).then((value) => setCurso(value));
    }, [curso]);
    const aprendizados: Aprendizado[] = [];
    curso?.aprendizado.forEach((aprendizado : Aprendizado) => {
        aprendizados.push(aprendizado as Aprendizado);
    })
    return (
        <div className='w-full min-h-screen'>
            <Header />
            <div className="h-full pt-[50px] flex flex-col justify-center items-center gap-6 md:px-0">
            <div className="h-full self-stretch px-[25px] bg-white rounded-[10px] flex-col md:flex-row justify-center items-center gap-[50px] inline-flex">
            <div className="h-full grow shrink basis-0 self-stretch flex-col justify-center items-start gap-[25px] inline-flex">
            <div className="text-black text-[32px] font-semibold font-['Inter'] tracking-wide">{curso?.nome}</div>
            <div className="self-stretch text-justify text-black text-base font-normal font-['Inter'] tracking-tight">
                {curso?.descricao}
            </div>
            <div className="self-stretch text-justify">
                <span className="text-black text-xl font-bold font-['Inter'] tracking-tight">{`Carga Horária: ${curso?.cargaHoraria} Horas`}</span>
            </div> 
            </div>
        <div className="flex-col justify-center items-center gap-[25px] inline-flex">
            <img className="h-[350px] aspect-square" src={curso?.linkImagem} />
            {/* Botão */}
            <button className="p-2.5 bg-gradient-to-r from-[#393939] to-[#393939] rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-justify text-white text-base font-semibold font-['Inter'] tracking-tight">Adicionar a lista de capacitações</div>
                <img className="w-5 h-5" src={icone} />
            </button>
        </div>
    </div>
        {/* Segunda Seção - O que você aprenderá */}
        <div className="w-full bg-[#a42323] h-full p-6 flex flex-col gap-4">
            <h2 className="text-white text-2xl font-semibold h-fit">O que você aprenderá?</h2>
                {
                    aprendizados.length > 0 && 
                    <div className='"w-full bg-[#a42323] p-6 flex flex-col gap-4'>
                        {aprendizados.map((aprendizado : Aprendizado) => (
                           <p key={aprendizado.id} className='text-white font-bold'>{aprendizado.texto}</p>
                        ))}
                    </div>
                }
                {
                    aprendizados.length === 0 && 
                    <p className='text-white font-bold'>Nenhum aprendizado encontrado</p>
                }
        </div>
            <Footer />
        
        </div>

    </div>
    )
}

export default PaginaCursos;