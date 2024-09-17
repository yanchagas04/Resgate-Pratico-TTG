import InstaLogo from '../assets/insta.png';
import LinkLogo from '../assets/linkedin.png';
import FacebookLogo from '../assets/face.png';
import LogoLogo from '../assets/logoVector.png';

function Footer() { 
    return (

        <div className="w-full h-full p-2.5 bg-neutral-800 justify-center md:flex-row items-center gap-2.5 md:gap-[50px] inline-flex">
        <div className="w-[1446px] h-[454px] relative bg-neutral-800">
            <div className="w-[1339.68px] h-[360.37px] left-[58.48px] top-[46px] absolute">
                <img className="w-[120.46px] h-[108.67px] left-[1430.21px] top-[251.70px] absolute" src={LogoLogo} />
                <div className="h-[39px] left-[321.52px] top-0 absolute justify-start items-center gap-[146px] inline-flex">
                    <div className="h-[38px] justify-center items-center gap-4 flex">
                        <img className="w-11 h-[38px]" src={InstaLogo} />
                        <div className="w-[99px] h-[23px] text-[#fbf8f3] text-[19px] font-bold font-['Inter'] tracking-tight"><a href='https://www.instagram.com/ctresgatepraticoba/'>Instagram</a></div>
                    </div>
                    <div className="h-[39px] justify-center items-center gap-4 flex">
                        <img className="w-[39px] h-[39px]" src={LinkLogo} />
                        <div className="w-[99px] h-[23px] text-[#fbf8f3] text-[19px] font-bold font-['Inter'] tracking-tight"><a href='https://br.linkedin.com/company/resgate-pr%C3%A1tico'>Linkedin</a></div>
                    </div>
                    <div className="w-[139px] h-9 justify-center items-center gap-4 flex">
                        <img className="w-6 h-9" src={FacebookLogo} />
                        <div className="w-[99px] h-[23px] text-[#fbf8f3] text-[19px] font-bold font-['Inter'] tracking-tight"><a href='https://www.facebook.com/resgatepraticoba/'>Facebook</a></div>
                    </div>
                </div>
                <div className="w-[462.51px] h-[46.04px] left-[405.09px] top-[313.79px] absolute text-[#fbf8f3] text-[19px] font-normal font-['Inter'] tracking-tight">© Resgate Prático 2024 - Direitos Reservados</div>
                
            </div>
            
            <div className="w-[411.47px] h-[104.98px] left-[489.09px] top-[127.72px] absolute flex-col justify-start items-start gap-5 inline-flex">
                <div className="self-stretch h-[23px] text-white text-[19px] font-bold font-['Inter'] tracking-tight"><ul>Endereço:</ul><br/></div>
                <div className="self-stretch h-[71px] text-white text-[19px] font-bold font-['Inter'] underline tracking-tight"><li>Rua Francisca Garcez Montenegro - Montenegro - Camaçari, BA, 42812-180</li></div>
            </div>
            <div className="w-[280.69px] h-[107.74px] left-[1007.95px] top-[124.96px] absolute">
                <div className="w-[90.38px] h-[21.18px] left-0 top-0 absolute text-white text-[19px] font-bold font-['Inter'] tracking-tight"><ul>Contato:</ul><br/></div>
                <div className="w-[278.57px] h-[21.18px] left-[0.01px] top-[86.56px] absolute text-white text-[19px] font-normal font-['Inter'] tracking-tight"><li>resgatepratico@gmail.com</li></div>
                <div className="w-[177.56px] h-[21.18px] left-[-0px] top-[41.44px] absolute text-white text-[19px] font-bold font-['Inter'] underline tracking-tight"><li>(71) 3016-1787</li></div>
            </div>
            <div className="w-[149px] h-[245px] left-[100px] top-[133px] absolute">

                <div className="w-[140px] h-[23px] left-0 top-0 absolute text-white text-[19px] font-bold font-['Inter'] tracking-tight"><ul>Menu:</ul></div>
                <div className="w-[140px] h-[23px] left-0 top-[38px] absolute text-white text-[19px] font-normal font-['Inter'] tracking-tight"><li><a href="#">Home</a></li></div>
                <div className="w-[140px] h-[23px] left-0 top-[76px] absolute text-white text-[19px] font-normal font-['Inter'] tracking-tight"><li><a href="#">Sobre</a></li></div>
                <div className="w-40 h-[23px] left-0 top-[114px] absolute text-white text-[19px] font-normal font-['Inter'] tracking-tight"><li><a href="#">Capacitações</a></li></div>
                <div className="w-[140px] h-[23px] left-0 top-[152px] absolute text-white text-[19px] font-normal font-['Inter'] tracking-tight"><li><a href="#">Serviços</a></li></div>
                <div className="w-[140px] h-[23px] left-[0.06px] top-[189.75px] absolute text-white text-[19px] font-normal font-['Inter'] tracking-tight"><li><a href="#">E-book</a></li></div>
                <div className="w-[140px] h-[23px] left-0 top-[222px] absolute text-white text-[19px] font-normal font-['Inter'] tracking-tight"><li><a href="#">Contato</a></li></div>
            </div>
        </div>
    </div>       

    )
}

export default Footer;