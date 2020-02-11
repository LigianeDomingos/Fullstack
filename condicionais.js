/*Declara a variável diaDeSemana que receba uma string "domingo". Depois implemente uma condicional usando o
 if que compare se diaDeSemana é igual a "domingo", se for verdadeiro imprima uma string 
 "Hoje é dia de futebol!!!".*/

var diaDeSemana = 'domingo';
var domingo = 'domingo';
if (diaDeSemana == domingo){
  console.log("Hoje é dia de futebol!!!");
}

/*Define a função hojeSeJoga, que receba por parâmetro uma string que informe o día da semana. 
Esta função deve retornar"Hoje é dia de futebol!!!" se parâmetro for "domingo", caso contrário deve
 retornar "Hoje não é dia de futebol :(".*/

 var diaDeJogo = "domingo"
function hojeSeJoga(diaDeSemana){
if (diaDeSemana == diaDeJogo) {
  return "Hoje é dia de futebol!!!";
} else {
  return "Hoje não é dia de futebol :("
}
}

hojeSeJoga("sexta");

/*Defina a função eMaior, que recebe dois números por parâmetro, e retorna o maior entre eles.*/

function eMaior(num1, num2){

    if(num1 > num2){
       return num1;    
  
       }else{
         return num2;           
       }
  }
       
  console.log(eMaior(4, 5));

  /*Portanto, vamos definir a função sinal que recebe um número para alcançar o objetivo desejado. 
  DICA: Lembre-se que você pode precisar usar mais de um if.*/

  var positivo = 1;
var zero = 0;
var negativo = "-1";

function sinal(num1){
  if(num1 > 0){
     return positivo;
     } else if ( num1 == 0) {
     return zero;
     } else {
     return negativo;
     }  
}
console.log(sinal(5));    

/*Escreva a função eNumeroDaSorte que, recebendo um número, diz a se é um número da sorte. Lembre-se de que
 o número deve obedecer às três condições mencionadas. Seu desafio adicional será: NÃO use o if.*/


var num1 = "É positivo";
var num2 = " É um múltiplo de 2 ou 3";
var num3 = "Não é 15";
function eNumeroDaSorte (numeroDaSorte){
  return numeroDaSorte > -1 && (numeroDaSorte%2 ==0 || numeroDaSorte%3 ==0) && numeroDaSorte != 15;  
  
  
}
console.log(eNumeroDaSorte(3));

/*Defina a função possoIrAoBanco que, receba dois parâmetros, o primeiro é diaDaSemana (string) e o segundo 
horaAtual(numero), a função deve retornar true, apenas se o banco estiver aberto.*/

var segundaFeira = "segunda-feira";
var tercaFeira = "terça-feira";
var quartaFeira = "quarta-feira";
var quintaFeira = "quinta-feira";
var sextaFeira = "sexta-feira";

 function possoIrAoBanco(diaDaSemana, horaAtual){
   return (diaDaSemana == segundaFeira|| diaDaSemana ==tercaFeira || diaDaSemana == quartaFeira||diaDaSemana == quintaFeira|| diaDaSemana ==sextaFeira) && horaAtual >= 10 && horaAtual <=16;
 }
 
 console.log(possoIrAoBanco(tercaFeira, 18));

 /*Defina a função filosofoHipster que recebe como parâmetro: a profissão de uma pessoa (string), nacionalidade
  (string) e o número de quilômetros que ele anda por dia (número). Com esses parâmetros avalie se essa pessoa 
  é ou não (true / false), um filósofo Hipster. Tenha em mente que um filósofo Hipster é um Músico, nascido no 
  Brasil e que gosta de andar mais de 2 quilômetros por dia.*/

  var profissao = 'Músico';
var pais = 'Brasil';

function filosofoHipster (pessoa, nacionalidade, numeroKm){
  return pessoa == profissao && nacionalidade == pais && numeroKm == 5;  
}
console.log(filosofoHipster('Músico', 'Brasil', 2));


/*________________________*/

var profissao = 'Músico';
var pais = 'Brasil';

function filosofoHipster (pessoa, nacionalidade, numeroKm){
  return pessoa == profissao && nacionalidade == pais && numeroKm == 5;  
}

console.log(filosofoHipster('Músico', 'Brasil', 5));
console.log(filosofoHipster('Jogador de Futebol', 'Alemanha', 12));
console.log(filosofoHipster('Músico', 'Argentina', 1));
console.log(filosofoHipster('Docente', 'Canadá', 12)); 

/*Agora é a sua vez de criar as funções: temAMesmaMae que tem dois filhos por parâmetro e retornará true ou
false se eles realmente compartilharem a mesma mãe. Sabendo disso você pode usar a função que nós lhe damos 
maeDe. temOMesmoPai que como o anterior, pega dois filhos por parâmetro e retorne true oufalse se eles 
compartilharem o mesmo pai. Sabendo disso você pode usar a função que nós lhe damos paiDe. 
E saoMeioIrmaos, que, recebendo dois filhos por parâmetro, nos diga se de fato são meio-irmãos. 
Você deve usar as duas funções anteriores aqui. Lembre-se que os meios irmãos são dados quando, 
dois filhos compartilham a mesma mãe, mas NÃO o mesmo pai ou vice-versa. Bem, se ambos têm a mesma mãe e
 o mesmo pai, nesse caso eles seriam irmãos! */

 function temAMesmaMae(filho1,filho2){
    return maeDe(filho1) === maeDe(filho2);
   }
  
  function temOMesmoPai(filho1,filho2){
    return paiDe(filho1) === paiDe(filho2);
   }
  
  function saoMeioIrmaos(filho1,filho2){
    var maes = temAMesmaMae(filho1,filho2);
    var pais = temOMesmoPai(filho1,filho2);
    return maes !=pais;
   }