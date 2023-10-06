class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, cargaHoraria, codigo) {
        const disciplinaNova = new Disciplina(nome, cargaHoraria, codigo);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }
}
