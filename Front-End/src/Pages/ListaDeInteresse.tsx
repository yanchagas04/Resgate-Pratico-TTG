import { useContext } from "react";
import Footer from "../Elements/Footer";
import Header from "../Elements/Header";
import { CSE_Context } from "../App";
import CardCSE_Lista from "../Elements/CardCSE_Lista";
import { Curso, Equipamento, Servico } from "../types/TypesCSE";

function ListaDeInteresse() {
    const CSEcontext = useContext(CSE_Context);
    return (
        <>
            <Header />
            <div className="flex flex-col items-start py-6 p-8 gap-4">
                <h1 className="text-3xl font-bold text-center">Lista de Interesse</h1>
                <h3 className="text-2xl">Cursos</h3>
                <div className="flex flex-wrap gap-4 items-center w-full p-4 bg-slate-300 rounded-md">
                    {CSEcontext.cursos.length === 0 && <p>Nenhum curso selecionado</p>}
                    {
                        CSEcontext !== null && CSEcontext.cursos.map((curso : Curso) => {
                            return (
                                <CardCSE_Lista key={curso.id} nome={curso.nome} descricao={curso.descricao} imagem={curso.linkImagem} id={curso.id} tipo={"C"}/>
                            )
                        })
                    }
                </div>
                <h3 className="text-2xl">Serviços</h3>
                <div className="flex flex-wrap gap-4 items-center w-full p-4 bg-slate-300 rounded-md">
                    {CSEcontext.servicos.length === 0 && <p>Nenhum serviço selecionado</p>}
                    {
                        CSEcontext !== null && CSEcontext.servicos.map((servico : Servico) => {
                            return (
                                <CardCSE_Lista key={servico.id} nome={servico.nome} descricao={servico.descricao} imagem={servico.linkImagem} id={servico.id} tipo={"S"}/>
                            )
                        })
                    }
                </div>
                <h3 className="text-2xl">Equipamentos</h3>
                <div className="flex flex-wrap gap-4items-center w-full p-4 bg-slate-300 rounded-md">
                    {CSEcontext.equipamentos.length === 0 && <p>Nenhum equipamento selecionado</p>}
                    {
                        CSEcontext !== null && CSEcontext.equipamentos.map((equipamento : Equipamento) => {
                            return (
                                <CardCSE_Lista key={equipamento.id} nome={equipamento.nome} descricao={equipamento.descricao} imagem={equipamento.linkImagem} id={equipamento.id} tipo={"E"}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex justify-center p-4">
                <button className="w-fit h-fit p-4 mx-auto bg-red-700 hover:bg-red-800 duration-150 ease-in rounded-md text-white" onClick={() => {
                    window.confirm("Tem certeza que deseja limpar toda a lista?") && CSEcontext.limparTudo();
                }}>Limpar toda a lista</button>
            </div>
            <Footer />
        </>
    )
}

export default ListaDeInteresse;