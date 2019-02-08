
//Função sem retorno
function imprimirSoma(a, b){

    console.log(a + b);
}

imprimirSoma(2, 9);

imprimirSoma(2, 2, 2, 2);

//Função com retorno

function soma(a, b = 0){

    return a + b;
}

console.log(soma(1, 2));
console.log(soma(1));