const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

console.log('Acessando Array com for:')

for(let i in notas) {
    console.log(i, notas[i])
}

console.log()
console.log('Acessando objeto com for:')

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
