import { ENDERECO_BACKEND } from "./ENDERECO";

export type dadosFormulario = {
    nome: string,
    email: string,
    telefone: string,
    curso: string,
    servico: string,
    equipamento: string
}

export default async function enviarDadosFormulario(dados: dadosFormulario) {
    const response = await fetch(ENDERECO_BACKEND + '/contato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nome": dados.nome,
            "email": dados.email,
            "telefone": dados.telefone,
            "curso": dados.curso,
            "servico": dados.servico,
            "equipamento": dados.equipamento
        } as dadosFormulario)
    });
    return response.status;
}