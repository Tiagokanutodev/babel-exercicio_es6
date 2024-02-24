// Criar um array vazio para armazenar os pares nome e nota
var alunos = [];

// Adicionar um par nome e nota ao array
function adicionarAluno(nome, nota) {
  var aluno = {
    nome: nome,
    nota: nota
  };
  alunos.push(aluno);
}

// Função para exibir os alunos com nota maior ou igual a 6
function exibirAlunosComNotaMaiorOuIgualASeis() {
  console.log("Alunos com nota maior ou igual a 6:");
  for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 6) {
      console.log("Aluno: " + alunos[i].nome + ", Nota: " + alunos[i].nota);
    }
  }
}

// Exemplo de adição de alunos
adicionarAluno("João", 8);
adicionarAluno("Maria", 7);
adicionarAluno("Pedro", 6);
adicionarAluno("Ana", 5);

// Chamada da função para exibir os alunos com nota maior ou igual a 6
exibirAlunosComNotaMaiorOuIgualASeis();