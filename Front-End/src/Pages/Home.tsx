import imgPrincipal from '../assets/principal.png';
import Header from '../Elements/Header';
import Footer from '../Elements/Footer';
import CardDivisao from '../Elements/CardDivisao';
const imgCurso = '../assets/exemploCurso.png';


function Home(){
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
            <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-6 mt-6 md:mt-[-150px]">
            <CardDivisao
                nome="Equipamento"
                descricao="Conheça nossos equipamentos de proteção individual e coletiva"
                imagem={imgCurso}
                link="/equipamentos"
            />
            <CardDivisao
                nome="Capacitações"
                descricao="Conheça nossos cursos de primeiros socorros"
                imagem={imgCurso}
                link="/capacitacoes"
            />
            <CardDivisao
                nome="Serviços"
                descricao="Conheça nossos serviços de manutenção e reparo de equipamentos"
                imagem={imgCurso}
                link="/servicos"
            />
            </div>
            a
            <Footer />
            
            
        </>
    )
}

export default Home;