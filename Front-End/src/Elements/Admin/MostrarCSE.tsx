import { useEffect, useState } from "react";
import EditableCardCSE from "../Admin/EditableCardCSE";
import { Curso, Equipamento } from "../../types/TypesCSE";
import { pegarCursos } from "../../api/cursosAPI";
import { Servico } from "../../types/TypesCSE";
import { pegarServicos } from "../../api/servicosAPI";
import { pegarEquipamentos } from "../../api/equipamentosAPI";

interface MostrarCSEProps {
    tipo: string
}

function MostrarCSE(props: MostrarCSEProps){
    const [conteudo, setConteudo] = useState<Curso[] | Servico[] | Equipamento[]>([]);
    const [nomeConteudo, setNomeConteudo] = useState('Curso');
    useEffect(() => {
        if(props.tipo === 'C'){
            setNomeConteudo('Curso');
            pegarCursos().then((response)=>{
                let cursosArray : Curso[] = response;
                setConteudo(cursosArray);
            });
        } else if(props.tipo === 'S'){
            setNomeConteudo('Serviço');
            pegarServicos().then((response)=>{
                let servicosArray : Servico[] = response;
                setConteudo(servicosArray);
            })
        } else if(props.tipo === 'E'){
            setNomeConteudo('Equipamento');
            pegarEquipamentos().then((response)=>{
                let equipamentosArray : Equipamento[] = response;
                setConteudo(equipamentosArray);
            })
        }
    }, [conteudo]);
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 px-8">
            <button type="button" className='bg-red-700 hover:bg-red-800 flex justify-center items-center hover:scale-105 duration-150 ease-in text-white text-7xl text-center font-semibold font-[Inter] rounded-full w-32 h-32'>+</button>
        {
            conteudo.length > 0 && <>{conteudo.map(element => <EditableCardCSE key={element.id} nome={nomeConteudo + " " + element.nome} descricao={element.descricao} imagem={element.linkImagem} id={element.id} tipo={props.tipo}/>)}</>
        }
        </div>
    )
}

export default MostrarCSE;