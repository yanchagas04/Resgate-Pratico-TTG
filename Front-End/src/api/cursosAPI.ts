import { Curso } from "../types/TypesCSE";
const ENDERECO_BACKEND = "http://localhost:3000";

export async function pegarCursos(){
    const response = await fetch(ENDERECO_BACKEND + "/capacitacoes");
    if (!response.ok) {
        console.log("Não foi possível requisitar os cursos! Status de Erro: " + response.status);
    }
    const cursos : Curso[] = await response.json();
    return cursos;
}

export async function pegarCursoId(id: string | undefined) {
    const response = await fetch(ENDERECO_BACKEND + "/capacitacoes/" + id);
    if (!response.ok) {
        console.log(console.log("Não foi possível requisitar o curso! Status de Erro: " + response.status));
    }
    const curso : Curso = await response.json();
    return curso;
}