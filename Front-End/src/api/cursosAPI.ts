import { Curso } from "../types/TypesCSE";
import { ENDERECO_BACKEND } from "./ENDERECO";

export async function pegarCursos(){
    const response = await fetch(ENDERECO_BACKEND + "/capacitacoes");
    return await response.json() as Curso[];
}

export async function pegarCursoId(id: string | undefined) {
    const response = await fetch(ENDERECO_BACKEND + "/capacitacoes/" + id);
    const curso : Curso = await response.json();
    return curso as Curso;
}

export async function deletarCurso(id: string | undefined) {
    const response = await fetch(ENDERECO_BACKEND + "/capacitacoes/" + id, {
        method: "DELETE"
    });
    return await response.status;
}

export async function criarCurso(curso: any) {
    const response = await fetch(ENDERECO_BACKEND + "/capacitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(curso)
    });
    return await response.status;
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