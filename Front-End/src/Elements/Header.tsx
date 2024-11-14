import { NavLink } from 'react-router-dom';
import logoPrincipal from '../assets/LogoVector.png';
import carrinho from '../assets/carrinho.svg';

function Header() {
    return (
        <header className="Header w-full h-fit">
        <div className="h-fit px-5 w-full bg-[#a42323] flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-[50px] py-4">
        <div className="flex justify-center items-center h-12 gap-4 font-['Inter']">
          <img className="w-12 h-12" src={logoPrincipal} alt="Logo" />
          <div className='flex flex-col justify-center items-start w-fit h-12'>
            <h2 className='text-white text-xl font-semibold'>CENTRO DE TREINAMENTO</h2>
            <h2 className='text-orange-500 text-xl font-semibold'>RESGATE PRÁTICO</h2>
          </div>
        </div>
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6">
          <li className="text-center text-white text-lg font-semibold font-['Inter']">
            <NavLink to = "/">HOME</NavLink>
          </li>
          <li className="text-center text-white text-lg font-semibold font-['Inter']">
            <NavLink to = "/cursos">CURSOS</NavLink>
          </li>
          <li className="text-center text-white text-lg font-semibold font-['Inter']">
            <NavLink to = "/servicos">SERVIÇOS</NavLink>
          </li>
          <li className="text-center text-white text-lg font-semibold font-['Inter']">
            <NavLink to = "/equipamentos">EQUIPAMENTOS</NavLink>
          </li>
          <li className="text-center text-white text-lg font-semibold font-['Inter']">
            <NavLink to = "/contato">CONTATO</NavLink>
          </li>
          <li className="text-center text-white text-lg font-semibold font-['Inter']">
            <a href="#">EBOOK</a>
          </li>
          <li className="text-center text-white text-lg font-semibold font-['Inter']">
            <NavLink to = "/listaDeInteresse">
              <img src={carrinho} alt="Lista de Interesse" className='w-10 h-fit aspect-square'/>
            </NavLink>
          </li>
        </ul>
        </div>
        </header>
    )
}

export default Header;