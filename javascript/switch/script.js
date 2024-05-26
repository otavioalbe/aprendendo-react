document.write("</br> Escolha seu pedido: </br>");
document.write("</br> 0 - Água</br>1 - Suco</br>2 - Refrigerante");
document.write("</br>3 - Cerveja</br></br>");

// switch
function pedir(){

    x = prompt("O que deseja pedir? 0, 1 ou 2?");

    switch(x){
        case "0":
            alert("Você escolheu Água");
            break;
        case "1":
            alert("Você escolheu Suco");
            break;
        case "2":
            alert("Você escolheu Refrigerante");
            break;
        case "3":
            alert("Você escolheu Cerveja");
            break;
        default:
            alert("Opção inválida");
            break;
        }
}