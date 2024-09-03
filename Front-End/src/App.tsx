import './Styles/main.css'

import logoPrincipal from './assets/logoVector.png'; 
import imgPrincipal from './assets/principal.png';

function App() {
  return (
    <>
       <div className='Header'>
        <div className="h-[80px] px-[25px] w-full  bg-[#a42323] justify-center items-center gap-[50px] inline-flex">
        <img className="w-12 h-12" src={logoPrincipal} />
        <ul className='inline-flex'>
          <li className= "  m-7 text-center text-white text-xl font-semibold font-['Inter'] "><a href="#">HOME</a></li>
          <li className= "  m-7 text-center text-white text-xl font-semibold font-['Inter'] "><a href="#">SOBRE</a></li>
          <li className= "  m-7 text-center text-white text-xl font-semibold font-['Inter'] "><a href="#">CAPACITAÇÕES</a></li>
          <li className= "  m-7 text-center text-white text-xl font-semibold font-['Inter'] "><a href="#">SERVIÇOS</a></li>
          <li className= "  m-7 text-center text-white text-xl font-semibold font-['Inter'] "><a href="#">EBOOK</a></li>
          <li className= "  m-7 text-center text-white text-xl font-semibold font-['Inter'] "><a href="#">CONTATO</a></li>
        </ul>
        </div>
      </div>
      <img className="w-full h-full" src={imgPrincipal} alt="CENTRO DE TREINAMENTO" />
      <div>test</div>
    </>
  )
}

export default App
