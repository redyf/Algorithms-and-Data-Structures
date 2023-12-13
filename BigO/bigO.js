const nemo = ['nemo'];
const everyone = ['dory', 'bruce', "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"]

const large = new Array(1000).fill("nemo")
function findNemo(array) {
  let t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!')
    }
  }
  let t1 = performance.now()
  let verifyPerformance = (t1 - t0)
  console.log(`Call to find Nemo took ${verifyPerformance} miliseconds`)
}

findNemo(large); // 0(n) --> Linear Time

const boxes = [0, 1, 2, 3, 4, 5]
function logFirstTwoBoxes(array) {
  console.log(array[0]) // 0(1)
  console.log(array[1]) // 0(1)
}

logFirstTwoBoxes(boxes) // 0(2) --> Constant Time
