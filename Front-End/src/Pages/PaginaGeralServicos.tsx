import Footer from '../Elements/Footer';
import Header from '../Elements/Header';
import CardCSE from '../Elements/CardCSE';
import { useEffect, useState } from 'react';
import { Servico } from '../types/TypesCSE';
import { pegarServicos } from '../api/servicosAPI';

function PaginaGeralServicos(){
    const [servicos, setServicos] = useState<Servico[]>([]);
    useEffect(() => {
        pegarServicos().then((response)=>{
            let servicosArray : Servico[] = response;
            setServicos(servicosArray);
        })
    }, [servicos]);
    return (
        <>
            
           <div className='flex flex-col min-h-screen justify-start items-center gap-4 w-full'>
           <Header />
                <h1 className='text-gray-950 font-[Inter] text-2xl p-2 font-bold'>SERVIÇOS</h1>
                <div className='flex flex-wrap gap-4 justify-center items-center py-2 px-4 min-h-[70vh]'>
                    {
                        servicos.length > 0 &&
                        servicos?.map((servico) => (<CardCSE key={servico.id} id={servico.id} nome={servico.nome} descricao={servico.descricao} imagem={servico.linkImagem} tipo="S"/>))
                    }
                    {
                        servicos.length === undefined &&
                        <div className='text-gray-950 font-[Inter] text-2xl p-2 font-bold'>Nenhum serviço encontrado :(</div>
                    }
                </div>
            <Footer />
            </div>
            
            
        
        </>
    )
}

export default PaginaGeralServicos;