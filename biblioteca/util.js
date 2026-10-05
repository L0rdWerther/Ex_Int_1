function validarEmail(email) {
    return email.includes('@') && (email.endsWith('.com') || email.endsWith('.edu.br'));
}

function validarMatricula(matricula) {
    return typeof matricula === 'string' && matricula.length >= 5;
}

function validarCPF(cpf) {
    return typeof cpf === 'string' && cpf.length === 11;
}

module.exports = { validarEmail, validarMatricula, validarCPF };
