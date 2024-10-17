interface Operacao {
    operacao: string,
    texto: string
}

interface Operacoes {
    operacoes: Operacao[]
}

function SelecionarOperacao(operacoes: Operacoes) {

    return (
        <div className='flex flex-row gap-4 w-full justify-start'>
                    {
                        operacoes.operacoes.map((operacao: Operacao) => {
                            return (
                                <div className='flex flex-row gap-2 justify-center items-center'>
                                    <input type="radio" id={operacao.operacao} name="operacao" value={operacao.operacao} aria-checked />
                                    <label htmlFor={operacao.operacao}>{operacao.texto}</label>
                                </div>
                            )
                        })
                    }
                </div>
    )
}

export default SelecionarOperacao;