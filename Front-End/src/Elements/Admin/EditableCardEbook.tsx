import { Link } from "react-router-dom";
import { deletarEbook } from "../../api/ebookAPI";
import { EbookProps } from "../CardEbook";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notificacaoSucesso = () => toast.success('Deletado com sucesso!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
const notificacaoErro = () => toast.error('Erro do servidor!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });

export default function EditableCardEbook(props: EbookProps) {
    return (
        <div className="flex flex-col w-72 h-96 shadow-md">
            <img src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/04/Kobo-Clara-2E-review-4.jpeg" alt="Foto Ebook" className="object-cover aspect-video w-full rounded-t-lg"/>
            <div className="flex flex-col p-4 bg-red-700 w-full h-full rounded-b-lg gap-2">
                <h3 className="text-xl text-white font-bold h-fit">{props.nome}</h3>
                <p className="text-white h-full">{props.descricao}</p>
                <Link to={"/admin/editor/EB/" + props.id}>
                    <button className="w-full bg-white px-4 py-2 rounded-md hover:bg-slate-200 duration-150 ease-in hover:scale-105">Editar</button>
                </Link>
                <button className="w-full bg-white px-4 py-2 rounded-md hover:bg-slate-200 duration-150 ease-in hover:scale-105" onClick={async() => {
                    let confirmacao = window.confirm("Tem certeza que deseja deletar?");
                    if (confirmacao) {
                        const response = await deletarEbook(props.id);
                        if (response === 204) {
                            notificacaoSucesso();
                        } else {
                            notificacaoErro();
                        }
                    }
                }}>Excluir</button>
            </div>
        </div>
    )
}