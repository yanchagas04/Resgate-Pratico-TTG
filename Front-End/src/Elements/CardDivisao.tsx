import { useState } from "react";
import { Link } from "react-router-dom";

interface CardDivisaoProps {
    nome: string;
    descricao: string;
    link: string;
}

function CardDivisao(props: CardDivisaoProps) {
    const [isHovered, setIsHovered] = useState(false);
    let link : string = "";
    let imagem : string = "";
    if (props.nome === "Equipamentos") {
        link = "/equipamentos";
        imagem = "bg-[url('../assets/cardEquipamento.png')]";
    } else if (props.nome === "Capacitacoes") {
        link = "/cursos";
        imagem = "bg-[url('../assets/cardCurso.png')]";
    } else if (props.nome === "Servicos") {
        link = "/servicos";
        imagem = "bg-[url('../assets/cardServico.png')]";
    }
    return (
        <Link to={link}>
            <div className={`transition-all duration-300 ease-in-out flex flex-col items-center justify-center hover:bg-blend-multiply w-72 aspect-square rounded-full border-4 border-transparent hover:border-gray-300 p-4 bg-cover ` + imagem} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <h1 className="text-center text-2xl text-white font-[Inter] font-bold">{props.nome}</h1>
            {isHovered && <p className="text-center text-sm text-white font-[Inter] animate-pulse">{props.descricao}</p>}
            </div>
        </Link>

    )
}

export default CardDivisao;