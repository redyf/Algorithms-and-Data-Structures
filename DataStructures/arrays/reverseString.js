// Create a function that reverses a string:
// "Hi my name is Mateus" should be:
// "suetaM si eman ym iH"

// Primeira alternativa com métodos do js, porém possui uma time complexity maior do que a a função reverse abaixo.

function reverseString(str) {
  let t1 = performance.now()
  let reversedString = str.split("").reverse().join("");
  let t2 = performance.now()
  finalPerformance = (t2 - t1).toFixed(6)
  console.log(`It took ${finalPerformance}s to reverse the string: ${reversedString}`)
}

reverseString("Hi my name is Mateus")

// Alternativa com loops, possui uma space complexity menor do que anterior fazendo com que a função seja executada mais rápido.

function reverse(str) {
  let t1 = performance.now()
  if (!str || str.length < 2 || typeof str !== "string") {
    return "That's not good"
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  joinBackwards = backwards.join("")
  let t2 = performance.now()
  finalPerformance = (t2 - t1).toFixed(6)
  console.log(`It took ${finalPerformance}s to revert this string: ${joinBackwards}`)
}

reverse("Hi my name is Mateus")

// Outra alternativa com arrow functions para deixar o código menor.
const reverse3 = (str) => str.split("").reverse().join("")

console.log(reverse3("Hi my name is Mateus"))
