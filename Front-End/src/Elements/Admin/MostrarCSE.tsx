import { ReactNode } from "react";
import EditableCardCSE from "../Admin/EditableCardCSE";

interface MostrarCSEProps {
    tipo: string
}

function MostrarCSE(props: MostrarCSEProps){
    const cursos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const servicos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const equipamentos = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return (
        <div className="flex flex-wrap justify-center items-center gap-4">
            <button type="button" className='bg-red-700 hover:bg-red-800 flex justify-center items-center hover:scale-105 duration-150 ease-in text-white text-7xl text-center font-semibold font-[Inter] rounded-full w-32 h-32'>+</button>
        {
            props.tipo === 'C' && <>{cursos.map(element => <EditableCardCSE nome={"Curso " + element} descricao="Descrição do curso" imagem="https://via.placeholder.com/500x500" id={element} />)}</>
        }
        {
            props.tipo === 'S' && <>{servicos.map(element => <EditableCardCSE nome={"Serviço " + element} descricao="Descrição do Serviço" imagem="https://via.placeholder.com/500x500" id={element} />)}</>
        }
        {
            props.tipo === 'E' && <>{equipamentos.map(element => <EditableCardCSE nome={"Equipamento " + element} descricao="Descrição do Equipamento" imagem="https://via.placeholder.com/500x500" id={element} />)}</>
        }
        </div>
    )
}

export default MostrarCSE;