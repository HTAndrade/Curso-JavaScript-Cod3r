const name = 'Hugo';

// Não podemos alterar o valor
//name = 'Hugo';

//const user = {
//    name: 'Hugo'
//};

// Mas se for um objeto, podemos trocar suas propriedades
//user.name = 'Outro nome';

// Não podemos fazer o objeto "apontar" para outro lugar
user = {
    name: 'Hugo'
};

const persons = ['Hugo', 'Pedro', 'Jennifer'];

// Podemos adicionar novos itens
persons.push('João');
//['Hugo', 'Pedro', 'Jennifer', 'João'];
console.log(persons);

// Podemos remover algum item
persons.shift();
//['Pedro', 'Jennifer', 'João'];
console.log(persons);

// Podemos alterar diretamente
persons[1] = 'James';
//['Pedro', 'James', 'João'];

console.log('\nArray após as alterações: ', persons);

var teste = 1;
teste = 'texto'
console.log(teste)

console.log(1 + 'texto')