/*Queremos escrever uma função naipeDeTruco, que dado um naipe, devolva uma lista de strings, uma por cada
     carta desse naipe seguindo as cartas do truco:

 naipeDeTruco("espadas")
["1 de espadas", "2 de espadas", "3 de espadas" ..., "12 de espadas"]
Lembre-se! As cartas incluem todos os números, com exceção das cartas 8 e 9

escreva a função naipeDeTruco*/

    function naipeDeTruco(naipe){
        
        let numJogada = [];
    
        for (let carta=1; carta <=12; carta++){ 

            if (carta != 8 && carta != 9){
                numJogada.push(carta+" de "+ naipe);
            }      
            
        }
        return numJogada;
    }
  
  console.log(naipeDeTruco("espadas"));