import {Curso, Equipamento, Servico} from "../types/TypesCSE";

class ContextCSE {
    cursos: Curso[];
    equipamentos: Equipamento[];
    servicos: Servico[];
    constructor(cursos: [], equipamentos: [], servicos: []) {
        this.cursos = cursos;
        this.equipamentos = equipamentos;
        this.servicos = servicos;
    }

    //GETTERS
    getCursos(): Array<Curso> { return this.cursos; }
    getEquipamentos(): Array<Equipamento> { return this.equipamentos; }
    getServicos(): Array<Servico> { return this.servicos; }

    //ADD
    addCurso(curso: Curso) {
        if (this.cursos.find((c) => c.id === curso.id) !== undefined) return -1;
        this.cursos.push(curso);
        this.atualizarLocalStorage();
    }

    addEquipamento(equipamento: Equipamento) {
        if (this.equipamentos.find((e) => e.id === equipamento.id) !== undefined) return -1;
        this.equipamentos.push(equipamento);
        this.atualizarLocalStorage();
    }

    addServico(servico: Servico) {
        if (this.servicos.find((s) => s.id === servico.id) !== undefined) return -1;
        this.servicos.push(servico);
        this.atualizarLocalStorage();
    }

    removerCurso(id: string) {
        delete this.cursos[this.cursos.findIndex((c) => c.id === id)];
        this.atualizarLocalStorage();
    }

    removerEquipamento(id: string) {
        delete this.equipamentos[this.equipamentos.findIndex((e) => e.id === id)];
        this.atualizarLocalStorage();
    }

    removerServico(id: string) {
        delete this.servicos[this.servicos.findIndex((s) => s.id === id)];
        this.atualizarLocalStorage();
    }

    limparTudo() {
        this.cursos = [];
        this.equipamentos = [];
        this.servicos = [];
        this.atualizarLocalStorage();
    }

    atualizarLocalStorage() {
        localStorage.setItem("cursos", JSON.stringify(this.cursos));
        localStorage.setItem("equipamentos", JSON.stringify(this.equipamentos));
        localStorage.setItem("servicos", JSON.stringify(this.servicos));
    }
}

export default ContextCSE