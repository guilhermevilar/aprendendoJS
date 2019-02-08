//Armazenando uma função dentro de uma variável

const imprimirSoma = function (a, b) {

    console.log(a + b);
}

imprimirSoma(2, 3);

//Armazenando uma função arrow em uma variável

const soma = (a, b) => {

    console.log(a + b);
}

soma(3, 5);


//retorno implícito

const subtracao = (a, b) => a - b;

console.log(subtracao(5, 3));

const imprimir2 = a => console.log(a);

imprimir2('Eaaaaaaiiiii');