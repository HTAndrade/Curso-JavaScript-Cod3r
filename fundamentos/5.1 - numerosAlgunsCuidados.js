console.log(7 / 0)//Operações dividido por '0' sempre gerará o "Infinity"
console.log("10" / 2)//Se a String for um numero inteiro, pode funcionar a operação
console.log('3' + 2)//A string tem preferencia, por isso que neste caso irá concatenar ao invés de somar
console.log('3' - 2)//O operador '-' não faz sentido na concatenação, neste caso irá subtrair.
console.log("show!" * 2)//NaN = Not a Number
console.log(0.1 + 0.7)//Essa operação gera imprecisão
//console.log(10.toString())
console.log((10.345).toFixed(2))