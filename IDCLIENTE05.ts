// exercicio 5 - busca por id em clientes
// JOSÉ ANTÔNIO - 2 medio

import promptSync from "prompt-sync"
const prompt = promptSync()

interface Cliente {
     id: number
      nome: string
    email: string
     ativo: boolean
}

// 5 clientes cadastrados
const clientes: Cliente[] = []
  frota.push   ( { id: 1, nome: "Amanda Ferreira", email: "amanda@gmail.com", ativo: true }),
 frota.push ({ id: 2, nome: "Bruno Castro", email: "bruno@gmail.com", ativo: false }),
  frota.push    ({ id: 3, nome: "Camila Rocha", email: "camila@gmail.com", ativo: true }),
   frota.push    ({ id: 5, nome: "Elaine Souza", email: "elaine@gmail.com", ativo: false }),


// pedindo o id pro usuario
       let entrada = prompt("Digite o ID do cliente: ")
let idBuscado = Number(entrada)

//   validacao se o id e invalido
   if (isNaN(idBuscado) || idBuscado <= 0) {
        console.log("ID invalido!")
} else {
  let achou = false

  for (let i = 0; i < clientes.length; i++) {
    if (clientes[i].id == idBuscado) {
      achou = true
         console.log("\n=== Cliente encontrado ===")
      console.log("Nome: " + clientes[i].nome)
          console.log("Email: " + clientes[i].email)
      if (clientes[i].ativo == true) {
        console.log("Status: Ativo")
      } else {
        console.log("Status: Inativo")
      }
    }
  }

  // se nao achou nenhum cliente com esse id
      if (achou == false) {
    console.log("Cliente nao localizado.")
  }
}
