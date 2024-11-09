import { useEffect, useState } from 'react';
import Footer from '../Elements/Footer';
import Header from '../Elements/Header';
import icone from '../assets/certinho.png';
import { useParams } from 'react-router-dom';
import { pegarServicoId } from '../api/servicosAPI';
import { Beneficio, Servico } from '../types/TypesCSE';

function PaginaServicos() {
    const [servico, setServico] = useState<Servico>();
    const { id } = useParams();
    useEffect(() => {
        pegarServicoId(id).then((value) => setServico(value));
    }, [servico]);
    const beneficios: Beneficio[] = [];
    //console.log(servico);
    servico?.beneficio.forEach((beneficio : Beneficio) => beneficios.push(beneficio));
    return (
        <div className='w-full min-h-screen flex flex-col'>
            <Header />
            <div className="h-full pt-[50px] flex flex-col justify-center items-center gap-6 md:px-0">
            <div className="h-full self-stretch px-[25px] bg-white rounded-[10px] flex flex-col md:flex-row justify-center items-center gap-[50px]">
            <div className="h-full grow shrink basis-0 self-stretch flex-col justify-center items-start gap-[25px] inline-flex">
            <div className="text-black text-[32px] font-semibold font-['Inter'] tracking-wide h-fit">{servico?.nome}</div>
            <div className="self-stretch text-justify text-black text-base font-normal font-['Inter'] tracking-tight h-full">{servico?.descricao}</div>
             <div className="self-stretch text-justify">
                </div> 
            </div>
        <div className="flex-col justify-center items-center gap-[25px] inline-flex">
            <img className="w-[455px] h-[350px] " src={servico?.linkImagem} />
            {/* Botão */}
            <button className="p-2.5 bg-gradient-to-r from-[#393939] to-[#393939] rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-justify text-white text-base font-semibold font-['Inter'] tracking-tight">Adicionar a lista de serviços</div>
                <img className="w-5 h-5" src={icone} />
            </button>
        </div>
    </div>
        {/* Segunda Seção - Benefícios */}
        <div className="w-full bg-[#a42323]  p-6 flex flex-col gap-4">
            <h2 className="text-white text-2xl font-semibold h-fit">Quais são os benefícios?</h2>
                {
                    beneficios.length > 0 && 
                    <div className='"w-full bg-[#a42323] p-6 flex flex-col gap-4'>
                        {
                            beneficios.map((beneficio) => (
                                <p key={beneficio.id} className="text-white font-bold">{beneficio.texto}</p>
                            ))
                        }
                    </div>
                }
                {
                    beneficios.length === 0 &&
                    <p className="text-white font-bold">Nenhum beneficio encontrado</p>
                }
            </div>
            </div>
            <Footer />
        
        </div>
    )
}

export default PaginaServicos;