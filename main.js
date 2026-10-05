const Pessoa = require('./pessoas/Pessoa.js');
const Aluno = require('./pessoas/Aluno.js');
const Professor = require('./pessoas/Professor.js');

// Desafio Extra 2
function mostrarDados(objeto) {
    console.log(`\n=== Dados de ${objeto.constructor.name} ===`);
    console.log(`Nome: ${objeto.getNome()}`);
    console.log(`E-mail: ${objeto.getEmail()}`);
    if (objeto instanceof Aluno) console.log(`Matrícula: ${objeto.getMatricula()}`);
    if (objeto instanceof Professor) console.log(`Disciplina: ${objeto.getDisciplina()}`);
}

// 1. Cadastrar duas pessoas
const p1 = new Pessoa();
p1.setNome("Ana Silva");
p1.setEmail("ana@gmail.com");

const p2 = new Pessoa();
p2.setNome("Carlos Souza");
p2.setEmail("carlos_invalido"); // Inválido

// 2. Cadastrar dois alunos
const a1 = new Aluno();
a1.setNome("João");
a1.setEmail("joao@aluno.edu.br");
a1.setMatricula("12345");

const a2 = new Aluno();
a2.setNome("Maria");
a2.setEmail("maria@gmail.com");
a2.setMatricula("123"); // Inválido

// 3. Cadastrar dois professores
const prof1 = new Professor();
prof1.setNome("Roberto");
prof1.setEmail("roberto@escola.edu.br");
prof1.setDisciplina("Matemática");

const prof2 = new Professor();
prof2.setNome("Fernanda");
prof2.setEmail("fernanda@gmail.com"); // Inválido (.com não aceito para Professor)
prof2.setDisciplina("História");

// Relatório Final
const cadastros = [p1, p2, a1, a2, prof1, prof2];
cadastros.forEach(mostrarDados);
