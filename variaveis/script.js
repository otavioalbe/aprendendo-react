//variaveis

var lista = [1,2,3];

//usando VAR o i fica disponivel fora do escopo
for(var i in lista){
    console.log(lista[i])
}
console.log(i);


//usando LET o b não fica disponivel fora do escopo
//  for(let b in lista){
//      console.log(lista[b])
//  }
//  console.log(b); //erro


//usando CONST não é possivel alterar o valor da variavel
const nomeConst = "otavio";
//nomeConst = "joao"; //erro


//concatenar variaveis em string
let nome = "Otavio";
let sobrenome = "Miranda";
let idade = 20;

//antigamente
let pessoa = "Meu nome é " + nome + " " + sobrenome + " e tenho " + idade + " anos";
console.log(pessoa);

//hoje em dia
let pessoa2 = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`;
console.log(pessoa2);