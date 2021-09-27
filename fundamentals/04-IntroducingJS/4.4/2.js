  // 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

  const verificaPalindromo = (a, b) => {
    const secondWord = b.split('').reverse().join('');
    if (a === secondWord) {
      return true;
    } else {
      return false;
    }
  }

  console.log(verificaPalindromo('arara', 'desenvolvimento'));

  console.log('------------')

  // 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

  const numbersArray = [2, 3, 6, 7, 10, 1];

  let i = numbersArray.indexOf(Math.max(...numbersArray));

  console.log(i);

  //  3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
  console.log('------------')

  const smallerNumbersArray = [2, 4, 6, 7, 10, 0, -3];

  let m = smallerNumbersArray.indexOf(Math.min(...smallerNumbersArray));

  console.log(m);
  //  4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

  console.log('------------')

  let nameArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

  function findLongestWord(str) {
    let longestWord = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i].length > longestWord.length) {
        longestWord = str[i];
      }
    }
    return longestWord;
  }
  console.log(findLongestWord(nameArray));

  console.log('------------')

  // 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.



  // 6.Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

  let testValue = 5;
  // Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

  // 7.Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
