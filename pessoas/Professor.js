const Pessoa = require('./Pessoa.js');

class Professor extends Pessoa {
    #disciplina;

    setDisciplina(disciplina) {
        this.#disciplina = disciplina;
        return true;
    }

    getDisciplina() {
        return this.#disciplina;
    }

    // Sobrescrita do método
    setEmail(email) {
        if (email.endsWith('.edu.br')) {
            return super.setEmail(email);
        }
        return false;
    }
}

module.exports = Professor;
