const genRandNum = (num)=> Math.random() * num;
const findMean = (...nums)=> {
    const sum = nums.reduce((prev,curr)=>prev+curr)
    return sum/nums.length;
}
const findSmallest = (arr) =>{
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
  
    return smallest;
  }
