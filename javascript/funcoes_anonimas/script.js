

function adicionar(...numeros){
    
    let total = numeros.reduce((total, proximo) => total + proximo);
    
    console.log(total);
}

function adicionar2(...numeros){

    let total = numeros.reduce((total, proximo) => {
        let soma = total + proximo;
        return soma;
    });
    
    console.log(total);
}

adicionar(1,2,3,4,5);