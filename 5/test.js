
let nums = [10, 11, 12, 13, 14, 15, 16, -1, 8, 2, 3, 5];
console.log("The numbers are ", nums);

function multinums(numInput) {
    
    let theNums = [];

  for (let i = 0; i < numInput.length; i++) {
    if (numInput[i] < 0) {
      break;
    }
    //  return numInput[i];
    theNums.push(numInput[i]);
    
  }
  return theNums
  
  
}
console.log("The values before the negative values ", multinums(nums));
