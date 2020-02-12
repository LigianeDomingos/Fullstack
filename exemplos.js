let numeros = [5, 6, 7, 15];

let n = numeros.reduce((acum, el) => {
  return acum + el;
}, 100);

console.log(n);
process.exit();

//
let pets = [
  { nome: "A", serv: ["vacina"] },
  { nome: "B", serv: ["vacina", "banho"] },
  { nome: "C", serv: ["vacina"] },
  { nome: "D", serv: [] }
];

pets.reduce((acum, el) => {
  return acum.serv.length + el.serv.length;
}, 0);
