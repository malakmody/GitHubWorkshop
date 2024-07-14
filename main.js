const genRandNum = (num)=> Math.random() * num;
const findMean = (...nums)=> {
    const sum = nums.reduce((prev,curr)=>prev+curr)
    return sum/nums.length;
}
const findSmallest = (arr) =>{
    
  
    // Initialize the smallest value to the first element in the array
    let smallest = arr[0];
  
    // Iterate through the array and update the smallest value if a smaller value is found
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
  
    return smallest;
  }
