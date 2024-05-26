function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Qual seu nome?');
    
    if(texto == '' || texto == null){
        alert('Digite seu nome novamente!')
        area.innerHTML = 'Bem-vindo ....';
    }else{
        area.innerHTML = 'Bem-vindo ' + texto;
    }
}

function entrar2(nome){
    var area = document.getElementById('area2');
    var texto = prompt('Qual seu sobrenome?');
    var idade = prompt('Qual sua idade?');
    area.innerHTML = nome + " " +texto + " " + idade + " anos";
}