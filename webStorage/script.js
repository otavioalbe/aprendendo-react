
var nome = '';

if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt('Qual seu nome?');
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;

localStorage.lista = ["banana", "maçã", "pera"];

// quando fechar navegador e limpar cache,
// usar sessionStorage --> mesmas funcoes que localStorage
// mas só dura enquanto o navegador estiver aberto

//funções:
// localStorage.setItem('chave', 'valor');
// localStorage.getItem('chave'); ou localStorage.chave;
// localStorage.removeItem('chave');
// localStorage.clear(); // limpa tudo