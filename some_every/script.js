

// Some

let nomes = ['Mateus', 'Lucas', 'João'];

nomes.some(nome => nome === 'Lucas'); // true
nomes.some(nome => nome === 'Maria'); // false

// Every

let nomes2= [
    {nome: 'Mateus', idade: 23},
    {nome: 'Lucas', idade: 19},
    {nome: 'João', idade: 14}
]

nomes2.every(nome => nome.idade >= 14); // true
nomes2.every(nome => nome.idade >= 18); // false