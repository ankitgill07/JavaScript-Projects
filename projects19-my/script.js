//Question No 1 

// function one(str){
// return  str.split(' ');
// }
// const str =  "my name is ankit";
// const result = one(str);
// console.log(result);


//Question No 2

// function resv(str){
// // const myString = str.split(' ');
// // const aposit = myString.reverse();
// // const joining = aposit.join('');
// // return joining;
// // }
// // const str = "ankit ";
// // const result = resv(str);
// // console.log(result);

//Question No 3

// for(let i = 0; i <= 100; i++){
// if(i % 2 === 0)
// {
// console.log("even",i);
// }else{
// console.log("odd");
// }
// }

//Question No 4 

// function facter(num){
// if( num === 0){
// return 1
// }
// return num * facter(num - 1);
// }
// const num = 4;
// const result = facter(num);
// console.log(result);

//Question No 5 

// function isPalindrome(str) {

// const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');


// const reversedStr = normalizedStr.split('').reverse().join('');

// return normalizedStr === reversedStr;
// }

// const testStr1 = "A man, a plan, a canal, Panama";
// const testStr2 = "racecar";
// const testStr3 = "ankit";

// console.log(isPalindrome(testStr1)); // Output: true
// console.log(isPalindrome(testStr2)); // Output: true
// console.log(isPalindrome(testStr3)); // Output: false


//Question No 6

// function isSize(arr){
// return Math.max.apply(null, arr);
// }

// const arr = [1,75,7,7,53];
// const result = isSize(arr);
// console.log(result);

//Question nO 7

// function vowel(str){
// let  count = 0;
// for(const num of str){
// if(num === "a" || num === "e" || num === "i" || num === "o" || num === "u")
// {
// count++
// }

// }
// return count
// }
// const count = "ankit";
// const result = vowel(count);
// console.log(result);

//Question No 8

// function assingre(num){
// return num.slice().sort((a,b) => a -b )
// }
// const count = [1,10,5,95];
// const result = assingre(count);
// console.log(result);

//Question No 9 

// function assingre(num){
// return num.slice().sort((a,b) => b - a )
// }
// const count = [1,10,5,95];
// const result = assingre(count);
// console.log(result);

//Question No 10

// function randam(num){
// return Math.floor(Math.random(num) * 100 +1);
// }
// const num = "this is randam"
// const result = randam(num);
// console.log(result);

//Question No 11 panding
// let sum = 0;
// function myFunction(arr){
// for(let i = 0; i < arr.length; i++){
// return sum+=arr[i];
// }
// }
// const arr = [1,4,5,7,6,5];
// const result = myFunction(arr);
// console.log(result);

// Question No 12

// function isSize(str){
// return str.length;
// }
// const str = "ankit";
// const result = isSize(str);
// console.log(result);


// Question No 13

// for (let i = 10; i >= 0; i--){
//     console.log(i);
// }

// Question No 14

// function isNull(str){
// return str.length === 0;
// }
// const str = "ankit";
// const result = isNull(str);
// console.log(result);

//Question No 15

// function isPrime (n){
// if(n <= 1)
// return false;

// for(let i = 2; i < n; i++)
// if(n % i == 0)
// return false;

// return true

// }
// const n = 6;
// const result = isPrime(n)
// console.log(result);
