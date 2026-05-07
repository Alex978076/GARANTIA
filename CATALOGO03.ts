// exercicio 3 - catalogo de produtos com filtro
// JOSÉ ANTÔNIO - 2 medio

interface Produto {
  id: number
     nome: string
       preco: number
         categoria: string
}

// 6 produtos cadastrados
const produtos: Produto[] = []
frota.push  (  { id: 1, nome: "Notebook Lenovo", preco: 2500.00, categoria: "Informatica" }),
frota.push ( { id: 2, nome: "Mouse sem fio", preco: 89.90, categoria: "Informatica" }),
 frota.push  (  { id: 3, nome: "Cadeira gamer", preco: 850.00, categoria: "Moveis" }),
frota.push ( { id: 4, nome: "Caneta BIC", preco: 3.50, categoria: "Papelaria" }),
  frota.push      (  { id: 5, nome: "Monitor 24\"", preco: 1200.00, categoria: "Informatica" }),
frota.push (  { id: 6, nome: "Mochila", preco: 120.00, categoria: "Acessorios" }),


// listando so os produtos com preco maior que 100
console.log("=== Produtos com preco maior que R$ 100 ===")

for (let i = 0; i < produtos.length; i++) {
     if (produtos[i].preco > 100) {
    console.log(`${produtos[i].nome} | R$ ${produtos[i].preco.toFixed(2)} | ${produtos[i].categoria}`)
  }
}

// achando o produto mais caro
    let maisCaroIndex = 0
for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].preco > produtos[maisCaroIndex].preco) {
    maisCaroIndex = i
  }
}

    console.log("\nProduto mais caro da lista:")
console.log(`${produtos[maisCaroIndex].nome} - R$ ${produtos[maisCaroIndex].preco.toFixed(2)}`)
