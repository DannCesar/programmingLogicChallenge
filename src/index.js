import faturamento from "./faturamento.json" assert { type: "json" };

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
//Solução do exercício numero 2
//Digite o número como parâmetro da função para obter a resposta
//console.log(valueIsFibonacci(1));

function calculateBilling(faturamento) {
  const billedDays = faturamento.filter((entry) => entry.valor > 0);
  const values = faturamento.map((entry) => entry.valor);
  const minValues = Math.min(...values);
  const maxValues = Math.max(...values);

  const totalBilledDays = values.reduce((entry, values) => entry + values, 0);
  const monthlyAverage = totalBilledDays / values.length;
  const daysWithHighestRevenue = billedDays.filter(
    (entry) => entry.valor > monthlyAverage
  ).length;
  return {
    minValues,
    maxValues,
    daysWithHighestRevenue,
  };
}

const billingCalculationResult = calculateBilling(
  faturamento
);
const minValue = billingCalculationResult.minValues.toFixed(2);
const maxValue = billingCalculationResult.maxValues.toFixed(2);
const totalDaysWithHighestRevenue =
  billingCalculationResult.daysWithHighestRevenue;

// Solução do exercício numero 3
// console.log(
//   `O menor valor de faturamento ocorrido em um dia do mês foi de ${minValue} reais.`
// );
// console.log(
//   `O maior valor de faturamento ocorrido em um dia do mês foi de ${maxValue} reais.`
// );
// console.log(
//   `O numero de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de ${totalDaysWithHighestRevenue} dias.`
// );

