function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário
    
    // expressão de return resumida
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
/*  é a mesma coisa que:  
    
    return { comprarSorvete: comprarSorvete,
             comprarTv50:    comprarTv50,
             comprarTv32:    comprarTv32, 
             manterSaudavel: manterSaudavel } 
*/
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

/*
v e v -> v
v e f -> f
f e ? -> f

v ou ? -> v
f ou v -> v
f ou f -> f

v xor v -> f (xor = "exclusive or", "ou exclusivo" em inglês)
v xor f -> v
f xor v -> v
f xor f -> f

!v -> f ('!' representa negação lógica)
!f -> v
*/ 