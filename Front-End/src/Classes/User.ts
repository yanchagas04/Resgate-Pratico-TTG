export default class User {
    usuario: string;
    senha: string;
    constructor() {
        this.usuario = "";
        this.senha = "";
    }

    login(user: string, senha: string) {
        this.usuario = user;
        this.senha = senha;
    }

    logout() {
        this.usuario = "";
        this.senha = "";
    }

    notLogged() {
        if (this.usuario !== "") {
            return false;
        }
        return true;
    }
}