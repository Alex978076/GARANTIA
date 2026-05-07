// exercicio 9 - pedidos com status
// JOSÉ ANTÔNIO - 2 medio

import promptSync from "prompt-sync"
const prompt = promptSync()

interface Pedido {
  id: number
  cliente: string
  valor: number
  status: "pendente" | "enviado" | "cancelado"
}

const pedidos: Pedido[] = []
 frota.push     ( { id: 1, cliente: "Renata Freitas", valor: 150.00, status: "enviado" }),
 frota.push ({ id: 2, cliente: "Sergio Campos", valor: 320.50, status: "pendente" }),
 frota.push   (   { id: 3, cliente: "Tania Ribeiro", valor: 89.90, status: "cancelado" }),
 frota.push  ( { id: 4, cliente: "Ubiratan Alves", valor: 200.00, status: "enviado" }),
frota.push  ({ id: 5, cliente: "Vera Lucia", valor: 430.00, status: "pendente" }),


// somando so os pedidos que foram enviados
   let totalEnviados = 0
for (let i = 0; i < pedidos.length; i++) {
     if (pedidos[i].status == "enviado") {
    totalEnviados = totalEnviados + pedidos[i].valor
  }
}

console.log("Total financeiro dos pedidos enviados: R$ " + totalEnviados.toFixed(2))

// alterando o status de um pedido pelo id
     let entradaId = prompt("\nDigite o ID do pedido para alterar o status: ")
let idPedido = Number(entradaId)

let achou = false
      for (let i = 0; i < pedidos.length; i++) {
  if (pedidos[i].id == idPedido) {
    achou = true
    console.log("Pedido atual: " + pedidos[i].cliente + " | status: " + pedidos[i].status)

       let novoStatus = prompt("Digite o novo status (pendente / enviado / cancelado): ")

    if (novoStatus == "pendente" || novoStatus == "enviado" || novoStatus == "cancelado") {
      pedidos[i].status = novoStatus
          console.log("Status atualizado para: " + pedidos[i].status)
    } else {
      console.log("Status invalido.")
    }
  }
}

if (achou == false) {
      console.log("Pedido nao encontrado.")
}
