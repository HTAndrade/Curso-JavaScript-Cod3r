const escola = "Cod3r"

console.log(escola.charAt(4)) //Retorna ou imprime a string associada ao o indice 4 (r).
console.log(escola.charAt(5)) //Retorna ou imprime a string associada ao indice 5 (nada).
console.log(escola.charCodeAt(3)) //Retorna ou imprime a string associada indice 3 (3), mas em tabela ASC.
console.log(escola.indexOf('r')) // Retorna ou imprime o indice associada a string.

console.log(escola.substring(1)) // Imprime a partir do indice 1.
console.log(escola.substring(0, 3)) // Imprime 3 string a partir do indice 0.

console.log('Escola '. concat(escola).concat("!")) // Concatena as strings
console.log('Escola ' + escola + "!") // Concatena as strings
console.log(escola.replace(3, 'e')) // Altera a string do indice 3 por 'e'

console.log('Ana,Maria,Pedro'. split(',')) // Gera um array com os elementos determinados, e separados por ','