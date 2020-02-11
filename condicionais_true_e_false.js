
/*Teste sua função saoMeioIrmaos com os seguintes valores e verifique se ela se comporta como a
 tabela:

 saoMeioIrmaos(cleo, fiuk)
 saoMeioIrmaos(sandy, junior)*/

function temAMesmaMae(filho1,filho2){
  return maeDe(filho1) === maeDe(filho2);
 }

function temOMesmoPai(filho1,filho2){
  return paiDe(filho1) === paiDe(filho2);
 }

function saoMeioIrmaos(filho1,filho2){
  var maes = temAMesmaMae(filho1,filho2);
  var pais = temOMesmoPai(filho1,filho2);
  return maes ==pais;
 }

 /* Defina a função xor, que pega dois valores booleanos como parâmetro e retorna o valor correspondente 
 de acordo com a tabela. DICA: é mais simples do que você pensa, você pode resolvê-lo na mesma linha do return
  e talvez você tenha que usar o símbolo de negação !.*/

 function xor(x, y) {
    return (x || y) && !(x && y);
  }

  /*Teste no console os seguintes exemplos e veja o resultado:

 pagarComCartao(true, 6, 320)
 pagarComCartao(false, 8, 80)
 pagarComCartao(true, 2, 215)
 pagarComCartao(true, 1, 32) */

  function pagarComCartao
(temJuros, taxasDoCartao, dinheiroDisponivel) {
  return !temJuros && taxasDoCartao >= 3 || dinheiroDisponivel < 100;
}

/*Escreva a função podeSeAposentar que recebe por parâmetro a idade, o sexo e os anos de contribuição 
previdenciária que uma pessoa tem, exemplo:

 podeSeAposentar(62, "F", 34) true Tenha em mente que a idade mínima para se aposentar para mulheres é 60 anos, 
 enquanto que para homens é 65. Em ambos os casos, você deve ter pelo 
menos 30 anos de contribuição.*/

var idadeFeminino= 60;
var idadeMasculino = 65;
var feminino = "F";
var masculino = "M";
var minContribuicao = 30;
 
function podeSeAposentar (idade, sexo, anosContribuicao){
   if(sexo == feminino){
     return idade >= idadeFeminino && anosContribuicao>=minContribuicao;
     
   } else if(sexo == masculino){     
     return idade>= idadeMasculino && anosContribuicao>=minContribuicao;
} else{
    return false;
  }

 }

 /*Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano),
  temProblemaCardiaco (booleano), retorne true ou false conforme o caso. Levar em conta as condições
   necessárias mencionadas acima.

 podeSubir(1.7, false, true)
false // não pode subir
      // porque embora seja maior do que 1.5m,
      // tem um problema cardíaco*
      
      */
     function podeSubir(alturaPessoa, vemComCompanhia, temProblemaCardiaco){
        return !temProblemaCardiaco && (alturaPessoa >= 1.5 ||
        (alturaPessoa >= 1.2 && vemComCompanhia));
      }


      /*Defina a função medalhaSegundoOPosto que recebe o posto como parâmetro e retorna um texto de 
      acordo com o parâmetro. Dica: nessa função você pode usar vários if.*/

      var medalhaOuro = "ouro";
var medalhaPrata = "prata";
var medalhaBronze = "bronze";
var nenhumaMedalha = "Continue participando";

function medalhaSegundoOPosto (medalha){
  if (medalha == 1){
    return medalhaOuro;   
  } else if(medalha == 2){
    return medalhaPrata;
  } else if (medalha == 3){
    return medalhaBronze;
  } else {
    return nenhumaMedalha;
  }
  
}




