import { useState } from "react";
import { Link } from "react-router-dom";

interface CardDivisaoProps {
    nome: string;
    descricao: string;
    imagem: any;
    link: string;
}

function CardDivisao(props: CardDivisaoProps) {
    const [isHovered, setIsHovered] = useState(false);
    const background = `bg-[url('${props.imagem}')]`;
    let link : string = "";
    if (props.nome === "Equipamentos") {
        link = "/equipamentos";
    } else if (props.nome === "Cursos") {
        link = "/cursos";
    } else if (props.nome === "Serviços") {
        link = "/servicos";
    }
    return (
        <Link to={link}>
            <div className={`transition-all duration-300 ease-in-out flex flex-col items-center justify-center ${background} bg-gray-400 hover:bg-blend-multiply w-72 h-[500px] rounded-3xl border-4 border-transparent hover:border-gray-700 p-4`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <h1 className="text-center text-2xl text-white font-[Inter] font-bold">{props.nome}</h1>
            {isHovered && <p className="text-center text-sm text-white font-[Inter] animate-pulse">{props.descricao}</p>}
            </div>
        </Link>

    )
}

export default CardDivisao;