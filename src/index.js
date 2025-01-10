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

console.log(findValue(INDICE));
