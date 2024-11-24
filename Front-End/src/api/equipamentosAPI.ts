import { Equipamento } from "../types/TypesCSE";
import { ENDERECO_BACKEND } from "./ENDERECO";

export async function pegarEquipamentos() {
    const response = await fetch(ENDERECO_BACKEND + "/equipamentos");
    return await response.json() as Equipamento[];
}

export async function pegarEquipamentoId(id: string | undefined) {
    const response = await fetch(ENDERECO_BACKEND + "/equipamentos/" + id);
    return await response.json() as Equipamento;
}

export async function criarEquipamento(equipamento: any) {
    const response = await fetch(ENDERECO_BACKEND + "/equipamentos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(equipamento)
    });
    return await response.status;
}

export async function editarEquipamento(equipamento: any) {
    const response = await fetch(ENDERECO_BACKEND + "/equipamentos/" + equipamento.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(equipamento)
    });
    return await response.status;
}

export async function deletarEquipamento(id: string | undefined) {
    const response = await fetch(ENDERECO_BACKEND + "/equipamentos/" + id, {
        method: "DELETE"
    });
    return await response.status;
}