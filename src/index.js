import faturamento from "./faturamento.json" assert { type: "json" };
import faturamentoMensalPorDistribuidora from "./faturamentoMensalPorDistribuidora.json" assert { type: "json" };

//Solução do exercício 1
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
// console.log("O valor final da variável SOMA é:", findValue(INDICE));

//Solução do exercício 2
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

// Solução do exercício 3
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

const billingCalculationResult = calculateBilling(faturamento);
const minValue = billingCalculationResult.minValues.toFixed(2);
const maxValue = billingCalculationResult.maxValues.toFixed(2);
const totalDaysWithHighestRevenue =
  billingCalculationResult.daysWithHighestRevenue;
// console.log(
//   `O menor valor de faturamento ocorrido em um dia do mês foi de ${minValue} reais.`
// );
// console.log(
//   `O maior valor de faturamento ocorrido em um dia do mês foi de ${maxValue} reais.`
// );
// console.log(
//   `O numero de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de ${totalDaysWithHighestRevenue} dias.`
// );

//Solução do exercício 4
function totalAmountPerMonth(faturamento) {
  const valuesObject = Object.values(faturamento);
  const valuesPerMonth = valuesObject.map((entry) => entry.valor);
  const totalValuesPerMonth = valuesPerMonth.reduce(
    (acc, value) => acc + value
  );
  const total = totalValuesPerMonth;
  console.log(total);
  return faturamento.map((item) => ({
    estado: item.estado,
    valor: item.valor,
    percentual: ((item.valor / total) * 100).toFixed(2) + "%",
  }));
}

// console.log(totalAmountPerMonth(faturamentoMensalPorDistribuidora))

//Solução do exercício 5
//Passar array como parâmetro da função
function invertCharacter(array) {
  let newArray = [];
  let character = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    newArray[character++] = array[i];
  }
  return newArray;
}
// console.log(invertCharacter([1,20,6,8,9]));
