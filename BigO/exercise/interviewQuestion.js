// Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contaain any common items.
// For example:
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "i"]
// should return false.
// -----------
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"]
// should return true

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
//
function constainsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true
      }
    }
  }
  return false
}

// O(n^2) então não é muito performático, apesar de resolver o problema
// console.log(constainsCommonItem(array1, array2))

// Alternativa
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

function constainsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[array1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map)
  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[array2[j]]) {
      return true;
    }
  }
  return false
}
// O(a + b) Time Complexity, essa solução é melhor pois apresenta uma time complexity menor do que a outra. Ela será executada mais rápido, nesse cenário não fará tanta diferença por ser apenas uma função, porém temos que considerar a escalabidade em sistemas maiores.
// O(a) Apesar da time complexity da segunda função ser menor do que as outras, o space complexity é mais alto. Ou seja, ela será executada mais rápido ao custo de mais memória. Isso porque utilizei objetos no código que consomem mais memória.
// console.log(constainsCommonItem2(array1, array2))

// Outra alternativa com métodos específicos do JavaScript

function constainsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

console.log(constainsCommonItem3(array1, array2))
