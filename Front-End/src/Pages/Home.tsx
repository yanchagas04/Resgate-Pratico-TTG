import imgPrincipal from '../assets/principal.png';
import Header from '../Elements/Header';
import Footer from '../Elements/Footer';
import CardDivisao from '../Elements/CardDivisao';
import CarroselOficial from '../Elements/Carrosel';
import Sobre from '../Elements/Sobre';
import logo from '../assets/logoVector.png';
import Feedbacks from '../Elements/Feedbacks';
import { useEffect, useState } from 'react';
import CarroselBoot from '../Elements/CarroselBoot';


function Home(){
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
              height: window.innerHeight,
              width: window.innerWidth
            })
          
      }
      
          window.addEventListener('resize', handleResize)
          return () => {
            window.removeEventListener('resize', handleResize)
          }
    }, [windowSize]);
    return (
        <>
            <Header />
            <div className="relative w-full h-full">
            {/* Imagem de fundo */}
            <img className="w-full h-full object-cover" src={imgPrincipal} alt="CENTRO DE TREINAMENTO" />

            {/* Seção Vermelha */}
            <div className="relative w-full h-[359px] bg-[#a32323]">
                <div className="absolute top-0 left-1/2 w-[70%] transform -translate-x-1/2 h-auto p-[25px] bg-[#fbf8f3] rounded-[10px] shadow flex flex-col justify-center items-center gap-2.5">
                <div className="text-center text-[#000040] text-2xl font-bold font-['Inter'] tracking-wide">
                    <p>Ensinando pessoas a salvaguardar nosso bem maior que é a vida.</p>
                </div>
                <div className="text-center text-[#000040] text-xl font-extralight font-['Inter'] tracking-wide">
                    <p>Excelência, transparência, inovação, compromisso com a saúde coletiva e responsabilidade.</p>
                </div>
                </div>
            </div>
            </div>

            {/* Cards */}
            <div className="relative w-full flex flex-col xl:flex-row justify-center items-center gap-24 mt-6 md:mt-[-150px]">
            <CardDivisao
                nome="Equipamentos"
                descricao="Conheça nossos equipamentos de proteção individual e coletiva"
                link="/equipamentos"
            />
            <CardDivisao
                nome="Capacitacoes"
                descricao="Conheça nossas capacitações e cursos de treinamento"
                link="/capacitacoes"
            />
            <CardDivisao
                nome="Servicos"
                descricao="Conheça nossos serviços de manutenção, reparo de equipamentos e outros"
                link="/servicos"
            />
            </div>

            {/* carrosel capacitações */}
            <div className="flex flex-col text-center text-black text-4xl font-semibold font-['Inter'] pt-20 tracking-wide gap-4 px-4">
                <p>PRINCIPAIS CAPACITAÇÕES</p>
                <div className="flex items-center justify-center">
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                <img src={logo} alt="Logo" className="h-12 w-12" />
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                </div>
                <p className="text-[#666666] font-normal text-lg">Conheça as principais capacitações que oferecemos!</p>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='w-full max-w-[1200px] sm:w-4/5 py-8 px-16'>
                    <CarroselBoot tipo='C'/>
                </div>
            </div>

            {/* carrosel servicos */}
            <div className="flex flex-col text-center text-black text-4xl font-semibold font-['Inter'] pt-20 tracking-wide gap-4 px-4">
                <p>PRINCIPAIS SERVIÇOS</p>
                <div className="flex items-center justify-center">
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                <img src={logo} alt="Logo" className="h-12 w-12" />
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                </div>
                <p className="text-[#666666] font-normal text-lg">Conheça os principais serviços que oferecemos!</p>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='w-full max-w-[1200px] sm:w-4/5 py-8 px-16'>
                    <CarroselBoot tipo='S'/>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center text-black text-4xl font-semibold font-['Inter'] pt-20 tracking-wide gap-4 px-4">
                <p>ONDE ESTAMOS</p>
                <div className="flex items-center justify-center">
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                <img src={logo} alt="Logo" className="h-12 w-12" />
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                </div>
                <p className="text-[#666666] font-normal text-lg">Conheça aonde fica localizado nosso centro de treinamento!</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.6962696298733!2d-38.311698324148466!3d-12.733226755063273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71614abd9a1a0ef%3A0x8ba8d26202a02027!2sCentro%20de%20Treinamento%20Resgate%20Pr%C3%A1tico!5e0!3m2!1spt-BR!2sbr!4v1731686523356!5m2!1spt-BR!2sbr" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-4/5 aspect-video md:max-w-5xl border-4 rounded-3xl border-[#a32323]'></iframe>
            </div>

            {/* Sobre a Empresa */}
            <Sobre />

            {/* feedbacks */}
            <Feedbacks />
            
            
            {/* Footer */}
            <Footer />
            
            
        </>
    )
}

export default Home;