let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir underfined
console.log(!!produto.preco)
// delete produto.preco -> retirar o preco do produto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

//Caso queira zerar um valor, utilize o "null". 
//Deixe que o sistema defina o underfined