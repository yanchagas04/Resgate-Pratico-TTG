import logoPrincipal from '../assets/LogoVector.png'; 

function Header() {
    return (
        <header className="Header">
        <div className="h-auto px-5 w-full bg-[#a42323] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-[50px] py-4">
        <img className="w-12 h-12" src={logoPrincipal} alt="Logo" />

        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <a href="#">HOME</a>
          </li>
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <a href="#">SOBRE</a>
          </li>
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <a href="#">CAPACITAÇÕES</a>
          </li>
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <a href="#">SERVIÇOS</a>
          </li>
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <a href="#">EBOOK</a>
          </li>
          <li className="text-center text-white text-lg md:text-xl font-semibold font-['Inter']">
            <a href="#">CONTATO</a>
          </li>
        </ul>
        </div>
        </header>
    )
}

export default Header;