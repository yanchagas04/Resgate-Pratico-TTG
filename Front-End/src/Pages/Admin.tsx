import logoPrincipal from '../assets/LogoVector.png';
import SelecionarOperacao from '../Elements/Admin/SelecionarOperacao';
import SelecionarTipoObjeto from '../Elements/Admin/SelecionarTipoObjeto';
const operacoes = [
    {
        'operacao': 'adicao',
        'texto': 'Adicionar'
    },
    {
        'operacao': 'remocao',
        'texto': 'Remover'
    },
    {
        'operacao': 'atualizacao',
        'texto': 'Atualizar'
    }
]

const objetos = [
    {
        'objeto': 'capacitacoes',
        'texto': 'Capacitações'
    },
    {
        'objeto': 'servicos',
        'texto': 'Serviços'
    },
    {
        'objeto': 'equipamentos',
        'texto': 'Equipamentos'
    }
]

function Admin() {
    return (
            <div className="flex flex-col items-center justify-center w-screen font-[Inter] gap-4">
                <header className="flex w-full items-center justify-center p-2 gap-4 bg-[#a42323]">
                    <img src={logoPrincipal} alt="Logo" className="w-12 h-12" />
                    <h1 className="text-2xl text-white text-center">PÁGINA DE ADMINISTRAÇÃO</h1>
                </header>
                <div className='w-fit flex flex-col justify-center items-start gap-4 p-2'>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h3 className='text-xl font-bold'>Selecionar Operação:</h3>
                        <SelecionarOperacao operacoes={operacoes} />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h3 className='text-xl font-bold'>Selecionar Tipo de Objeto:</h3>
                        <SelecionarTipoObjeto objetos={objetos}/>
                    </div>
                </div>
            </div>
    )
}

export default Admin;