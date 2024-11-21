export interface EbookProps {
    id: string,
    nome: string,
    descricao: string,
    linkDowload: string
}

export default function CardEbook(props: EbookProps) {
    return (
        <div className="flex flex-col w-72 h-80 shadow-md">
            <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/04/Kobo-Clara-2E-review-4.jpeg" alt="Foto Ebook" className="object-cover aspect-video w-full rounded-t-lg"/>
            <div className="flex flex-col p-4 bg-red-700 w-full h-full rounded-b-lg">
                <h3 className="text-xl text-white font-bold h-fit">{props.nome}</h3>
                <p className="text-white h-full">{props.descricao}</p>
                <a href={props.linkDowload} className="w-full bg-white px-4 py-2 rounded-md hover:bg-slate-200 duration-150 ease-in hover:scale-105 text-center">Baixar</a>
            </div>
        </div>
    )
}