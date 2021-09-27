let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//  bubble sort 
// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     for (let secondI = i + 1; secondI < array.length; secondI += 1) {
//       if (array[i] > array[secondI]) {
//         let position = array[i];
//         array[i] = array[secondI];
//         array[secondI] = position;
//         return position;
//       }
//     }
//   }

// }

//  1. Ordene o array numbers em ordem crescente e imprima seus valores;
function bubbleSort(arr) {
  let t = arr.length;
  while (t) {
    for (let i in arr) {
      if (arr[i] < arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp
      }
    }
    t--;
  }
  return arr;
}

console.log(bubbleSort(numbers));
//  2. Ordene o array numbers em ordem decrescente e imprima seus valores;
function bubble_Sort(a) {
  let swapp;
  let n = a.length - 1;
  let x = a;
  do {
    swapp = false;
    for (let i = 0; i < n; i++) {
      if (x[i] < x[i + 1]) {
        let temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return x;
}

console.log(bubble_Sort(numbers));


//  3. Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
//  [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
