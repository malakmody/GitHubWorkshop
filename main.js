const genRandNum = (num)=> Math.random() * num;
const findMean = (...nums)=> {
    const sum = nums.reduce((prev,curr)=>prev+curr)
    return sum/nums.length;
}
console.log(
    findMean(2,3,4));
