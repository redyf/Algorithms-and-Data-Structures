// Variable array is somewhere in memory and the computer knows it.
const strings = ['a', 'b', 'c', 'd'];
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.
console.log(strings[2])

// push
strings.push("e"); // O(1)

// pop
strings.pop();
strings.pop(); // O(1)

// unshift
strings.unshift("x"); // O(n)

// splice
strings.splice(2, 0, "alien"); // O(n)

console.log(strings)
