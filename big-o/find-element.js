/**
 * As the search list increases , the time taken to find an element also increases.
 * As this leads to increased number of calculations.
 * Time may change based on CPU performance. So this is not a correct way of finding whether an algorithm is good or not.
 * This is where big O notation comes into picture.
 * It is a way of measuring how good an algorithm is.
 * In this case , as the input increases , the number of operations/computations/comparisions increases.
 */
function findElement() {
  const elementToFind = 5;
  const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16];
  // const myList = new Array(10000).fill(5);
  const timeStart = performance.now();
  for (i = 0; i <= myList.length; i++) {
    if (myList[i] === 5) {
      console.log("Element Found");
    }
  }
  const timeEnd = performance.now();
  const timeTaken = timeEnd - timeStart;
  console.log(`Time taken : ${timeTaken.toFixed(2)} milliseconds`);
}

findElement();
