let num1 = 1
let num2 = 2

num1++ //pósfixada. acrescenta +1 na variável 
console.log(num1)
--num1 //préfixada. reduz -1 na variável
console.log(num1)

console.log(++num1 === num2--) //Neste caso é verdadeiro devido a ordem de execução
console.log(num1 === num2)