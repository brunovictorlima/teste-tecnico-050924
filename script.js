console.log("QUESTÃO 1");

// Questão 1 ---------------------------------

let INDICE = 13;
let SOMA = 0;
K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}
console.log(`Fim do loop, resultado final: ${SOMA}`);

// Questão 2 ---------------------------------

console.log("QUESTÃO 2");

const MAX_VALUE = 100;
// gerando um número randômico de 1 a 100

let randomDecimal = Math.random();
let randomNumber = Math.floor(randomDecimal * MAX_VALUE) + 1;
console.log(`Número aleatório de 1 a 100 gerado: ${randomNumber}`);

let a = 0;
let b = 1;
let fiboNumber = 0;

do {
  fiboNumber = a + b;
  a = b;
  b = fiboNumber;
  // o código abaixo imprime os números fibonacci gerados
  console.log(fiboNumber);
} while (fiboNumber < randomNumber);

if (fiboNumber == randomNumber) {
  console.log("O número informado PERTENCE à sequência de Fibonacci.");
} else {
  console.log("O número informado NÃO pertence à sequência de Fibonacci.");
}

// QUESTÃO 3 ---------------------------------

// OBS: As respostas da questão 3 ficarão por último no console devido ao uso do método fetch ser assíncrono.

console.log("QUESTÃO 3");

const url = "dados.json";
let vetor;
let menorValor = { dia: 0, valor: Infinity };
let maiorValor = { dia: 0, valor: -1 };
let media = 0;

// Método que extrai o MENOR valor de faturamento
const MenorValor = (v) => {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i].valor < menorValor.valor && vetor[i].valor > 0) {
      menorValor.dia = vetor[i].dia;
      menorValor.valor = vetor[i].valor;
    }
  }

  console.log(
    `O menor valor válido de faturamento foi R$ ${menorValor.valor.toFixed(
      2
    )} no dia ${menorValor.dia}.`
  );
};

// Método que extrai o MAIOR valor de faturamento
const MaiorValor = (v) => {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i].valor > maiorValor.valor && vetor[i].valor > 0) {
      maiorValor.dia = vetor[i].dia;
      maiorValor.valor = vetor[i].valor;
    }
  }

  console.log(
    `O maior valor válido de faturamento foi R$ ${maiorValor.valor.toFixed(
      2
    )} no dia ${maiorValor.dia}.`
  );
};

// Método para extrair a MÉDIA de faturamento

const Media = (v) => {
  let acc = 0;
  let aux = 0;
  let valoresValidos = 0;

  for (let i = 0; i < v.length; i++) {
    if (v[i].valor == 0) {
      aux++;
    } else {
      acc += v[i].valor;
    }
  }

  valoresValidos = v.length - aux;
  media = (acc / valoresValidos).toFixed(2);
};

// Método que contabiliza os dias de faturamento acima da média

const DiasAcimaDaMedia = (v, media) => {
  let dias = 0;
  for (let i = 0; i < v.length; i++) {
    if (v[i].valor > media) {
      dias++;
    }
  }
  console.log(
    `O faturamento diário foi maior que a média(R$ ${media}) em ${dias} dias.`
  );
};

// Faz a requisição usando fetch

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Erro ao buscar o arquivo: ${response.status} ${response.statusText}`
      );
    }
    return response.json(); // Converte a resposta para JSON
  })
  .then((data) => {
    console.log(data); // Exibe o objeto no console para verificar

    vetor = data;
    console.log(vetor[0].dia); // Verifica se o vetor recebeu os dados corretamente
    console.log(vetor[0].valor); // Verifica se o vetor recebeu os dados corretamente

    // Extrai o menor valor de faturamento
    MenorValor(vetor);
    // Extrai o maior valor de faturamento
    MaiorValor(vetor);
    // Calcula a média
    Media(vetor);
    // Calcula a quantidade dos dias do mês com maior faturamento
    DiasAcimaDaMedia(vetor, media);
  })
  .catch((error) => {
    console.error("Erro na requisição:", error);
  });

// QUESTÃO 4 ---------------------------------

console.log("QUESTÃO 4");

const valorSP = 67836.43;
const valorRJ = 36678.66;
const valorMG = 29229.88;
const valorES = 27165.48;
const valorOutros = 19849.53;

let total = valorSP + valorRJ + valorMG + valorES + valorOutros;

console.log(total.toFixed(2));

const CalculaPercentual = (valor, total) => {
  return (valor / total) * 100;
};

console.log(`Percentual de faturamento de cada Estado: \n
    SP: ${CalculaPercentual(valorSP, total).toFixed(2)} % \n
    RJ: ${CalculaPercentual(valorRJ, total).toFixed(2)} % \n
    MG: ${CalculaPercentual(valorMG, total).toFixed(2)} % \n
    ES: ${CalculaPercentual(valorES, total).toFixed(2)} % \n
    OUTROS: ${CalculaPercentual(valorOutros, total).toFixed(2)} %  
    `);

// QUESTÃO 5 ---------------------------------

console.log("QUESTÃO 5");

const inverterStringComPilha = (string) => {
  const pilha = [];

  // empilha cada caractere da string
  for (let i = 0; i < string.length; i++) {
    pilha.push(string[i]);
  }

  // desempilha para construir a string invertida
  let stringInvertida = "";
  while (pilha.length > 0) {
    stringInvertida += pilha.pop();
  }

  return stringInvertida;
};

// define a string original
const string = "Testando a inversão de string!";

// executa a função que inverte a string
const stringInvertida = inverterStringComPilha(string);

// imprime a string original
console.log(string);
// imprime a string invertida
console.log(stringInvertida);
