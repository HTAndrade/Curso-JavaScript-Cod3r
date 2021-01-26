// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Hugo',
    idade: 27,
    peso: 85,
    endereco: {
        logradouro: 'Rua Antonio Bento',
        numero: 90
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)