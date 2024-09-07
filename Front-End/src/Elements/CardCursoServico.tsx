interface CardCursoServicoProps {
    nome: string,
    descricao: string,
    imagem: string
}

function CardCurso(props : CardCursoServicoProps){
    return (
        <div className="bg-red-700 w-64 h-[400px] p-3 rounded-lg flex flex-col gap-2">
            <img className="rounded-md w-64 h-64" src={props.imagem} />
            <h3 className="text-xl font-bold text-white">{props.nome}</h3>
            <p className="overflow-hidden line-clamp-3 leading-relaxed h-full break-words hyphens-auto indent-4 text-white">{props.descricao}</p>
            <a href="#" className="bg-slate-200 hover:bg-slate-300 duration-150 ease-in rounded-md text-center p-2 hover:scale-105">Saber mais</a>
        </div>
    )  
}

export default CardCurso