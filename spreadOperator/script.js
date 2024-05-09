

let primeiros = [1,2,3];

let numeros = [...primeiros,4,5,6];

// numeros = [1,2,3,4,5,6]

let pessoa = {
    nome: "Mateus",
    idade: 15,
    cargo: "Desenvolvedor"
};

let novaPessoa = {
    ...pessoa,
    cidade: "São Paulo",
    cargo: "Programador"
};


function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: "Estagiário",
        status: "Ativo"
    };
    return novosDados;
}

cadastroPessoa({nome: "Mateus", idade: 15, cargo: "Desenvolvedor"})