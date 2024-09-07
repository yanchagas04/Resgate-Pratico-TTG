import CardCurso from "../Elements/CardCursoServico";
import imagem from "../assets/exemploCurso.png"

function Teste(){
    return (
        <div className="flex flex-wrap flex-row gap-4 p-4 justify-center">
            <CardCurso nome="teste" imagem={imagem} descricao="teste"/>
            <CardCurso nome="teste" imagem={imagem} descricao="teste"/>
            <CardCurso nome="teste" imagem={imagem} descricao="teste"/>
            <CardCurso nome="teste" imagem={imagem} descricao="teste"/>
            <CardCurso nome="teste" imagem={imagem} descricao="teste"/>
            <CardCurso nome="teste" imagem={imagem} descricao="teste"/>
            <CardCurso nome="teste" imagem={imagem} descricao="teste"/>
            <CardCurso nome="teste" imagem={imagem} descricao="teste"/>
            <CardCurso nome="teste" imagem={imagem} descricao="teste"/>
            <CardCurso nome="teste" imagem={imagem} descricao="teste"/>
            <CardCurso nome="teste" imagem={imagem} descricao="teste"/>
        </div>
    )
}

export default Teste;