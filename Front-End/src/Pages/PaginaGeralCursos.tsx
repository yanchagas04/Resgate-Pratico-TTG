import Footer from '../Elements/Footer';
import Header from '../Elements/Header';
import CardCSE from '../Elements/CardCSE';
import { pegarCursos } from '../api/cursosAPI';
import { useEffect, useState } from 'react';
import { Curso } from '../types/TypesCSE';

function PaginaGeralCursos(){
    const [cursos, setCursos] = useState<Curso[]>([]);
    useEffect(() => {
        pegarCursos().then((response)=>{
            let cursosArray : Curso[] = response;
            setCursos(cursosArray);
        });
    }, [cursos]);
    return (
        <>
            
           <div className='flex flex-col justify-center items-center gap-4 w-full'>
           <Header />
                <h1 className='text-gray-950 font-[Inter] text-2xl p-2 font-bold'>CURSOS COM CERTIFICAÇÃO</h1>
                <div className='flex flex-wrap gap-4 justify-center items-center py-2 px-4'>
                    {cursos?.map((curso) => (<CardCSE key={curso.id} id={curso.id} nome={curso.nome} descricao={curso.descricao} imagem={curso.linkImagem} tipo="C"/>))}
                </div>
            <Footer />
            </div>
            
            
        
        </>
    )
}

export default PaginaGeralCursos;