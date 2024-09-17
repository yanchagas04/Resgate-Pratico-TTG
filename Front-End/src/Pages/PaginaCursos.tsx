import Header from '../Elements/Header';
import icone from '../assets/certinho.png';

function PaginaServicos(){
    return (
        <>
            <Header />
            <div className="h-[747px] pt-[50px] flex-col justify-center items-center gap-[25px] inline-flex">
            <div className="self-stretch px-[25px] bg-white rounded-[10px] justify-center items-center gap-[50px] inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-[25px] inline-flex">
            <div className="text-black text-[32px] font-semibold font-['Inter'] tracking-wide">NOME DO CURSO</div>
            <div className="self-stretch text-justify text-black text-base font-normal font-['Inter'] tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
             <div className="self-stretch text-justify">
                <span className="text-black text-xl font-bold font-['Inter'] tracking-tight">Carga Horária:</span>
                <span className="text-black text-xl font-normal font-['Inter'] tracking-tight"> XX Horas</span>
                </div> 
        </div>
        <div className="flex-col justify-center items-center gap-[25px] inline-flex">
            <img className="w-[455px] h-[350px] " src="https://via.placeholder.com/455x350" />
            <div className="p-2.5 bg-gradient-to-r from-[#393939] to-[#393939] rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-justify text-white text-base font-semibold font-['Inter'] tracking-tight">Adicionar a lista de capacitações</div>
                <img className="w-5 h-5" src={icone} />
            </div>
        </div>
    </div>
    <div className="self-stretch h-[257px] p-[25px] bg-[#a42323] flex-col justify-center items-center gap-[25px] flex">
        <div className="self-stretch h-[207px] flex-col justify-start items-start gap-[25px] flex">
            <div className="self-stretch text-[#fbf8f3] text-2xl font-semibold font-['Inter'] tracking-wide"><p>O que você aprenderá?</p></div>
                <div className="self-stretch h-[153px] flex-col justify-center items-center gap-[5px] flex">
                    <div className="self-stretch text-justify">
                        <span className="text-[#ffffff] text-base font-bold font-['Inter'] tracking-tight">Gerenciamento de tempo:</span>
                        <span className="text-[#fbf8f3] text-base font-light font-['Inter'] tracking-tight"> Aprender a organizar tarefas, definir prioridades e cumprir prazos é essencial para o sucesso em qualquer área.</span>
                    </div>
                    <div className="self-stretch text-justify">
                        <span className="text-[#ffffff] text-base font-bold font-['Inter'] tracking-tight">Trabalho em equipe: </span>
                        <span className="text-[#fbf8f3] text-base font-light font-['Inter'] tracking-tight">Desenvolver habilidades de colaboração, comunicação e respeito às diferenças é fundamental para alcançar objetivos em conjunto.</span>
                    </div>
                    <div className="self-stretch text-justify">
                        <span className="text-[#ffffff] text-base font-bold font-['Inter'] tracking-tight">Pensamento crítico:</span>
                        <span className="text-[#fbf8f3] text-base font-light font-['Inter'] tracking-tight"> A capacidade de analisar informações, questionar premissas e formar opiniões embasadas é crucial para tomar decisões e resolver problemas.</span>
                    </div>
                    <div className="self-stretch text-justify">
                        <span className="text-[#ffffff] text-base font-bold font-['Inter'] tracking-tight">Resolução de problemas:</span>
                        <span className="text-[#fbf8f3] text-base font-light font-['Inter'] tracking-tight"> Aprender a identificar desafios, buscar soluções e implementar ações efetivas é uma habilidade valiosa em qualquer profissão.</span>
                    </div>
                    <div className="self-stretch text-justify">
                        <span className="text-[#ffffff] text-base font-bold font-['Inter'] tracking-tight">Comunicação eficaz:</span>
                        <span className="text-[#fbf8f3] text-base font-light font-['Inter'] tracking-tight"> Saber expressar ideias de forma clara, concisa e persuasiva, tanto oralmente quanto por escrito, é fundamental para o sucesso profissional.</span>
                    </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default PaginaServicos;