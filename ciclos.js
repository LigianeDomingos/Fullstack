/*Faça uma função chamada imprimirAzul4 que mostre 4 vezes a palavra Azul.*/
function imprimirAzul4(){
  for(var i = 0; i < 4; i++) {
   console.log("Azul");
}

}

/*Execute uma função chamada imprimir5vezes5 que mostra no console 5 vezes o número 5. */

function imprimir5vezes5(){
  for(var i = 0; i < 5; i++) {
   console.log(5);
}

}

/*Sabendo disso, escreva uma função passoAPasso, que imprime 5 vezes o conteúdo de i. Por exemplo:*/

function passoAPasso(){
for (var i = 0; i < 5; i++) {
    console.log(i);
}  
}

/*Execute uma função chamada passandoPor que imprime no console "aqui eu tenho o valor de 
    x" onde x será o valor de i em cada iteração, para cada valor de 0 a 3.*/
    function passandoPor() {
        for(var i = 0, x = 0; i <=3; i++, x++) {
         console.log("aqui eu tenho o valor de " + x);
      }
    }


/*Execute uma função chamada passandoPelosPares() que mostra pelo console aqui eu tenho o valor 
de x para cada valor PAR que percorra i de 0 até e inclusive 6.*/    

    function passandoPelosPares() {
        for(var i = 0, x = 0; i <=7; i++, x++) {
          if (i%2 == 0){
            console.log("aqui eu tenho o valor de " +x);
          }
        }
      }

/*Sabendo isso, escreva uma função imprimirAzul que receba como parâmetro um valor 
numérico “x” e imprima “Azul” “x” vezes. Por exemplo

 imprimirAzul(3)
"AzulAzulAzul"*/
function imprimirAzul(quantidadeDeVezes) {
    for(var i = 0; i < quantidadeDeVezes; i++) {
      console.log("Azul");
    }
  }
  
/*Sabendo disso, escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 moedas de 0,25
 centavos e retorna o resultado.*/  

 var totalmoedas = 0; 
function somar5MoedasDe25Centavos(){
for(var i = 0; i < 5; i++) {
 totalmoedas = totalmoedas + 0.25;
  }
  return totalmoedas;
}

/*Sabendo disso, escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro um valor
 numérico e retorna a soma das moedas de 25 centavos. Por exemplo:

 somarMoedasDe25(7)
1.75
Isso fez 0.25+0.25+0.25+0.25+0.25+0.25+0.25*/


function somarMoedasDe25(quantidadeDeMoedas){
    var totalMoedas = 0;  
    
     for(var i = 0; i < quantidadeDeMoedas; i++){
       totalMoedas = totalMoedas + 0.25;
      }
      return totalMoedas;
     }
     somarMoedasDe25(7);


/*Defina a função somaDosPares(x) que retorna a soma total de todos os números que são pares, ou seja,
 divisíveis por 2 obtendo resto 0. Desta forma: 0 + 2 + 4 + 6 + 8 + 10 + ..... X

*/
var soma = 0;
function somaDosPares(x){
  soma = 0;
for(var i = 0; i <= x; i++) {
  
  if (i % 2 == 0) {
    soma=soma+i;
  }
}
return soma;
}

/*Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números 
antecessores a ele. Por exemplo:

 somatoria(4)
6
A função executa isso através do for 0+1+2+3*/

function somatoria(x){
    var soma = 0;
  for(var i = 0; i < x; i++) {  
      soma = soma +i;  
  }
  return soma;
  }

  /*Sabendo isso, crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de voltas representado por um valor numérico e retorne a quantidade de calorias que será consumida.

Por exemplo:

 caloriasDeTrote(2)
Deveria devolver 15 onde 5 calorias são da primeira volta (5 * 1) mais 10 calorias da segunda (5 * 2).*/

function caloriasDeTrote(numVoltas){
    var totalCalorias = 0;  
  
    for(var i = 0; i <= numVoltas; i++) {
      totalCalorias = totalCalorias + 5 * i;
    }
  
    return totalCalorias;
  }