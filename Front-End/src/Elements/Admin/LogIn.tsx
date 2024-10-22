function LogIn() {
    return (
        <div className="w-full h-screen flex bg-gray-300 justify-center">
            <div className="min-w-96 w- h-full flex justify-center items-center">
                <form className='w-full h-fit flex flex-col justify-center items-center bg-white drop-shadow-lg rounded-lg p-4 gap-4'>
                    <label htmlFor="usuario" className="w-full text-left">Usuário</label>
                    <input type="text" id="usuario" name="usuario" className='w-full bg-gray-200 border border-gray-300 rounded-md p-2' />
                    <label htmlFor="senha" className="w-full text-left">Senha</label>
                    <input type="password" id="senha" name="senha" className='w-full bg-gray-200 border border-gray-300 rounded-md p-2' />
                    <button className='w-full bg-green-700 hover:bg-green-800 duration-150 ease-in text-white text-lg font-semibold font-[Inter] rounded-lg px-2 py-2'>Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default LogIn;