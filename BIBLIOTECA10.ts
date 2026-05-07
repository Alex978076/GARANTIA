// exercicio 10 - mini crud de biblioteca
// JOSÉ ANTÔNIO - 2 medio

import promptSync from "prompt-sync"
const prompt = promptSync()

interface Livro {
  id: number
  titulo: string
  autor: string
  disponivel: boolean
}

const biblioteca: Livro[] = []
let proximoId = 1
let opcao = ""

while (opcao != "5") {
     console.log("\n=== Biblioteca Escolar ===")
      console.log("1 - Cadastrar livro")
        console.log("2 - Listar livros")
          console.log("3 - Emprestar livro")
           console.log("4 - Devolver livro")
             console.log("5 - Sair")

   opcao = prompt("Escolha uma opcao: ")

  // cadastrar
  if (opcao == "1") {
    let titulo = prompt("Titulo do livro: ")
         let autor = prompt("Autor: ")

    if (titulo == "" || autor == "") {
      console.log("Titulo e autor nao podem ser vazios.")
    } else {
      let novoLivro: Livro = {
          id: proximoId,
        titulo: titulo,
           autor: autor,
        disponivel: true
      }
      biblioteca.push(novoLivro)
      proximoId++
        console.log("Livro cadastrado com sucesso!")
    }

  // listar
  } else if (opcao == "2") {
    if (biblioteca.length == 0) {
        console.log("Nenhum livro cadastrado ainda.")
    } else {
        console.log("\n--- Livros ---")
      for (let i = 0; i < biblioteca.length; i++) {
        let status = ""
         if (biblioteca[i].disponivel == true) {
          status = "Disponivel"
         } else {
          status = "Emprestado"
        }
        console.log(`[${biblioteca[i].id}] ${biblioteca[i].titulo} - ${biblioteca[i].autor} | ${status}`)
      }
    }

  // emprestar
  }  else if (opcao == "3") {
       let entradaId = prompt("Digite o ID do livro para emprestar: ")
    let idLivro = Number(entradaId)

       let achou = false
    for (let i = 0; i < biblioteca.length; i++) {
      if (biblioteca[i].id == idLivro) {
            achou = true
        if (biblioteca[i].disponivel == false) {
          console.log("Esse livro ja esta emprestado.")
           } else {
          biblioteca[i].disponivel = false
          console.log("Livro emprestado com sucesso!")
        }
      }
    }

       if (achou == false) {
      console.log("Livro nao encontrado.")
    }
  
  // devolver
  } else if (opcao == "4") {
    let entradaId = prompt("Digite o ID do livro para devolver: ")
       let idLivro = Number(entradaId)

    let achou = false
    for (let i = 0; i < biblioteca.length; i++) {
       if (biblioteca[i].id == idLivro) {
         achou = true
        if (biblioteca[i].disponivel == true) {
          console.log("Esse livro ja esta disponivel.")
        } else {
           biblioteca[i].disponivel = true
          console.log("Livro devolvido com sucesso!")
        }
      }
    }

     if (achou == false) {
      console.log("Livro nao encontrado.")
    }

  }  else if (opcao == "5") {
    console.log("Saindo...")
  } else {
    console.log("Opcao invalida!")
  }
}
 