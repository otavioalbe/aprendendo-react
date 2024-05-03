
var nome = '';

if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt('Qual seu nome?');
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;

localStorage.lista = ["banana", "maçã", "pera"];

// quando fechar navegador e limpar cache,
// usar sessionStorage --> mesmas funcoes que localStorage