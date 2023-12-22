// Google question
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

// Apesar de funcionar, a time complexity dessa função é ruim e portanto demora para ser finalizada. Majoritariamente devido ao uso de dois for loops.
function firstRecurringCharacter1(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // O(n^2)

// Essa função possui uma time complexity boa, porém uma space complexity ruim visto que utilizamos um map. Utilizamos mais memória afim de diminuir a velocidade de execução da função.
function firstRecurringCharacter2(array) {
  map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== undefined) {
      return array[i];
    } else {
      map[array[i]] = i;
    }
  }
  return undefined;
} // O(n)

test1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
test2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
test3 = [2, 3, 4, 5];

// console.log(firstRecurringCharacter1(test1));
// console.log(firstRecurringCharacter1(test2));
// console.log(firstRecurringCharacter1(test3));

console.log(firstRecurringCharacter2(test1));
console.log(firstRecurringCharacter2(test2));
console.log(firstRecurringCharacter2(test3));
