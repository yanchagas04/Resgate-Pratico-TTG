import { useContext, useEffect, useState } from 'react';
import Footer from '../Elements/Footer';
import Header from '../Elements/Header';
import icone from '../assets/certinho.png';
import { Equipamento } from '../types/TypesCSE';
import { useParams } from 'react-router-dom';
import { pegarEquipamentoId } from '../api/equipamentosAPI';
import { CSE_Context } from '../App';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notificacaoSucesso = () => toast.success('Adicionado a lista de interesses! Verique sua lista no canto superior direito!', {
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
const notificacaoErro = () => toast.warn('Ja adicionado a lista de interesses!', {
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

function PaginaEquipamentos() {
    const [equipamento, setEquipamento] = useState<Equipamento>();
    const { id } = useParams();
    useEffect(() => {
        pegarEquipamentoId(id).then((value) => setEquipamento(value));
    }, [equipamento]);
    const CSEcontext = useContext(CSE_Context);
    return (
        <div className='w-full min-h-screen flex flex-col gap-4'>
            <Header />
            <div className="h-full pt-[50px] flex flex-col justify-center items-center gap-6 md:px-0">
            <div className="h-full self-stretch px-[25px] bg-white rounded-[10px] flex-col md:flex-row justify-center items-center gap-[50px] inline-flex">
            <div className="h-full grow shrink basis-0 self-stretch flex-col justify-center items-start gap-[25px] inline-flex">
            <div className="text-black text-[32px] font-semibold font-['Inter'] tracking-wide h-fit ">{equipamento?.nome}</div>
            <div className="self-stretch text-justify text-black text-base font-normal font-['Inter'] tracking-tight h-full">{equipamento?.descricao}</div> 
            </div>
        <div className="flex-col justify-center items-center gap-[25px] inline-flex h-full">
            <img className="w-[455px] h-[350px] " src={equipamento?.linkImagem} />
            {/* Botão */}
            <button className="p-2.5 bg-gradient-to-r from-[#393939] to-[#393939] rounded-[5px] justify-center items-center gap-2.5 inline-flex h-fit" onClick={() => {
                if (equipamento !== undefined) {
                    if (CSEcontext.addEquipamento(equipamento) != -1) {
                        notificacaoSucesso();
                    } else {
                        notificacaoErro();
                    };
                }
            }}>
                <div className="text-justify text-white text-base font-semibold font-['Inter'] tracking-tight">Adicionar a lista de equipamentos</div>
                <img className="w-5 h-5" src={icone} />
            </button>
        </div>
    </div>
            </div>
            <ToastContainer />
            <Footer />
        
        </div>
    )
}

export default PaginaEquipamentos;