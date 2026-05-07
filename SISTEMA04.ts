// exercicio 4 - sistema de chamados tecnicos
// JOSÉ ANTÔNIO - 2 medio

interface Chamado {
  id: number

  solicitante: string
  descricao: string
  prioridade: string
  resolvido: boolean
}

// cadastrei 5 chamados
const chamados: Chamado[] = []
frota.push ( { id: 1, solicitante: "Joao Silva", descricao: "Computador nao liga", prioridade: "alta", resolvido: false }),
 frota.push ({ id: 2, solicitante: "Maria Oliveira", descricao: "Sem acesso a internet", prioridade: "alta", resolvido: false }),
 frota.push ({ id: 3, solicitante: "Pedro Santos", descricao: "Mouse com defeito", prioridade: "baixa", resolvido: true }),
frota.push  ({ id: 4, solicitante: "Ana Costa", descricao: "Tela piscando", prioridade: "media", resolvido: false }),
 frota.push ({ id: 5, solicitante: "Bruno Lima", descricao: "Teclado quebrado", prioridade: "alta", resolvido: true }),


// listando os chamados nao resolvidos
console.log("=== Chamados nao resolvidos ===")

for (let i = 0; i < chamados.length; i++) {
  if (chamados[i].resolvido == false) {
    console.log(`[${chamados[i].id}] ${chamados[i].solicitante} - ${chamados[i].descricao} | prioridade: ${chamados[i].prioridade}`)
  }
}

// contando quantos sao de prioridade alta
let contAlta = 0

for (let i = 0; i < chamados.length; i++) {
  if (chamados[i].prioridade == "alta") {
    contAlta++
  }
}

console.log("\nChamados de prioridade alta: " + contAlta)
