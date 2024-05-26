
function minhaLista(...nomes){
    console.log(nomes);
    // nomes = ["Mateus", "Larissa", "João"]
}
minhaLista(("Mateus", "Larissa", "João"));


function cadastrar(usuarios, ...novosUsuarios){
    
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return totalUsuarios;
}

let usuarios = ["Mateus", "Larissa"];
let novosUsuarios = cadastrar(usuarios, "João", "Maria");