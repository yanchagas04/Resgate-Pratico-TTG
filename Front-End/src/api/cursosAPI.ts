import { Curso } from "../types/TypesCSE";
import { ENDERECO_BACKEND } from "./ENDERECO";

export async function pegarCursos(){
    const response = await fetch(ENDERECO_BACKEND + "/capacitacoes");
    if (!response.ok) { 
        console.log("Não foi possível requisitar os cursos! Status de Erro: " + response.status);
    }
    return await response.json() as Curso[];
}

export async function pegarCursoId(id: string | undefined) {
    const response = await fetch(ENDERECO_BACKEND + "/capacitacoes/" + id);
    if (!response.ok) {
        console.log(console.log("Não foi possível requisitar o curso! Status de Erro: " + response.status));
    }
    const curso : Curso = await response.json();
    return curso as Curso;
}

export async function deletarCurso(id: string | undefined) {
    const response = await fetch(ENDERECO_BACKEND + "/capacitacoes/" + id, {
        method: "DELETE"
    });
    if (!response.ok) {
        console.log("Não foi possível deletar o curso! Status de Erro: " + response.status);
    }
}

export async function criarCurso(curso: any) {
    const response = await fetch(ENDERECO_BACKEND + "/capacitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(curso)
    });
    if (!response.ok) {
        console.log("Não foi possível criar o curso! Status de Erro: " + response.status);
    }
}

export async function editarCurso(curso: any) {
    const response = await fetch(ENDERECO_BACKEND + "/capacitacoes/" + curso.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(curso)
    });
    return await response.status;
}