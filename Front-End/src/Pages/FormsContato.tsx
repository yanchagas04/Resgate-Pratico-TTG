import Logo from '../assets/LogoVector.png';
import IconeTelefone from '../assets/IconeTelefone.png';
import { NavLink } from 'react-router-dom';

function FormsContato() {
    const cursos = [];
    const servicos = [];
    const equipamentos = [];
    return (
        <div className="flex flex-col-reverse lg:flex-row-reverse w-full min-h-screen font-[Inter] transition-all duration-150 ease-in">
            <div className="flex w-full bg-slate-100 items-center justify-center py-8">
                <form className='min-w-96 w-3/4 h-fit flex flex-col justify-center items-center bg-white drop-shadow-lg rounded-lg p-4 gap-4'>
                    <NavLink to="/" className="lg:hidden">
                        <img src={Logo} alt="Logotipo" className="w-48" />
                    </NavLink>
                    <h1 className='lg:hidden text-gray-950 text-xl'>Formulário de Contato</h1>
                    <div className='flex flex-col gap-4 w-full'>
                        <label htmlFor="nome" className=''>Nome:</label>
                        <input required={true}  type="text" id="nome" name="nome" className=' bg-gray-100 border border-gray-300 rounded-md p-2' />
                        <label htmlFor="email">Email:</label>
                        <input required={true} type="email" id="email" name="email" placeholder='seuemail@email.com' className='bg-gray-100 border border-gray-300 rounded-md p-2' />
                        <label htmlFor="telefone">Telefone para contato:</label>
                        <input type="text" id="telefone" placeholder='(xx)9xxxxxxxx' pattern='\([0-9]{2}\)9[0-9]{4}[0-9]{4}' name="telefone" className='bg-gray-100 border border-gray-300 rounded-md p-2' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <h3>Cursos selecionados:</h3>
                        {cursos.length === 0 && <p className='p-2 pl-4'>Nenhum curso selecionado</p>}
                    </div>
                    <div className='flex flex-col w-full'>
                        <h3>Serviços selecionados:</h3>
                        {servicos.length === 0 && <p className='p-2 pl-4'>Nenhum serviço selecionado</p>}
                    </div>
                    <div className='flex flex-col w-full'>
                        <h3>Equipamentos selecionados:</h3>
                        {equipamentos.length === 0 && <p className='p-2 pl-4'>Nenhum equipamento selecionado</p>}
                    </div>
                    <button type="submit" className='bg-green-500 text-white w-full p-3 rounded-md hover:bg-green-600 transition-all duration-150 ease-in'>Enviar</button>
                </form>
            </div>
            <div>
                <nav className="hidden h-full lg:flex lg:flex-col lg:min-w-[256px] w-2/6 lg:max-w-96 border-r-2 items-center justify-center gap-4 p-4">
                    <NavLink to="/">
                        <img src={Logo} alt="Logotipo" className="w-48" />
                    </NavLink>
                    <h1 className="text-xl text-gray-950 h-fit">Formulário de Contato</h1>
                    <div className='flex flex-row gap-1 items-center h-fit'>
                        <img src={IconeTelefone} alt="Ícone de Telefone" className='w-6'/>
                        <p className='text-gray-950 h-fit'>(71)99161-7848</p>  
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default FormsContato;