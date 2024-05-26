const pessoa = {
    nome: "Otavio",
    sobrenome: "Miranda",
    idade: 20,
    cargo: "Desenvolvedor"
};
console.log(pessoa);

let {nome} = pessoa;
console.log(nome);

let {sobrenome} = pessoa;
let {idade,cargo} = pessoa;

let {cargo: profissao} = pessoa;
console.log(profissao);

let nomes = ["Otavio", "Miranda", 20];
let {1:segundoNome} = nomes;  
let {0:primeiroNome, 2:idade2} = nomes;

// OU

let [nome2, sobrenome2, idade3] = nomes;
let [primeiro, segundo] = nomes;
console.log(primeiro, segundo);
