import Footer from '../Elements/Footer';
import Header from '../Elements/Header';
import CursoProps from '../Elements/Interfaces/Cursos';
import icone from '../assets/certinho.png';
import imgTeste from '../assets/imgTeste.png';

function PaginaCursos({id}: {id: any}) {
    const curso = {} as CursoProps;  //realizar o fetch aq
    return (
        <>
            <Header />
            <div className="min-h-screen pt-[50px] flex flex-col justify-center items-center gap-6 px-4 md:px-0">
            <div className="self-stretch px-[25px] bg-white rounded-[10px] flex-col md:flex-row justify-center items-center gap-[50px] inline-flex">
            <div className="grow shrink basis-0 self-stretch flex-col justify-center items-start gap-[25px] inline-flex">
            <div className="text-black text-[32px] font-semibold font-['Inter'] tracking-wide">NOME DO CURSO</div>
            <div className="self-stretch text-justify text-black text-base font-normal font-['Inter'] tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
             <div className="self-stretch text-justify">
                <span className="text-black text-xl font-bold font-['Inter'] tracking-tight">Carga Horária:</span>
                <span className="text-black text-xl font-normal font-['Inter'] tracking-tight"> XX Horas</span>
                </div> 
            </div>
        <div className="flex-col justify-center items-center gap-[25px] inline-flex">
            <img className="w-[455px] h-[350px] " src={imgTeste} />
            {/* Botão */}
            <button className="p-2.5 bg-gradient-to-r from-[#393939] to-[#393939] rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-justify text-white text-base font-semibold font-['Inter'] tracking-tight">Adicionar a lista de capacitações</div>
                <img className="w-5 h-5" src={icone} />
            </button>
        </div>
    </div>
        {/* Segunda Seção - O que você aprenderá */}
        <div className="w-full bg-[#a42323]  p-6 flex flex-col gap-4">
            <h2 className="text-white text-2xl font-semibold">O que você aprenderá?</h2>
            <ul className="flex flex-col gap-4">
                <li className="text-white">
                <strong className="font-bold">Gerenciamento de tempo:</strong> Aprender a organizar tarefas, definir prioridades e cumprir prazos é essencial para o sucesso em qualquer área.
                </li>
                <li className="text-white">
                <strong className="font-bold">Trabalho em equipe:</strong> Desenvolver habilidades de colaboração, comunicação e respeito às diferenças é fundamental para alcançar objetivos em conjunto.
                </li>
                <li className="text-white">
                <strong className="font-bold">Pensamento crítico:</strong> A capacidade de analisar informações, questionar premissas e formar opiniões embasadas é crucial para tomar decisões e resolver problemas.
                </li>
                <li className="text-white">
                <strong className="font-bold">Resolução de problemas:</strong> Aprender a identificar desafios, buscar soluções e implementar ações efetivas é uma habilidade valiosa em qualquer profissão.
                </li>
                <li className="text-white">
                <strong className="font-bold">Comunicação eficaz:</strong> Saber expressar ideias de forma clara, concisa e persuasiva, tanto oralmente quanto por escrito, é fundamental para o sucesso profissional.
                </li>
            </ul>
            </div>
            </div>
            <Footer />
        
        </>
    )
}

export default PaginaCursos;