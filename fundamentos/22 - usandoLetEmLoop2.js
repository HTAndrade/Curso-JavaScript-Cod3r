const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function () {
        console.log(i)

    })
}

funcs[2]()
funcs[6]()
funcs[0]()
funcs[8]()

//Aqui o 'let' permite saber o valor do 'i' no momento que a função foi criada.