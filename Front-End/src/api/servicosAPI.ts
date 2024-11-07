import { Servico } from '../types/TypesCSE';
import { ENDERECO_BACKEND } from './ENDERECO';

export async function pegarServicos() {
    const response = await fetch(ENDERECO_BACKEND + "/servicos");
    if (!response.ok) {
        console.log("Nao foi possivel pegar os servicos! Status de erro: " + response.status);
    }
    return await response.json() as Servico[];
}

export async function pegarServicoId(id: string) {
    const response = await fetch(ENDERECO_BACKEND + "/servicos/" + id);
    if (!response.ok) {
        console.log("Nao foi possivel pegar o servico! Status de erro: " + response.status);
    }
    return await response.json() as Servico;
}

export async function criarServico(servico: Servico) {
    const response = await fetch(ENDERECO_BACKEND + "/servicos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(servico)
    });
    if (!response.ok) {
        console.log("Nao foi possivel criar o servico! Status de erro: " + response.status);
    }
}

export async function editarServico(servico: Servico) {
    const response = await fetch(ENDERECO_BACKEND + "/servicos/" + servico.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(servico)
    });
    if (!response.ok) {
        console.log("Nao foi possivel editar o servico! Status de erro: " + response.status);
    }
}

export async function deletarServico(id: string) {
    const response = await fetch(ENDERECO_BACKEND + "/servicos/" + id, {
        method: "DELETE"
    });
    if (!response.ok) {
        console.log("Nao foi possivel deletar o servico! Status de erro: " + response.status);
    }
}