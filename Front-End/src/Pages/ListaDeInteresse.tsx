import { useContext } from "react";
import Footer from "../Elements/Footer";
import Header from "../Elements/Header";
import { CSE_Context } from "../App";
import CardCSE_Lista from "../Elements/CardCSE_Lista";
import imgTeste from "../assets/FotoDoCurso.png";

function ListaDeInteresse() {
    const CSEcontext = useContext(CSE_Context);
    CSEcontext.addCurso({
        id: '1',
        nome: "Curso 1",
        descricao: "Descricão do curso 1",
        imagem: imgTeste,
        aprendizados: [],
    });
    CSEcontext.addServico({
        id: '1',
        nome: "Serviço 1",
        descricao: "Descricão do serviço 1",
        imagem: imgTeste,
        beneficios: [],
    })
    return (
        <>
            <Header />
            <div className="flex flex-col items-start py-6 min-h-screen p-8 gap-4">
                <h1 className="text-3xl font-bold text-center">Lista de Interesse</h1>
                <h3 className="text-2xl">Cursos</h3>
                <div className="flex flex-wrap gap-4 items-center w-full p-4 bg-slate-300">
                    {CSEcontext.cursos.length === 0 && <p>Nenhum curso selecionado</p>}
                    {
                        CSEcontext.cursos.map((curso) => {
                            return (
                                <CardCSE_Lista nome={curso.nome} descricao={curso.descricao} imagem={curso.imagem} id={curso.id} tipo={"C"}/>
                            )
                        })
                    }
                </div>
                <h3 className="text-2xl">Serviços</h3>
                <div className="flex flex-wrap gap-4 items-center w-full p-4 bg-slate-300">
                    {CSEcontext.servicos.length === 0 && <p>Nenhum serviço selecionado</p>}
                    {
                        CSEcontext.servicos.map((servico) => {
                            return (
                                <CardCSE_Lista nome={servico.nome} descricao={servico.descricao} imagem={servico.imagem} id={servico.id} tipo={"S"}/>
                            )
                        })
                    }
                </div>
                <h3 className="text-2xl">Equipamentos</h3>
                <div className="flex flex-wrap gap-4items-center w-full p-4 bg-slate-300">
                    {CSEcontext.equipamentos.length === 0 && <p>Nenhum equipamento selecionado</p>}
                    {
                        CSEcontext.equipamentos.map((equipamento) => {
                            return (
                                <CardCSE_Lista nome={equipamento.nome} descricao={equipamento.descricao} imagem={equipamento.imagem} id={equipamento.id} tipo={"E"}/>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ListaDeInteresse;