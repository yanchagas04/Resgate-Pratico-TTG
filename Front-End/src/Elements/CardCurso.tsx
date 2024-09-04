interface CardCursoProps {
    nome: string,
    descricao: string,
    imagem: string
}

function CardCurso(props : CardCursoProps){
    return (
        <div className="bg-red-700 w-64 h-[500px] p-4 rounded-xl flex flex-col gap-2">
            <img className="rounded-md w-64 h-64" src={props.imagem} />
            <h3 className="text-xl font-bold text-white">{props.nome}</h3>
            <p className="overflow-hidden line-clamp-6 leading-relaxed h-full break-words hyphens-auto indent-4 text-white">{props.descricao}</p>
            <a href="#" className="bg-slate-200 hover:bg-slate-300 duration-150 ease-in rounded-md text-center p-2 hover:scale-105">Saber mais</a>
        </div>
    )  
}

export default CardCurso