import Footer from '../Elements/Footer';
import Header from '../Elements/Header';
import EquipamentoProps from '../Elements/Interfaces/Equipamento';
import icone from '../assets/certinho.png';
import imgTeste from '../assets/imgTeste.png';

function PaginaEquipamentos() {
    const equipamento = {} as EquipamentoProps;  //realizar o fetch aq
    return (
        <div className='w-full min-h-screen flex flex-col gap-4'>
            <Header />
            <div className="h-full pt-[50px] flex flex-col justify-center items-center gap-6 md:px-0">
            <div className="h-full self-stretch px-[25px] bg-white rounded-[10px] flex-col md:flex-row justify-center items-center gap-[50px] inline-flex">
            <div className="h-full grow shrink basis-0 self-stretch flex-col justify-center items-start gap-[25px] inline-flex">
            <div className="text-black text-[32px] font-semibold font-['Inter'] tracking-wide h-fit ">NOME DO EQUIPAMENTO</div>
            <div className="self-stretch text-justify text-black text-base font-normal font-['Inter'] tracking-tight h-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div> 
            </div>
        <div className="flex-col justify-center items-center gap-[25px] inline-flex h-full">
            <img className="w-[455px] h-[350px] " src={imgTeste} />
            {/* Botão */}
            <button className="p-2.5 bg-gradient-to-r from-[#393939] to-[#393939] rounded-[5px] justify-center items-center gap-2.5 inline-flex h-fit">
                <div className="text-justify text-white text-base font-semibold font-['Inter'] tracking-tight">Adicionar a lista de equipamentos</div>
                <img className="w-5 h-5" src={icone} />
            </button>
        </div>
    </div>
            </div>
            <Footer />
        
        </div>
    )
}

export default PaginaEquipamentos;