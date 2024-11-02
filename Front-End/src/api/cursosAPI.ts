import { CardCursoServicoEquipamentoProps } from "../Elements/CardCSE";

export async function pegarCursos(){
    const response = await fetch("http://localhost:3000/capacitacoes");
    if (!response.ok) {
        console.log("Deu merda!");
    }
    const cursos : CardCursoServicoEquipamentoProps[] = await response.json();
    console.log(cursos);
}