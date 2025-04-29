alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`Número secreto: ${numeroSecreto}`);
let chute;
let tentativas = 1;
console.log(`Tentativas: ${tentativas}`)
while (chute != numeroSecreto) {
    console.log(`Tentativas: ${tentativas}`)
    //convertendo o retorno do prompt para numero
    chute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}`));
    console.log(`Valor do chute: ${chute}`);

    //verificando se o que o jogador digitou foi um número valido
    if (isNaN(chute) || chute < 1 || chute > numeroMaximo) {
        alert(`Por favor, insira um número válido entre 1 e ${numeroMaximo}.`);
        continue;
    }
    
    console.log('Resultado da comparação:', chute == numeroSecreto);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas ++;
    }
}
console.log(`Tentativas: ${tentativas}`)

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
