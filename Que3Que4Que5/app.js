const _ = require('lodash');

let num = [2, 1, 3, 3, 4];

let ordem = _.orderBy(num);
let remover = _.uniq(num);
let numPar = _.filter(num, (num) => num % 2 === 0);
let novo = _.map(num, (num) => num * 2);
let soma = _.sum(num)

console.log(ordem);
console.log(remover);
console.log(numPar);
console.log(novo);
console.log(soma);