import { useEffect, useState } from "react";

// Importação do Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCSE from "./CardCSE";
import { pegarCursos } from "../api/cursosAPI";
import { pegarEquipamentos } from "../api/equipamentosAPI";
import { pegarServicos } from "../api/servicosAPI";
import { Curso, Servico, Equipamento } from "../types/TypesCSE";


// prox seta
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 z-10 cursor-pointer bg-transparent flex items-center justify-center"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-black" 
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

// seta anterior
function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 z-10 cursor-pointer bg-transparent flex items-center justify-center"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-black" 
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

function CarroselOficial(props: {tipo: string}) {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        
          
        }
      },
      {
        breakpoint: 502,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, 
          centerPadding: '60px', 
          
        }
      }
    ]
  };
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
  return (
    <div className="slider-container w-full max-w-screen-lg mx-auto relative px-4 pt-10">
      <Slider {...settings}>
        {conteudo.map((item) => (
          <div key={item.id} className="px-9">
            <CardCSE nome={item.nome} descricao={item.descricao} imagem={item.linkImagem} id={item.id} tipo={props.tipo}  />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarroselOficial;
