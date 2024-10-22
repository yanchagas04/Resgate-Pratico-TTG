import { NavLink } from 'react-router-dom';
import logoPrincipal from '../assets/LogoVector.png';

function Header() {
    return (
        <header className="Header w-full h-fit">
        <div className="h-auto px-5 w-full bg-[#a42323] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-[50px] py-4">
        <img className="w-12 h-12" src={logoPrincipal} alt="Logo" />
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <NavLink to = "/">HOME</NavLink>
          </li>
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <NavLink to = "/cursos">CURSOS</NavLink>
          </li>
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <NavLink to = "/servicos">SERVIÇOS</NavLink>
          </li>
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <NavLink to = "/equipamentos">EQUIPAMENTOS</NavLink>
          </li>
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <NavLink to = "/contato">CONTATO</NavLink>
          </li>
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <a href="#">EBOOK</a>
          </li>
        </ul>
        </div>
        </header>
    )
}

export default Header;