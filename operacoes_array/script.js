

const lista = [1,2,3,4,5,6];

constNovaLista = lista.map(function(item){ // function(item, index, array)
    return item * 5;
});
// constNovaLista = [5,10,15,20,25,30]


const soma = lista.reduce(function(total, proximoItem){
    return total + proximoItem;
});
// soma = 21

const find = lista.find(function(item){
    return item === 6;
});
// find = 6

// diferença entre map e reduce
// map = retorna um array com a mesma quantidade de elementos
// reduce = retorna um único valor