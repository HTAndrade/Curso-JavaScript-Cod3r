{
    {
        {
            { 
                var sera = 'Será???'
                console.log(sera)
            } 
        } 
    } 
}
console.log(sera)

// Variavel 'var' é visivel dentro ou fora dos blocos, mas...

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)

//...quando declarado dentro de uma função, somente será visivel dentro do escopo da função.

//Em browser, o 'var' só tem dois escopo possiveis:
//1 - Nivel global, ou seja visivel em sua aplicação inteira.
//2 - Dentro do escopo de função, ou nivel local.