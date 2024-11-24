import { useEffect, useState } from "react";
import EditableCardCSE from "../Admin/EditableCardCSE";
import { Curso, Ebook, Equipamento } from "../../types/TypesCSE";
import { pegarCursos } from "../../api/cursosAPI";
import { Servico } from "../../types/TypesCSE";
import { pegarServicos } from "../../api/servicosAPI";
import { pegarEquipamentos } from "../../api/equipamentosAPI";
import { Link } from "react-router-dom";
import { pegarEbooks } from "../../api/ebookAPI";
import EditableCardEbook from "./EditableCardEbook";

interface MostrarCSEProps {
    tipo: string
}

function MostrarCSE(props: MostrarCSEProps){
    const [conteudo, setConteudo] = useState<Curso[] | Servico[] | Equipamento[]>([]);
    const [conteudoEbook, setConteudoEbook] = useState<Ebook[]>([]);
    const [nomeConteudo, setNomeConteudo] = useState('Curso');
    useEffect(() => {
        if(props.tipo === 'C'){
            setNomeConteudo('Curso');
            pegarCursos().then((response)=>{
                let cursosArray : Curso[] = response;
                setConteudo(cursosArray);
                setConteudoEbook([]);
            });
        } else if(props.tipo === 'S'){
            setNomeConteudo('Serviço');
            pegarServicos().then((response)=>{
                let servicosArray : Servico[] = response;
                setConteudo(servicosArray);
                setConteudoEbook([]);
            })
        } else if(props.tipo === 'E'){
            setNomeConteudo('Equipamento');
            pegarEquipamentos().then((response)=>{
                let equipamentosArray : Equipamento[] = response;
                setConteudo(equipamentosArray);
                setConteudoEbook([]);
            })
        } else if (props.tipo === 'EB'){
            setNomeConteudo('Ebook');
            pegarEbooks().then((response)=>{
                let ebooksArray : Ebook[] = response;
                setConteudo([]);
                setConteudoEbook(ebooksArray);
            })
        }
    }, [conteudo, conteudoEbook]);
    return (
        <>
            {
                conteudo.length === undefined && <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <p className="text-3xl font-[Inter] font-bold">Nenhum {nomeConteudo} encontrado</p>
                </div>
            }
            {
                (conteudoEbook.length === undefined && props.tipo === 'EB') && <div className="flex flex-col justify-center items-center gap-4 px-8">
                    <p className="text-3xl font-[Inter] font-bold">Nenhum Ebook encontrado</p>
                </div>
            }
            <div className="flex flex-wrap justify-center items-center gap-4 px-8">
                <Link to={'/admin/criador/' + props.tipo}>
                    <button type="button" className='bg-red-700 hover:bg-red-800 flex justify-center items-center hover:scale-105 duration-150 ease-in text-white text-7xl text-center font-semibold font-[Inter] rounded-full w-32 h-32'>+</button>
                </Link>
            {
                (conteudo.length > 0 && props.tipo !== 'EB') && <>{conteudo.map(element => <EditableCardCSE key={element.id} nome={element.nome} descricao={element.descricao} imagem={element.linkImagem} id={element.id} tipo={props.tipo}/>)}</>
            }
            {
                conteudoEbook.length > 0 && <>{conteudoEbook.map(element => <EditableCardEbook key={element.id} nome={element.nome} descricao={element.descricao}  id={element.id} linkDowload={element.linkDownload}/>)}</>
            }
            </div>
        </>
    )
}

export default MostrarCSE;