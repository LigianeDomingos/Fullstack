<<<<<<< HEAD
/*Tente as seguintes consultas no console:

seriesFavoritasDaAna
seriesFavoritasDoHector
["olá","mundo!"]
["olá","olá"]
*/

var seriesFavoritasDaAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
var serieFavoritaDoHector = ["Blindspot", "Blacklist"];
var mensagemInicial = ["Olá", "mundo!"];

/*Realize as seguintes consultas no console:

“[] .length”
“numerosDeLoteria.length”
“[4, 3].length”*/

var numerosDeLoteria = [2, 11, 17, 32, 36, 39];


/*Crie uma variável do tipo array chamada pertences que contém as strings "espada","escudo","crossbow".

Utilize o método push para adicionar a string "cross".

Ah e, além disso, existe um método “pop”, que não possui parâmetros. Escreva “pertences.pop()” e 
investigue o que faz no console. */

var pertences = ["espada","escudo","crossbow"];
pertences.push("cross");


/*Declarar uma função chamada “mover”, que recebe dois arrays, remove o último elemento do primeiro
 e adiciona-o ao segundo.

Exemplo:

var umArray = [1, 2, 3];
var outroArray = [4, 5];

mover(umArray, outroArray);

umArray //deveria ser [1, 2]
outroArray //deveria ser [4, 5, 3]*/

var umArray= [1,2,3];
var outroArray= [4,5];

function mover (umArray, outroArray){
  var ultimoElemento = umArray.pop();
  outroArray.push(ultimoElemento);
  
  console.log(umArray);
  console.log(outroArray);
 }

 /*E o que acontece se você passar por parâmetro para indexOf um elemento que não tem? Descubra você mesmo!

Tente o seguinte no console:

diasDeTrabalho.indexOf ("osvaldo")*/

diasDeTrabalho.indexOf ("osvaldo")
var meuArray = ["a", "la", "grande", "le", "puse", "cuca"]
var posicao = meuArray.indexOf("Osvaldo"); //devolve 2


/*Escreva função “contem” que nos diz se um array contém um determinado elemento.

 contem([1, 6, 7, 6], 7)
true
 contem([1, 6, 7, 6], 6)
true
 contem([], 7)
false
 contem([8, 5], 7)
false*/

function contem(umArray, numeroContem){
  
    return umArray.indexOf(numeroContem) !== -1;
        
   }

/*Tente você mesmo no console: o que acontece se você pedir o item 0 de uma 
  lista vazia? Ou se você perguntar ao item 48 por uma lista de 2 itens?*/

  var mesesDoAno =["janeiro", "fevereiro"];
var animal = ["esse", "cachorro", "tem", "a", "cauda", "peluda"];


/*Escreva a função “medalhaDeAcordoComPosto(numero)”, que recebe um número como parâmetro.
 Usando apenas o máximo de um “if” apenas. Talvez os arrays possam ser úteis aqui.

Você tem que devolver a medalha que corresponde às primeiras posições de uma competição:

 medalhaDeAcordoComPosto (1)
"ouro"
 medalhaDeAcordoComPosto (2)
"prata"
 medalhaDeAcordoComPosto (3)
"bronze"
medalhaDeAcordoComPosto (4)
"nada"
 medalhaDeAcordoComPosto (5)
"nada"*/

var medalhas = ["nada","ouro","prata","bronze"]
var ouro = 1;
var prata = 2;
var bronze = 3;

function medalhaDeAcordoComPosto(numero){
  if (numero == ouro ||numero == prata || numero == bronze) {
    return medalhas[numero];
    
  }else{
    return "nada";
  }
}

/*Você começa a ver um padrão? Tente escrever lucroTotal4 que funciona para 4 itens.*/

var umPeriodo = [20, 30, 40, 50]
function lucroTotal4(umPeriodo) {
  var soma = 0;
  soma = soma + umPeriodo[0];
  soma = soma + umPeriodo[1];
  soma = soma + umPeriodo[2];
  soma = soma + umPeriodo[3];
  return soma ;
}

/*Ainda não está convencido? Novamente, tente as seguintes expressões no console:

lucroTotal([])
lucroTotal([100])
lucroTotal([100, 2])
lucroTotal([2, 10, -20])
lucroTotal([2, 10, -20, 0, 0, 10, 10])*/

function lucroTotal(umPeriodo) {
    var soma= 0;
    var mes = 0;
    for (var i=0; i<umPeriodo.length; i++) {
      mes = umPeriodo[i];
      soma= soma+ mes;
    }
    return soma;
  }

  // Contando arrays

  var secrets= ["Bruce Waine","Clark Kent", "Peter Parker", "Diana Prince"];
for (var i = 0; i < secrets.lenght; i++){
  console.log(secrets[i]);
}

/*Complete a função quantidadeDeMesesComLucro. Se você prestar atenção, 
notará que tem uma estrutura semelhante ao problema anterior */

function quantidadeDeMesesComLucro(umPeriodo){
    let quantidade = 0;
    for (let mes=0; mes<umPeriodo.length; mes++){ 
      if(umPeriodo[mes] > 0){
      quantidade = quantidade + 1;
      } 
    }
    return quantidade;
  }

  /*Escreva a função quantidadeDeMesesComPerda. A estrutura da função é 
  semelhante às que temos feito, vamos lá!*/

  function quantidadeDeMesesComPerda(umPeriodo){
    let quantidade = 0;
    for (let mes=0; mes<umPeriodo.length; mes++){ 
      if(umPeriodo[mes] < 0){
      quantidade = quantidade + 1;
      } 
    }
    return quantidade;
  }


/*Complete a função saldoDeMesesComLucro. Novamente tem uma estrutura 
similar com os problemas anteriores, porém não tão rápido! Esta função precisa retornar um array.*/

  function saldoDeMesesComLucro(umPeriodo){
    let quantidade = 0;
    let periodoComLucro = [];
  
    for (let mes=0; mes<umPeriodo.length; mes++){ 
  
      if (umPeriodo[mes] > 0){
       periodoComLucro.push(umPeriodo[mes]);
      }
          
    }
    return periodoComLucro;
  }
=======
// Exemplo de map
let numeros = [5, 8, 9, 3];

console.log(numeros.map(numero => ++numero));

console.log(numeros);

//
>>>>>>> 908d458041a281d660185d001d9d790599ae5939
