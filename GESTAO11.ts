// boss final - gestao de frota profissional
// JOSÉ ANTÔNIO - 2 medio

import promptSync from "prompt-sync"
const prompt = promptSync()

interface Veiculo {
      id: number
     marca: string
     modelo: string
  precoDia: number
      disponivel: boolean
}

const frota: Veiculo[] = []
let proximoId = 1
let opcao = ""

while (opcao != "7") {
   console.log("\n=== Sistema de Gestao de Frota ===")
    console.log("1 - Cadastrar veiculo")
    console.log("2 - Listar todos")
   console.log("3 - Listar disponiveis")
   console.log("4 - Alugar veiculo")
     console.log("5 - Devolver veiculo")
     console.log("6 - Remover veiculo")
   console.log("7 - Sair")

  opcao = prompt("Escolha uma opcao: ")

  // cadastrar veiculo
  if (opcao == "1") {
      let marca = prompt("Marca: ")
       let modelo = prompt("Modelo: ")
         let entradaPreco = prompt("Preco por dia: ")
        let precoDia = Number(entradaPreco)

    // validando campos vazios e preco invalido
    if (marca == "" || modelo == "") {
        console.log("Marca e modelo nao podem ser vazios.")
    } else if (isNaN(precoDia) || precoDia <= 0) {
      console.log("Preco invalido.")
    } else {
      let novoVeiculo: Veiculo = {
           id: proximoId,
           marca: marca,
             modelo: modelo,
               precoDia: precoDia,
              disponivel: true
      }
      frota.push(novoVeiculo)
         proximoId++
      console.log("Veiculo cadastrado! ID: " + novoVeiculo.id)
    }

  // listar todos
  } else if (opcao == "2") {
    if (frota.length == 0) {
         console.log("Nenhum veiculo cadastrado.")
    } else {
      console.log("\n--- Todos os Veiculos ---")
        for (let i = 0; i < frota.length; i++) {
        let status = ""
           if (frota[i].disponivel == true) {
          status = "Disponivel"
        } else {
          status = "Alugado"
        }
          console.log(`[${frota[i].id}] ${frota[i].marca} ${frota[i].modelo} | R$ ${frota[i].precoDia.toFixed(2)}/dia | ${status}`)
      }
    }

  // listar disponiveis
  } else if (opcao == "3") {
    let temDisponivel = false
       console.log("\n--- Veiculos Disponiveis ---")
    for (let i = 0; i < frota.length; i++) {
      if (frota[i].disponivel == true) {
           console.log(`[${frota[i].id}] ${frota[i].marca} ${frota[i].modelo} | R$ ${frota[i].precoDia.toFixed(2)}/dia`)
        temDisponivel = true
      }
    }
    if (temDisponivel == false) {
      console.log("Nenhum veiculo disponivel no momento.")
       }

  // alugar
  }   else if (opcao == "4") {
    let entradaId = prompt("Digite o ID do veiculo para alugar: ")
      let idVeiculo = Number(entradaId)

    if (isNaN(idVeiculo)) {
      console.log("ID invalido.")
      } else {
      let achou = false
      for (let i = 0; i < frota.length; i++) {
        if (frota[i].id == idVeiculo) {
          achou = true
          if (frota[i].disponivel == false) {
               console.log("Esse veiculo ja esta alugado.")
          } else {
            frota[i].disponivel = false
            console.log(`Veiculo ${frota[i].marca} ${frota[i].modelo} alugado com sucesso!`)
           }
        }
      }
      if (achou == false) {
        console.log("Veiculo nao encontrado.")
        }
    }

  // devolver
  } else if (opcao == "5") {
    let entradaId = prompt("Digite o ID do veiculo para devolver: ")
        let idVeiculo = Number(entradaId)

    if (isNaN(idVeiculo)) {
      console.log("ID invalido.")
    } else {
        let achou = false
         for (let i = 0; i < frota.length; i++) {
        if (frota[i].id == idVeiculo) {
          achou = true
          if (frota[i].disponivel == true) {
            console.log("Esse veiculo ja esta disponivel.")
              } else {
            frota[i].disponivel = true
            console.log(`Veiculo ${frota[i].marca} ${frota[i].modelo} devolvido!`)
          }
        }
      }
       if (achou == false) {
        console.log("Veiculo nao encontrado.")
      }
    }

  // remover
  } else if (opcao == "6") {
    let entradaId = prompt("Digite o ID do veiculo para remover: ")
     let idVeiculo = Number(entradaId)

    if (isNaN(idVeiculo)) {
      console.log("ID invalido.")
    } else {
      let indice = -1
      for (let i = 0; i < frota.length; i++) {
        if (frota[i].id == idVeiculo) {
          indice = i
        }
      }

      if (indice == -1) {
        console.log("Veiculo nao encontrado, nada foi removido.")
      } else {
        let nomeRemovido = frota[indice].marca + " " + frota[indice].modelo
        frota.splice(indice, 1)
        console.log(`Veiculo ${nomeRemovido} removido da frota.`)
      }
    }

  } else if (opcao == "7") {
        console.log("Sistema encerrado!")
  } else {
    console.log("Opcao invalida, tente de novo.")
  }
}
