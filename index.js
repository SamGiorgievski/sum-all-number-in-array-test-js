function sumItems(array) {
  let sum = 0;
  for (let x in array) {

    if (!Array.isArray(array[x])) {
      sum += array[x]; 

    } else {
      sum += sumItems(array[x]);
      
    }
  }
  return sum;
}

module.exports = sumItems;
