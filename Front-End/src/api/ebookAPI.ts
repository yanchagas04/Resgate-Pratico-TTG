import { Ebook } from "../types/TypesCSE";
import { ENDERECO_BACKEND } from "./ENDERECO";

export async function pegarEbooks() {
    const response = await fetch( ENDERECO_BACKEND + '/ebooks');
    return await response.json() as Ebook[];
}

export async function pegarEbookId(id: string | undefined) {
    const response = await fetch( ENDERECO_BACKEND + '/ebooks/' + id);
    console.log(response);
    return await response.json() as Ebook;
}

export async function deletarEbook(id: string | undefined) {
    const response = await fetch( ENDERECO_BACKEND + '/ebooks/' + id, {
        method: "DELETE"
    });
    return await response.status;
}

export async function criarEbook(ebook: Ebook) {
    const response = await fetch( ENDERECO_BACKEND + '/ebooks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: ebook.nome,
            descricao: ebook.descricao,
            linkDownload: ebook.linkDownload
        })
    });
    return await response.status;
}

export async function editarEbook(ebook: Ebook) {
    const response = await fetch( ENDERECO_BACKEND + '/ebooks/' + ebook.id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: ebook.nome,
            descricao: ebook.descricao,
            linkDownload: ebook.linkDownload
        })
    });
    return await response.status;
}