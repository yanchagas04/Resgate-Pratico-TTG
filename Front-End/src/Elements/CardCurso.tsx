interface CardCursoProps {
    nome: string,
    descricao: string,
    imagem: string
}

function CardCurso(props : CardCursoProps){
    return (
        <div className="">
            <img src={props.imagem} />
            <h3>{props.nome}</h3>
            <p>{props.descricao}</p>
        </div>
    )  
}

export default CardCurso