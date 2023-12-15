function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booooo!")
  }
}

// boooo([1, 2, 3, 4, 5]) // O(1)

function arrayOfHiNTimes(n) {
  let hiArray = []
  time0 = performance.now()
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  console.log(hiArray)
  time1 = performance.now()
  console.log(`It took ${time1 - time0}s to execute the function`)
  return hiArray;
}

arrayOfHiNTimes(6) // O(n)
