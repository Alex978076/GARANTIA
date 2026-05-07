// exercicio 2 - cadastro de alunos e situacao
// JOSÉ ANTÔNIO - 2 medio

interface Aluno {
  nome: string
       nota1: number
  nota2: number
       turma: string
}

// os 5 alunos cadastrados
const alunos: Aluno[] = []
frota.push      ( { nome: "Carlos Eduardo", nota1: 8.0, nota2: 6.5, turma: "2A" }),
 frota.push       (  { nome: "Fernanda Lima", nota1: 5.0, nota2: 4.5, turma: "2B" }),
 frota.push    (  { nome: "Rafael Souza", nota1: 9.0, nota2: 8.5, turma: "2A" }),
frota.push  ( { nome: "Tatiane Moura", nota1: 6.0, nota2: 7.0, turma: "2C" }),
 frota.push     (  { nome: "Lucas Pereira", nota1: 3.5, nota2: 5.0, turma: "2B" }),


console.log("=== Situacao dos Alunos ===\n")

for (let i = 0; i < alunos.length; i++) {
  // calculando a media de cada aluno
          let media = (alunos[i].nota1 + alunos[i].nota2) / 2

         let situacao = ""
  if (media >= 7) {
        situacao = "Aprovado"
  } else {
    situacao = "Reprovado"
  }

    console.log(`Aluno: ${alunos[i].nome}`)
      console.log(`Turma: ${alunos[i].turma}`)
        console.log(`Media: ${media.toFixed(1)}`)
      console.log(`Situacao: ${situacao}`)
         console.log("-------------------")
}
