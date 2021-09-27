let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
let numeroDeItens = 0;

for (let number of numbers) {
  resultado += number;
  numeroDeItens += 1;
}

let media = resultado / numeroDeItens;

if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

//  5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

for (let index = 0; index < numbers.length; index += 1) {


}

//  6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

//  7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;

//  8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
