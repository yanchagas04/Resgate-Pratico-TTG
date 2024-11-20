import logo from '../assets/logoVector.png';
import FourStars from '../assets/4Stars.png';
import FiveStars from '../assets/5Stars.png';

const Feedbacks = () => {
  return (
    <div className="w-full px-4 lg:px-20 py-12 flex flex-col justify-center items-center h-fit">
      {/* Título */}
      <div className="flex flex-col text-center text-black text-4xl font-semibold font-['Inter'] pb-2 tracking-wide mb-10 mt-8 gap-4">
            <p>AVALIAÇÕES DOS CLIENTES</p>
            <div className="flex items-center justify-center">
            <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
            <img src={logo} alt="Logo" className="h-12 w-12" />
            <div className="border-t-2 border-[#a32323] w-16 mx-2"></div>
            </div>
            <p className="text-[#666666] font-normal text-lg">Acompanhe o que nossos clientes estão dizendo!</p>
        </div>

      {/* Feedback Cards */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {/* Card 1 */}
        <div className="w-full md:w-[350px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative h-[307px]">
          <div className="absolute top-6 left-6 text-[#02476f] font-['BARRIO'] text-8xl">”</div>
          <div className="bg-gray-300 p-6 pt-16 h-[216px]">
            <p className="text-xl h-full text-black text-center font-normal font-['Inter'] tracking-tight pt-4">"Ótimo espaço de treinamento, conhecimento e prática, bom atendimento."</p>
          </div>
          <div className="bg-neutral-800 p-4 text-center">
            <p className="text-xl text-[#d8d8d8] font-normal font-['Lexend Peta']">Ronaldo Nascimento</p>
            <img className="w-[107px] h-[23px] mx-auto mt-2" src={FourStars} alt="rating" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-[350px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative h-[307px]">
          <div className="absolute top-6 left-6 text-[#02476f] font-['BARRIO'] text-8xl">”</div>
          <div className="bg-gray-300 p-6 pt-16 h-[216px]">
            <p className="text-xl text-black text-center font-normal font-['Inter'] tracking-tight pt-4">"Excelente centro de treinamento e com instrutores de excelência com informações atualizadas na área de segurança e emergência."</p>
          </div>
          <div className="bg-neutral-800 p-4 text-center">
            <p className="text-xl text-[#d8d8d8] font-normal font-['Lexend Peta']">João Carlos Ferreira</p>
            <img className="w-[130px] h-[23px] mx-auto mt-2" src={FiveStars} alt="rating" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-[350px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative h-[307px]">
          <div className="absolute top-6 left-6 text-[#02476f] font-['BARRIO'] text-8xl">”</div>
          <div className="bg-gray-300 p-6 pt-16 h-[216px]">
            <p className="text-xl text-black text-center font-normal font-['Inter'] tracking-tight pt-4">"Local ótimo para treinamento de brigada de incêndio. Recomendo."</p>
          </div>
          <div className="bg-neutral-800 p-4 text-center">
            <p className="text-xl text-[#d8d8d8] font-normal font-['Lexend Peta']">Josenilson Borges</p>
            <img className="w-[130px] h-[23px] mx-auto mt-2" src={FiveStars} alt="rating" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
