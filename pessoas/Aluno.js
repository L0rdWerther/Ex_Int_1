const Pessoa = require('./Pessoa.js');
const util = require('../biblioteca/util.js');

class Aluno extends Pessoa {
    #matricula;

    setMatricula(matricula) {
        if (util.validarMatricula(matricula)) {
            this.#matricula = matricula;
            return true;
        }
        return false;
    }

    getMatricula() {
        return this.#matricula;
    }
}

module.exports = Aluno;
