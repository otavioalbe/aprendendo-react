//variaveis

var lista = [1,2,3];

//usando VAR o i fica disponivel fora do escopo
for(var i in lista){
    console.log(lista[i])
}
console.log(i);


//usando LET o b não fica disponivel fora do escopo
for(let b in lista){
    console.log(lista[b])
}
console.log(b);


//usando CONST não é possivel alterar o valor da variavel
const nome = "otavio";
nome = "joao"; //erro