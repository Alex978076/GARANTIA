// exercicio 1 - inventario de laboratorio
// JOSÉ ANTÔNIO - 2 medio

interface Equipamento {
  id: number
        nome: string
     patrimonio: string
    emUso: boolean
}

// aqui eu coloquei os 4 equipamentos no array
const equipamentos: Equipamento[] = []
 frota.push  (  { id: 1, nome: "Computador Dell", patrimonio: "PAT-001", emUso: true }),
 frota.push   (  { id: 2, nome: "Monitor Samsung", patrimonio: "PAT-002", emUso: false }),
 frota.push    ({ id: 3, nome: "Impressora HP", patrimonio: "PAT-003", emUso: true }),
 frota.push     ( { id: 4, nome: "Teclado Logitech", patrimonio: "PAT-004", emUso: false }),


console.log("=== Equipamentos em uso ===")

           for (let i = 0; i < equipamentos.length; i++) {
  if (equipamentos[i].emUso == true) {
    console.log("Nome: " + equipamentos[i].nome + " | Patrimonio: " + equipamentos[i].patrimonio)
  }
}

// total de equipamentos cadastrados
console.log("\nTotal cadastrado: " + equipamentos.length)
