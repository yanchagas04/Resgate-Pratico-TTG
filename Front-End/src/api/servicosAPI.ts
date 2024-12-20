import { Servico } from '../types/TypesCSE';
import { ENDERECO_BACKEND } from './ENDERECO';

export async function pegarServicos() {
    const response = await fetch(ENDERECO_BACKEND + "/servicos");
    return await response.json() as Servico[];
}

export async function pegarServicoId(id: string | undefined) {
    const response = await fetch(ENDERECO_BACKEND + "/servicos/" + id);
    return await response.json() as Servico;
}

export async function criarServico(servico: any) {
    const response = await fetch(ENDERECO_BACKEND + "/servicos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(servico)
    });
    return await response.status;
}

export async function editarServico(servico: any) {
    const response = await fetch(ENDERECO_BACKEND + "/servicos/" + servico.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(servico)
    });
    return await response.status;
}

export async function deletarServico(id: string | undefined) {
    const response = await fetch(ENDERECO_BACKEND + "/servicos/" + id, {
        method: "DELETE"
    });
    return await response.status;
}