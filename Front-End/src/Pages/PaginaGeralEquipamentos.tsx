import Footer from '../Elements/Footer';
import Header from '../Elements/Header';
import CardCSE from '../Elements/CardCSE';
import { useEffect, useState } from 'react';
import { Equipamento } from '../types/TypesCSE';
import { pegarEquipamentos } from '../api/equipamentosAPI';

function PaginaGeralEquipamentos(){
    const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);
    useEffect(() => {
        pegarEquipamentos().then((response)=>{
            let equipamentosArray : Equipamento[] = response;
            setEquipamentos(equipamentosArray);
        })
    }, [equipamentos]);
    return (
        <>
           <div className='flex flex-col justify-center items-center gap-4 w-full'>
           <Header />
                <h1 className='text-gray-950 font-[Inter] text-2xl p-2 font-bold'>EQUIPAMENTOS</h1>
                <div className='flex flex-wrap gap-4 justify-center items-center py-2 px-4 min-h-[70vh]'>
                    {
                    equipamentos.length > 0 &&
                    equipamentos?.map((equipamento) => (<CardCSE key={equipamento.id} id={equipamento.id} nome={equipamento.nome} descricao={equipamento.descricao} imagem={equipamento.linkImagem} tipo="E"/>))}
                    {
                        equipamentos.length === undefined &&
                        <div className='text-gray-950 font-[Inter] text-2xl p-2 font-bold'>Nenhum equipamento encontrado :(</div>
                    }
                </div>
            <Footer />
            </div>
            
            
        
        </>
    )
}

export default PaginaGeralEquipamentos;