
console.log(null >0);// f
console.log(null ==0);//f
console.log(null >= 0);  // true because null is converted to 0 in this case, and 0 >= 0 is true and in comparison operator it will convert  into 0 

console.log(undefined > 0);//f
console.log(undefined ==0);//f
console.log(undefined > 0);//f

console.log("2">1);// true because "2" is converted to 2 and 2 > 1 is true  it automatically converts string to number in comparison operator
console.log("01" == 1);

console.log("01" ===1);// false because "01" is a string and 1 is a number, so they are not strictly equal. The === check strictly data type