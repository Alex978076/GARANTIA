// exercicio 8 - relatorio de salarios por setor
//  JOSÉ ANTÔNIO - 2 medio

import promptSync from "prompt-sync"
const prompt = promptSync()

interface Colaborador {
  id: number
  nome: string
  setor: string
     salario: number
}

// pelo menos 7 colaboradores como pedido
const colaboradores: Colaborador[] = []
 frota.push  (  { id: 1, nome: "Tatiane Moura", setor: "TI", salario: 4500 }),
 frota.push      ( { id: 2, nome: "Felipe Neves", setor: "RH", salario: 3200 }),
 frota.push     (  { id: 3, nome: "Isabela Torres", setor: "TI", salario: 5000 }),
frota.push ( { id: 4, nome: "Marcos Vinicius", setor: "Financeiro", salario: 3800 }),
 frota.push             ( { id: 5, nome: "Patricia Lima", setor: "RH", salario: 2900 }),
frota.push ( { id: 6, nome: "Rafael Braga", setor: "TI", salario: 4800 }),
 frota.push( { id: 7, nome: "Vanessa Cunha", setor: "Financeiro", salario: 4100 }),


// somando todos os salarios
       let totalSalarios = 0
for (let i = 0; i < colaboradores.length; i++) {
  totalSalarios = totalSalarios + colaboradores[i].salario
}

console.log("Total gasto com salarios: R$ " + totalSalarios.toFixed(2))

// pedindo o setor pra filtrar
let setorBuscado = prompt("\nDigite o setor para ver os colaboradores: ")

console.log(`\nColaboradores do setor ${setorBuscado}:`)

let achouAlguem = false
           for (let i = 0; i < colaboradores.length; i++) {
  if (colaboradores[i].setor.toLowerCase() == setorBuscado.toLowerCase()) {
            
    console.log("- " + colaboradores[i].nome + " | salario: R$ " + colaboradores[i].salario.toFixed(2))
    achouAlguem = true
  }
}

if (achouAlguem == false) {
         console.log("Nenhum colaborador encontrado nesse setor.")
}
