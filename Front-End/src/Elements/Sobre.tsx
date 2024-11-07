import histEmpresa from "../assets/histEmpresa.png";
import ct from "../assets/ct.png";
import logo from "../assets/logoVector.png";


function Sobre() {

    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-20 px-4 md:px-10 lg:px-20">
        <div className="text-center text-black text-4xl font-semibold font-['Inter'] pb-2 tracking-wide mb-10">
            <p>SOBRE A EMPRESA</p>
            <div className="flex items-center justify-center">
            <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
            <img src={logo} alt="Logo" className="h-12 w-12" />
            <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
            </div>
            <p className="text-[#666666] font-normal text-lg">Confira um pouco mais sobre a Resgate Prático!</p>
        </div>
        <div className="w-full max-w-screen-lg flex flex-col gap-16">
            <div className="flex flex-col md:flex-row justify-center items-center gap-20">
            <div className="md:w-1/2 flex flex-col justify-center items-center">
                <div className="text-center text-black text-3xl font-semibold font-['Inter'] tracking-wide mb-4">
                <p>História da empresa</p>
                </div>
                <div className="text-justify text-black text-xl font-normal font-['Inter'] tracking-tight ">
                <p>A Resgate Prático foi criada pelo subtenente José Ednaldo, hoje no quadro de reserva do corpo de bombeiros militares da Bahia (CBMBA). Sempre apaixonado por instrução e com experiência na área, percebeu a necessidade de treinamentos de qualidade e um centro de treinamento mais completo na Bahia. <br/><br/> No ano de 2013 iniciou a parceria com Daniela Souza, atual gerente administrativa, que agregou de forma significativa à empresa, tornando possível o crescimento e construção do Centro de Treinamento Resgate Prático.</p>
                </div>
            </div>
            <div className="md:w-1/2">
                <img className="w-full h-auto rounded-lg" src={histEmpresa} alt="História da Empresa"/>
            </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-20">
            
            <div className="md:w-1/2  flex flex-col justify-center items-center">
                <div className="text-center text-black text-3xl font-semibold font-['Inter'] tracking-wide mb-4">
                <p>Centro de Treinamento</p>
                </div>
                <div className="text-justify text-black text-xl font-normal font-['Inter'] tracking-tight">
                <p>Juntos, com muitas horas de dedicação aos serviços e também à obra, concluíram o projeto do centro de treinamento, que foi inaugurado em dezembro de 2023. Desde então, o objetivo inicial de fornecer treinamentos de qualidade e um espaço confortável com recursos diversos vem sendo cumprido. <br/><br/> Hoje, com crescimento exponencial, a Resgate Prático vem se destacando no mercado de segurança do trabalho e segurança contra incêndio.</p>
                </div>
            </div>
            <div className="md:w-1/2">
                <img className="w-full h-auto rounded-lg" src={ct} alt="Centro de Treinamento"/>
            </div>
            </div>
        </div>
        </div>

    )  
}

export default Sobre