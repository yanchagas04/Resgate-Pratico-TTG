import { Link } from "react-router-dom";
import { deletarCurso } from "../../api/cursosAPI";
import { deletarEquipamento } from "../../api/equipamentosAPI";
import { deletarServico } from "../../api/servicosAPI";
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

interface EditableCSEProps {
    nome: string,
    descricao: string,
    imagem: string,
    id: string,
    tipo: string
}
  
function EditableCardCSE(props : EditableCSEProps){
    return (
        <div className="bg-red-700 w-72 h-[500px] p-3 rounded-lg flex flex-col gap-2 items-center aspect-square">
            <img className="rounded-md size-64 object-cover" src={props.imagem} />
            <h3 className="w-full text-xl font-bold text-white font-[inter]">{props.nome}</h3>
            <p className="w-full overflow-hidden line-clamp-3 text-justify leading-relaxed h-full break-words hyphens-auto indent-4 text-white font-[inter]">{props.descricao}</p>
            <Link to={"/admin/editor/" + props.tipo + "/" + props.id} className="w-full">
                <button className="w-full bg-slate-200 hover:bg-slate-300 duration-150 ease-in rounded-md text-center p-2 hover:scale-105 font-[inter]">Editar</button>
            </Link>
            <button className="w-full bg-slate-200 hover:bg-slate-300 duration-150 ease-in rounded-md text-center p-2 hover:scale-105 font-[inter]" onClick={async () => {
                let response, confirmacao = window.confirm("Tem certeza que deseja deletar?");
                if (confirmacao) {
                    if (props.tipo === "C") {
                        response = await deletarCurso(props.id);
                    } else if (props.tipo === "S") {
                        response = await deletarServico(props.id);
                    } else if (props.tipo === "E") {
                        response = await deletarEquipamento(props.id);
                    }
                    if (response === 204) {
                        notificacaoSucesso();
                    } else {
                        notificacaoErro();
                    }
                }
            }}>Deletar</button>
        </div>
    )  
}

export default EditableCardCSE;