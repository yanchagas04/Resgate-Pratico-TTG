import Footer from '../Elements/Footer';
import Header from '../Elements/Header';
import CardCSE from '../Elements/CardCSE';
import icone from '../assets/certinho.png';
import FotoDoServico from '../assets/FotoDoCurso.png';
import imgTeste from '../assets/imgTeste.png';


function PaginaGeralServicos(){
    return (
        <>
            
           <div className='flex flex-col justify-center items-center gap-4 w-full'>
           <Header />
                <h1 className='text-gray-950 font-[Inter] text-2xl p-2 font-bold'>SERVIÇOS</h1>
                <div className='flex flex-wrap gap-4 justify-center items-center py-2 px-4'>

                <CardCSE nome="Serviço 1" descricao="Breve descrição sobre o curso, detalhamento na página de cada curso. " imagem={FotoDoServico}/>
                <CardCSE nome="Serviço 2" descricao="Breve descrição sobre o curso, detalhamento na página de cada curso. " imagem={FotoDoServico}/>
                <CardCSE nome="Serviço 3" descricao="Breve descrição sobre o curso, detalhamento na página de cada curso. " imagem={FotoDoServico}/>
                <CardCSE nome="Serviço 4" descricao="Breve descrição sobre o curso, detalhamento na página de cada curso. " imagem={FotoDoServico}/>
                <CardCSE nome="Serviço 5" descricao="Breve descrição sobre o curso, detalhamento na página de cada curso. " imagem={FotoDoServico}/>
                <CardCSE nome="Serviço 6" descricao="Breve descrição sobre o curso, detalhamento na página de cada curso. " imagem={FotoDoServico}/>
                <CardCSE nome="Serviço 7" descricao="Breve descrição sobre o curso, detalhamento na página de cada curso. " imagem={FotoDoServico}/>

                </div>
            <Footer />
            </div>
            
            
        
        </>
    )
}

export default PaginaGeralServicos;