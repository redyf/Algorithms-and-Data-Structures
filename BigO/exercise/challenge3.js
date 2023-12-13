function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index])
    index++;
  }

  for (let i = 0; i < items.length; i++) {
    console.log("hi")
  }
}

// O(n)
