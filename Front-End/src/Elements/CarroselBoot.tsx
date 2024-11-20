import { useEffect, useState } from "react";
import { pegarCursos } from "../api/cursosAPI";
import { Curso, Equipamento, Servico } from "../types/TypesCSE";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardCSE from "./CardCSE";
import { pegarServicos } from "../api/servicosAPI";
import { pegarEquipamentos } from "../api/equipamentosAPI";
    
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 925 },
      items: 2,   
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 925, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

interface carroselProps {
    tipo: string
}

export default function CarroselBoot(props: carroselProps) {
    const [conteudo, setConteudo] = useState<Curso[] | Servico[] | Equipamento[]>([]);
    useEffect(() => {
        if(props.tipo === 'C'){
            pegarCursos().then((response)=>{
                let cursosArray : Curso[] = response;
                setConteudo(cursosArray);
            });
        } else if(props.tipo === 'S'){
            pegarServicos().then((response)=>{
                let servicosArray : Servico[] = response;
                setConteudo(servicosArray);
            })
        } else if(props.tipo === 'E'){
            pegarEquipamentos().then((response)=>{
                let equipamentosArray : Equipamento[] = response;
                setConteudo(equipamentosArray);
            })
        }
    }, [conteudo]);
    if (conteudo.length === undefined) {
        const content = props.tipo === 'C' ? 'Curso' : props.tipo === 'S' ? 'Serviço' : 'Equipamento';
        return (
            <div className="flex flex-col justify-center items-center gap-4 px-8">
                <p className="text-3xl font-[Inter] font-bold">Nenhum {content} encontrado</p>
            </div>
        )
    }
    return (
        
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={[]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
            {
                conteudo.length > 0 &&
                conteudo?.map((conteudo) => (<CardCSE key={conteudo.id} id={conteudo.id} nome={conteudo.nome} descricao={conteudo.descricao} imagem={conteudo.linkImagem} tipo={props.tipo}/>))
            }
        </Carousel>
    )
}