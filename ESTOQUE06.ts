// exercicio 6 - atualizacao de estoque
// JOSÉ ANTÔNIO - 2 medio

import promptSync from "promptSync"
const prompt = promptSync()

interface ItemEstoque {
  id: number
    nome: string
     quantidade: number
  minimo: number
}

const estoque: ItemEstoque[] = [
  { id: 1, nome: "Papel A4", quantidade: 10, minimo: 5 },
       { id: 2, nome: "Caneta azul", quantidade: 30, minimo: 10 },
         { id: 3, nome: "Toner impressora", quantidade: 3, minimo: 2 },
  { id: 4, nome: "Grampeador", quantidade: 5, minimo: 3 },
]

      console.log("=== Estoque atual ===")
for (let i = 0; i < estoque.length; i++) {
  console.log(`[${estoque[i].id}] ${estoque[i].nome} - quantidade: ${estoque[i].quantidade}`)
}

// pedindo o id e a nova quantidade
    let entradaId = prompt("\nDigite o ID do item: ")
let idItem = Number(entradaId)

    let entradaQtd = prompt("Digite a nova quantidade: ")
let novaQtd = Number(entradaQtd)

// validando se os numeros sao validos
if (isNaN(idItem) || isNaN(novaQtd) || novaQtd < 0) {
          console.log("Valor invalido, tente novamente.")
} else {
  let achou = false

  for (let i = 0; i < estoque.length; i++) {
    if (estoque[i].id == idItem) {
      achou = true
      estoque[i].quantidade = novaQtd
       console.log(`\nItem "${estoque[i].nome}" atualizado!`)
      console.log("Nova quantidade: " + estoque[i].quantidade)

      // avisando se ficou abaixo do minimo
      if (estoque[i].quantidade < estoque[i].minimo) {
        console.log("ATENCAO: quantidade abaixo do minimo permitido (" + estoque[i].minimo + ")")
      }
    }
  }

  if (achou == false) {
      console.log("Item nao encontrado.")
  }
}
