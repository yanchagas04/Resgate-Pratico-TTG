import { ENDERECO_BACKEND } from "../ENDERECO";

export default async function AdminAuth(nome: string, userSenha: string) {
    const response = await fetch(ENDERECO_BACKEND + "/admin/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "nome": nome, "senha": userSenha })
    });
    return await response.json()
}