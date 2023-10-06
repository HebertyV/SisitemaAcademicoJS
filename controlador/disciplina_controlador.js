class DisciplinaControlador {
    constructor() {
        this.servico = new DisciplinaService();
    }

    inserirDisciplina() {
        const nomeDisciplinaElemento = document.querySelector("#nomeDisciplina");
        const cargaHorariaElemento = document.querySelector("#cargaHoraria");
        const codigoElemento = document.querySelector("#Codigo");
        const disciplinaInserida = this.servico.inserir(nomeDisciplinaElemento.value, cargaHorariaElemento.value, codigoElemento.value);
        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - Carga Horária: ${disciplina.cargaHoraria} - Código: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }
}

const controladorDisciplina = new DisciplinaControlador();
