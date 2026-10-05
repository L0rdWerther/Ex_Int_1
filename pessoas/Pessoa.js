const util = require('../biblioteca/util.js');

class Pessoa {
    #nome;
    #email;

    setNome(nome) {
        this.#nome = nome;
        return true;
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
        if (util.validarEmail(email)) {
            this.#email = email;
            return true;
        }
        return false;
    }

    getEmail() {
        return this.#email;
    }
}

module.exports = Pessoa;
