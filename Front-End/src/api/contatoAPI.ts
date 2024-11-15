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
    console.log(dados);
    const response = await fetch(ENDERECO_BACKEND + '/contato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados as dadosFormulario)
    });
    return response;
}