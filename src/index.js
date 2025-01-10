const INDICE = 13;

function findValue(INDICE) {
  let SOMA = 0;
  let K = 0;
  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
    console.log(SOMA);
  }
  return SOMA;
}

//Resultado do exercício 1
// console.log("O valor final da variável SOMA é:", findValue(INDICE));

function valueIsFibonacci(num) {
  let a = 0;
  let b = 1;
  const affirmativeMessage = `O número informado pertence à sequencia de Fibonnaci.`;
  const unaffirmativeMessage = `O número informado não pertence à sequencia de Fibonnaci.`;
  if (num === a || num === b) {
    return affirmativeMessage;
  } else if (b <= num) {
    if (b === num) {
      return affirmativeMessage;
    }
    let temp = b;
    b = a + b;
    a = temp;
  }
  return unaffirmativeMessage;
}
//Digite o número como parâmetro da função para obter a resposta
//console.log(valueIsFibonacci(1));
