import { NavLink } from "react-router-dom";

export interface CardCursoServicoEquipamentoProps {
    nome: string,
    descricao: string,
    imagem: string,
    id: string,
    tipo: string
}
  
function CardCSE(props : CardCursoServicoEquipamentoProps){
    return (
        <div className="bg-red-700 w-72 h-[500px] p-3 rounded-lg flex flex-col gap-2 items-center aspect-square">
            <div className="size-64">
                <img className="rounded-md size-64 object-cover" src={props.imagem} />
            </div>
            <h3 className="w-full text-xl font-bold text-white font-[inter]">{props.nome}</h3>
            <p className="w-full overflow-hidden line-clamp-3 text-justify leading-relaxed h-full break-words hyphens-auto indent-4 text-white font-[inter]">{props.descricao}</p>
            {props.tipo === "C" && <NavLink to={`/curso/${props.id}`} className="w-full bg-slate-200 hover:bg-slate-300 duration-150 ease-in rounded-md text-center p-2 hover:scale-105 font-[inter]">Saber mais</NavLink>}
            {props.tipo === "S" && <NavLink to={`/servico/${props.id}`} className="w-full bg-slate-200 hover:bg-slate-300 duration-150 ease-in rounded-md text-center p-2 hover:scale-105 font-[inter]">Saber mais</NavLink>}
            {props.tipo === "E" && <NavLink to={`/equipamento/${props.id}`} className="w-full bg-slate-200 hover:bg-slate-300 duration-150 ease-in rounded-md text-center p-2 hover:scale-105 font-[inter]">Saber mais</NavLink>}
        </div>
    )  
}

export default CardCSE;