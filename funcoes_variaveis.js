//Funçoes com variaveis

function dobro(numero) {
   return numero*2;
}
console.log(dobro(10));

//Vamos praticar juntos: escreva agora uma função metade, que pega um número como parâmetro e retorna sua metade

function metade(numero1) {
    return numero1 / 2;
 }
 console.log(metade(10));

 //multiplicar
 function multiplicar(numero1, numero2) {
    return numero1 * numero2;
 }
 console.log(multiplicar(10,10));

 // Crie função dobroDoProximo() que recebe 
 //um parâmetro e nos retorna duas vezes mais que o próximo, ou seja, parâmetro + 1

 function dobroDoProximo (numero) {
    var resultadoDoDobro = numero + 1;
   return resultadoDoDobro * 2;
 }
 
 console.log(dobroDoProximo(2));

 /*Vamos criar uma função perimetro que nos diga o perímetro de um círculo quando damos a ele o raio 
 como parâmetro.Também a função area que nos dá a área de um círculo quando recebe o raio como parâmetro. */

 function perimetro(raio){
    return 3.14 * raio *2;  
  }
  
  function area(raio){
    return 3.14 * raio * raio;
   }
  
  console.log(perimetro(10));
  console.log(area(10));

  /*Vamos testar: Iremos criar uma função chamada tamanhoNomeCompleto, que recebe um nome e um sobrenome como 
  parâmetros,   e que irá devolver o tamanho total, contando um espaço extra para separar ambos: */

  function tamanhoNomeCompleto(nome, sobrenome){
    return(nome +" " +sobrenome).length;
  }
  
  console.log(tamanhoNomeCompleto("Ligiane", "Souza"));

  /*Escreva a função escreverCartao, que recebe como parâmetros um título, um nome e um sobrenome e 
  retorna uma única string como resultado.  */

  function escreverCartao (titulo, nome , sobrenome){
    return(titulo +" " +nome +" " +sobrenome);
  }
  
  console.log(escreverCartao("srta.","Ligiane","Souza"));

  /* Math.max () pega dois parâmetros e retorna o maior número, enquanto Math.min () pega dois 
  parâmetros e retorna o menor. */

  function arredondar(num1){
    return Math.round(num1);
  }
  console.log(arredondar(23.55));


/*Escreva uma função gerarProbabilidade(), que não recebe parâmetros e retorna a porcentagem 
de probabilidade de chuva, calculada aleatoriamente usando Math.random (). */

  function gerarProbabilidade(){
    return Math.random()*100;  
  }
  