import React from "react";
import CardCursoServico from '../Elements/CardCursoServico';
import logo from '../assets/logoVector.png';
import imgCurso from '../assets/exemploCurso.png';

// Importação do Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dados dos cards
const cards = [
  { nome: 'Curso 1', descricao: 'Descrição do curso 1', imagem: imgCurso },
  { nome: 'Curso 2', descricao: 'Descrição do curso 2', imagem: imgCurso },
  { nome: 'Curso 3', descricao: 'Descrição do curso 3', imagem: imgCurso },
  { nome: 'Curso 4', descricao: 'Descrição do curso 4', imagem: imgCurso },
  { nome: 'Curso 5', descricao: 'Descrição do curso 5', imagem: imgCurso },
  { nome: 'Curso 6', descricao: 'Descrição do curso 6', imagem: imgCurso },
];

// Customização da seta próxima
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
        className="w-8 h-8 text-black" // Tamanho e cor da seta preta
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

// Customização da seta anterior
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
        className="w-8 h-8 text-black" // Tamanho e cor da seta preta
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

function CarroselOficial() {
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
          //centerMode: true, // Adiciona o modo de centralização para uma melhor experiência em telas pequenas
          //centerPadding: '60px',
          
        }
      },
      {
        breakpoint: 502,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Adiciona o modo de centralização para uma melhor experiência em telas pequenas
          centerPadding: '60px', // Padding para centralizar o card
          
        }
      }
    ]
  };

  return (
    <div className="slider-container w-full max-w-screen-lg mx-auto relative px-4 pt-10">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-9">
            <CardCursoServico nome={card.nome} descricao={card.descricao} imagem={card.imagem} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarroselOficial;
