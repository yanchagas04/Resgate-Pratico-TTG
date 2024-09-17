import imgPrincipal from '../assets/principal.png';
import CardCurso from '../Elements/CardCursoServico';
import Header from '../Elements/Header';
import Footer from '../Elements/Footer';

function Home(){
    return (
        <>
            <Header />
            <div className="relative w-full h-full">
            <img className="w-full h-full object-cover" src={imgPrincipal} alt="CENTRO DE TREINAMENTO" />
            <div className="w-full h-[359px] relative bg-[#a32323]">
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
            <Footer />
        </>
    )
}

export default Home;