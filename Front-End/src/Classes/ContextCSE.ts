import Curso from "../Elements/Interfaces/Curso";
import Servico from "../Elements/Interfaces/Servico"
import Equipamento from "../Elements/Interfaces/Equipamento";

class ContextCSE {
    cursos: Array<Curso>;
    equipamentos: Array<Equipamento>;;
    servicos: Array<Servico>;
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
        this.cursos.push(curso);
    }

    addEquipamento(equipamento: Equipamento) {
        this.equipamentos.push(equipamento);
    }

    addServico(servico: Servico) {
        this.servicos.push(servico);
    }
}

export default ContextCSE