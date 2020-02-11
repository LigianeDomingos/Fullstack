// Carregando o json do arquivo pets e armazenando
// na variável pets como um array;
let pets = require("./pets.json");

// Transformando strings data de nascimento em Objetos Date();
pets.map(pet => {
  pet.nascimento = new Date(pet.nascimento);
  return pet;
});

const servDarBanho = pet => {
  console.log("Dando banho em " + pet.nome);
  pet.servicos.push("banho");
  return pet;
};

// Criem uma função que faz o equivalente
// a servDarBanho, mas que TOSA
const servTosar = pet => {
  console.log("Tosando " + pet.nome);
  pet.servicos.push("tosa");
  return pet;
};

// Verifica se o cachorro foi vacinado
// Caso não tenha sido, altera a prop vacinado para
// true e adiciona "vacina" ao array de servicos
// Caso ja tenha sido vacinado, imprime uma msg de erro
const servVacinar = pet => {
  if (pet.vacinado) {
    console.log(pet.nome + " já foi vacinado");
  } else {
    pet.vacinado = true;
    pet.servicos.push("vacina");
    console.log(pet.nome + " vacinado");
  }
  return pet;
};

/**
 * ==================================================
 * =============== A T I V I D A D E ================
 * ==================================================
 * LADO PAREDE/JANELA: Documentação do array.filter no MDN
 * Escrever uma função buscaPorNome que recebe uma string
 * 'trecho' e o array de pets como parâmetros e retorna
 * um array de pets que possuem 'trecho' no nome:
 * Ex: buscaPorNome('At',pets) //retorna [{nome:"Ataúlfo", nascimento....}]
 */

const buscaPorNome = (trecho, pets) => {
  let filtrado = pets.filter(pet => {
    return pet.nome.includes(trecho);
  });
  return filtrado;
};

// console.log(buscaPorNome("m", pets));
// process.exit();
/**
 * LADO JANELA/PAREDE: Documentação do array.reduce no MDN
 * Escrever uma função somaServicos que recebe o array de pets como
 * parâmetro e retorna o total de servicos prestados aos pets
 * Ex: somaServicos(pets) // retorna 4
 */
// const somaServicos = pets => {
//   return pets.reduce((acum, pet) => {
//     return acum + pet.servicos.length;
//   }, 0);
// };

const somaServicos = pets =>
  pets.reduce((acum, pet) => acum + pet.servicos.length, 0);

console.log(somaServicos(pets));

// Aplicando a função serVacinar a todos os pets
// console.log(pets);
// pets.map(servVacinar);
// console.log(pets);
