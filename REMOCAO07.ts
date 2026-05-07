// exercicio 7 - remocao de produto
// JOSÉ ANTÔNIO - 2 medio

import promptSync from 'prompt-sync';
const prompt = promptSync();

interface produto {
    id: number
    nome: string
    preco: number
    ativo: number

}
// aqui eu coloquei os 6 produtos no array
const produto: produto[] = []
  frota.push ( { id: 1, nome: "Notebook Lenovo", preco: 2500.00, ativo: 21 }),
  frota.push  ({ id: 2, nome: "Mouse sem fio", preco: 89.90, ativo: 22 }),
  frota.push  ({ id: 3, nome: "Cadeira gamer", preco: 850.00, ativo: 23 }),
  frota.push  ({ id: 4, nome: "Caneta BIC", preco: 3.50, ativo: 24 }),
  frota.push  ({ id: 5, nome: "Monitor 24\"", preco: 1200.00, ativo: 25 }),
  frota.push  ({ id: 6, nome: "Mochila", preco: 120.00, ativo: 26}),

console.log("=== Produtos cadastrados ===")
for (let i = 0; i < produtos.length; i++) {
  console.log(`[${produtos[i].id}] ${produtos[i].nome} - R$ ${produtos[i].preco.toFixed(2)}`)
}

let entrada = prompt("\nDigite o ID do produto para remover: ")
let idRemover = Number(entrada)

// buscando o indice do produto no array
let indice = -1
for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].id == idRemover) {
    indice = i
  }
}

// so remove se encontrou o id
if (indice == -1) {
  console.log("Produto nao encontrado, nada foi removido.")
} else {
  let nomeRemovido = produtos[indice].nome
  produtos.splice(indice, 1)
  console.log(`Produto "${nomeRemovido}" removido com sucesso!`)
  console.log("Produtos restantes: " + produtos.length)
}
