import { Equipamento } from "../types/TypesCSE";
import { ENDERECO_BACKEND } from "./ENDERECO";

export async function pegarEquipamentos() {
    const response = await fetch(ENDERECO_BACKEND + "/equipamentos");
    if (!response.ok) {
        console.log("Nao foi possivel pegar os equipamentos! Status de erro: " + response.status);
    }
    return await response.json() as Equipamento[];
}

export async function pegarEquipamentoId(id: string) {
    const response = await fetch(ENDERECO_BACKEND + "/equipamentos/" + id);
    if (!response.ok) {
        console.log("Nao foi possivel pegar o equipamento! Status de erro: " + response.status);
    }
    return await response.json() as Equipamento;
}

export async function criarEquipamento(equipamento: Equipamento) {
    const response = await fetch(ENDERECO_BACKEND + "/equipamentos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(equipamento)
    });
    if (!response.ok) {
        console.log("Nao foi possivel criar o equipamento! Status de erro: " + response.status);
    }
}

export async function editarEquipamento(equipamento: Equipamento) {
    const response = await fetch(ENDERECO_BACKEND + "/equipamentos/" + equipamento.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(equipamento)
    });
    if (!response.ok) {
        console.log("Nao foi possivel editar o equipamento! Status de erro: " + response.status);
    }
}

export async function deletarEquipamento(id: string) {
    const response = await fetch(ENDERECO_BACKEND + "/equipamentos/" + id, {
        method: "DELETE"
    });
    if (!response.ok) {
        console.log("Nao foi possivel deletar o equipamento! Status de erro: " + response.status);
    }
}