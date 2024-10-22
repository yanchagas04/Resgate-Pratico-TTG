import InstaLogo from '../assets/insta.png';
import LinkLogo from '../assets/linkedin.png';
import FacebookLogo from '../assets/face.png';
import LogoLogo from '../assets/logoVector.png';

function Footer() { 
    return (
        
<footer className="w-full h-full font-['Inter'] bg-neutral-800 p-6">
     {/* Container principal centralizado */}
  <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-white">
    
    {/* Seção de Redes Sociais */}
    <div className="flex justify-center items-center space-x-8 mb-6">
      <div className="flex items-center gap-4">
        <img className="w-11 h-[38px]" src={InstaLogo} alt="Instagram" />
        <a href="https://www.instagram.com/ctresgatepraticoba/" target="_blank" className="text-lg font-bold">
          Instagram
        </a>
      </div>
      <div className="flex items-center gap-4">
        <img className="w-[39px] h-[39px]" src={LinkLogo} alt="Linkedin" />
        <a href="https://br.linkedin.com/company/resgate-pr%C3%A1tico" target="_blank" className="text-lg font-bold">
          Linkedin
        </a>
      </div>
      <div className="flex items-center gap-4">
        <img className="w-6 h-9" src={FacebookLogo} alt="Facebook" />
        <a href="https://www.facebook.com/resgatepraticoba/" target="_blank" className="text-lg font-bold">
          Facebook
        </a>
      </div>
    </div>

    {/* Linha divisória */}
    <div className="w-full border-t border-white my-4"></div>

    {/* Seções de Menu, Endereço, Contato */}
    <div className="w-full flex flex-col md:flex-row justify-around items-start mb-6 space-y-4 md:space-y-0">
      
      {/* Menu */}
      <div className="text-left">
        <h4 className="text-lg font-bold mb-2">Menu:</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Capacitações</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">E-book</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>

      {/* Endereço */}
      <div className="text-left">
        <h4 className="text-lg font-bold mb-2">Endereço:</h4>
        <ul>
          <li className="underline">Rua Francisca Garcez Montenegro<br/>Montenegro - Camaçari, BA, 42812-180</li>
        </ul>
      </div>

      {/* Contato */}
      <div className="text-left">
        <h4 className="text-lg font-bold mb-2">Contato:</h4>
        <ul>
          <li className="underline font-bold">(71) 3016-1787</li>
          <li>resgatepratico@gmail.com</li>
        </ul>
      </div>
    </div>

    {/* Logo e Direitos Reservados */}
    <div className="flex flex-col items-center">
      <img className="w-16 h-16 mb-4" src={LogoLogo} alt="Logo Resgate Prático" />
      <p className="text-center text-sm">
        © Resgate Prático 2024 - Direitos Reservados
      </p>
    </div>
    </div>
</footer>
     

    )
}

export default Footer;