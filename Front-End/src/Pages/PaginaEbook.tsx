import { useState, useEffect } from "react";
import { pegarEbooks } from "../api/ebookAPI";
import { Ebook } from "../types/TypesCSE";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import CardEbook from "../Elements/CardEbook";

export default function PaginaEbook() {
    const [ebook, setEbook] = useState<Ebook[]>([]);
    useEffect(() => {
        pegarEbooks().then((ebook) => {
            let ebookArray : Ebook[] = ebook;
            setEbook(ebookArray);
        });
    }, [ebook]);
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-4 w-full'>
            <Header />
                    <h1 className='text-gray-950 font-[Inter] text-2xl p-2 font-bold'>EBOOKS GRATUITOS</h1>
                    <div className='flex flex-wrap gap-4 justify-center items-center py-2 px-4 min-h-[70vh]'>
                        {
                        ebook.length > 0 &&
                        ebook?.map((ebook) => (<CardEbook key={ebook.id} id={ebook.id} nome={ebook.nome} descricao={ebook.descricao} linkDowload={ebook.linkDownload}/>))}
                        {
                            ebook.length === undefined &&
                            <h1 className='text-gray-950 font-[Inter] text-2xl p-2 font-bold'>Nenhum ebook encontrado :(</h1>
                        }
                    </div>
                <Footer />
            </div>
        </>
    )
}