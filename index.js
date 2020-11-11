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