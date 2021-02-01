let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variável maluca sem var e let!
abc = 3 // não faça isso me casa!!!
console.log(global.abc)

// module.exports = { e:456, f: false, g: 'teste}

/* 
Dicas: 
    1- Entenda os runtimes para boa ordem da programação JS
    2- sempre que possível fuja do escopo global, ou não coloque
    variaveis no escopo global.
    3- procure trabalhar com constantes.
*/          