interface Objeto {
    objeto: string,
    texto: string
}

interface Objetos {
    objetos: Objeto[]
}

function SelecionarTipoObjeto(objetos: Objetos) {

    return (
        <div className='flex flex-row gap-4 w-full justify-center'>
                    {
                        objetos.objetos.map((objeto: Objeto) => {
                            return (
                                <div className='flex flex-row gap-2 justify-center items-center'>
                                    <input type="radio" id={objeto.objeto} name="objeto" value={objeto.objeto} aria-checked />
                                    <label htmlFor={objeto.objeto}>{objeto.texto}</label>
                                </div>
                            )
                        })
                    }
                </div>
    )
}

export default SelecionarTipoObjeto;