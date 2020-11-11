function makeSumDivisibleByP(array,p){
 if(array.length===0){
   return -1;
 }
 let difference=array.reduce((a, b) => a + b, 0)%p;
 if(difference===0){
   return 0;
 }
 for(let subArraySize=1;subArraySize<array.length;subArraySize++){
   for(let i=0;i<=array.length-subArraySize;i++){
    if(array.slice(i,i+subArraySize).reduce((a, b) => a + b, 0)===difference){
      return subArraySize;
     }
}
 }
return -1;
}
console.log(makeSumDivisibleByP([],3));
console.log(makeSumDivisibleByP([3],3));
console.log(makeSumDivisibleByP([1,2],2));
console.log(makeSumDivisibleByP([1],3));
console.log(makeSumDivisibleByP([1,2],3));
console.log(makeSumDivisibleByP([1,2,3],3));
console.log(makeSumDivisibleByP([3,1,4,2],6));
console.log(makeSumDivisibleByP([6,3,5,2],9));
// Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.

// Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.

// A subarray is defined as a contiguous block of elements in the array.

// Example 1:
// Input: nums = [3,1,4,2], p = 6
// Output: 1
// Explanation: The sum of the elements in nums is 10, which is not divisible by 6. 
// We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.
// Example 2:
// Input: nums = [6,3,5,2], p = 9
// Output: 2
// Explanation: We cannot remove a single element to get a sum divisible by 9. 
// The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.
// Constraints:
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 109
// 1 <= p <= 109