import imgPrincipal from '../assets/principal.png';
import Header from '../Elements/Header';
import Footer from '../Elements/Footer';
import CardDivisao from '../Elements/CardDivisao';
import CarroselOficial from '../Elements/Carrosel';
import Sobre from '../Elements/Sobre';
import logo from '../assets/logoVector.png';
import Feedbacks from '../Elements/Feedbacks';


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
            <div className="relative w-full flex flex-col md:flex-row justify-center items-center gap-24 mt-6 md:mt-[-150px]">
            <CardDivisao
                nome="Equipamentos"
                descricao="Conheça nossos equipamentos de proteção individual e coletiva"
                imagem="cardEquipamento"
                link="/equipamentos"
            />
            <CardDivisao
                nome="Capacitações"
                descricao="Conheça nossas capacitações e cursos de treinamento"
                imagem="cardCursos"
                link="/capacitacoes"
            />
            <CardDivisao
                nome="Serviços"
                descricao="Conheça nossos serviços de manutenção, reparo de equipamentos e outros"
                imagem="cardServico"
                link="/servicos"
            />
            </div>
            

            {/* Sobre a Empresa */}
            <Sobre />

            <div className="flex flex-col justify-center items-center text-center text-black text-4xl font-semibold font-['Inter'] pt-20 tracking-wide gap-4">
                <p>ONDE ESTAMOS</p>
                <div className="flex items-center justify-center">
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                <img src={logo} alt="Logo" className="h-12 w-12" />
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                </div>
                <p className="text-[#666666] font-normal text-lg">Conheça aonde fica localizado nosso centro de treinamento!</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.6962696298733!2d-38.311698324148466!3d-12.733226755063273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71614abd9a1a0ef%3A0x8ba8d26202a02027!2sCentro%20de%20Treinamento%20Resgate%20Pr%C3%A1tico!5e0!3m2!1spt-BR!2sbr!4v1731686523356!5m2!1spt-BR!2sbr" width="800" height="600" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-[800px] h-[600px] border-4 rounded-3xl border-[#a32323]'></iframe>
            </div>

            {/* carrosel capacitações */}
            <div className="text-center text-black text-4xl font-semibold font-['Inter'] pt-20 tracking-wide">
                <p>PRINCIPAIS CAPACITAÇÕES</p>
                <div className="flex items-center justify-center">
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                <img src={logo} alt="Logo" className="h-12 w-12" />
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                </div>
                <p className="text-[#666666] font-normal text-lg">Conheça as principais capacitações que oferecemos!</p>
            </div>
            <CarroselOficial tipo='C'/>

            {/* carrosel servicos */}
            <div className="text-center text-black text-4xl font-semibold font-['Inter'] pt-20 tracking-wide">
                <p>PRINCIPAIS SERVIÇOS</p>
                <div className="flex items-center justify-center">
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                <img src={logo} alt="Logo" className="h-12 w-12" />
                <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
                </div>
                <p className="text-[#666666] font-normal text-lg">Conheça os principais serviços que oferecemos!</p>
            </div>
            <CarroselOficial tipo='S'/>

            {/* feedbacks */}
            <Feedbacks />
            
            
            {/* Footer */}
            <Footer />
            
            
        </>
    )
}

export default Home;