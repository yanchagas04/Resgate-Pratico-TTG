import { ENDERECO_BACKEND } from "../ENDERECO";

export default async function AdminAuth(userCpf: string, userSenha: string) {
    const response = await fetch(ENDERECO_BACKEND + "/admin/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "cpf": userCpf, "senha": userSenha })
    });
    return await response.json()
}