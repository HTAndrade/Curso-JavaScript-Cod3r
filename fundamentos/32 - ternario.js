/*função arrow simples '=>'*/
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

/* função acima é a mesma coisa que:

const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado(7.1))
console.log(resultado(6.7))

*/