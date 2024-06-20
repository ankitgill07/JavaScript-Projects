// //Question No 1

// // function capitalizeStrings(strings) {
// // return strings.map(function(string) {
// // return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// // });
// // }

// // const inputStrings = ["hello", "world", "this", "is", "a", "test"];
// // const capitalizedStrings = capitalizeStrings(inputStrings);
// // console.log(capitalizedStrings);

// //Question No 2

// // function isSum(a,b){
// // return a + b;
// // }
// // const a = 4;
// // const b = 5;
// // const result = isSum(a,b)
// // console.log(result);

// //Question No  3

// // function isLarge(str){
// // return str.toUpperCase();
// // }
// // const str = "ankit";
// // const result = isLarge(str);
// // console.log(result);

// //Question No 4

// // const num = 3;
// // function isCheck(num){
// // if(num % 2 === 0){
// // console.log("even");

// // }else{
// // console.log("odd");
// // }
// // return num
// // }
// // console.log(isCheck(num));

// //Question No 5

// // const arr = [1,5,67,8,9,67,55];
// // function islagest(arr){
// // return Math.max.apply(null,arr);
// // }
// // const result = islagest(arr);
// // console.log(result);

// //Question No 6

// // const arr = [1,7,9,6,86,87];
// // function isFist(arr){
// // return arr[0];
// // }
// // const result = isFist(arr);
// // console.log(result);

// //Question No 7

// // const str = "ankit";
// // function isrevs(str){
// // return str.split('').reverse().join('');
// // }
// // const result = isrevs(str);
// // console.log(result);

// //Question No 8

// // function isSame(str){
// // let j = str.length -1;
// // for(let i = 0; i < str.length /2 ; i++){
// // if(str[i] != str[j]){
// // return false
// // }
// // j--;
// // }
// // return true;

// // }
// // let set1 = "Rama";
// // let set2 = "fff";
// // console.log(isSame(set2));

// //Question No 9


// // function isVowel(num){
// // const vowels = [
// // "a",
// // "e",
// // "i",
// // "o",
// // "u",
// // "A",
// // "E",
// // "I",
// // "O",
// // "U",
// // ];
// // let count = 0;

// // num.split("").forEach((char) => {
// // if (vowels.includes(char)) {
// // count++;
// // }
// // });

// // return count;
// // }
// // const num = "ankit";
// // const resulet = isVowel(num);
// // console.log(resulet);

// //Question No 10

// // const arr = ["ankit","payal","mohit"];
// // function isSize(arr){
// // return arr.length;
// // }
// // const resulet = isSize(arr);
// // console.log(resulet);

// //Question No 11

// // function iaPrime(num){
// // if(num <= 1) return false;
// // for(let i = 2; i <= Math.sqrt(num); i++){
// // if(num % i === 0){
// // return false
// // }
// // }
// // return true
// // }
// // const num = 2;
// // const resulet = iaPrime(num);
// // console.log(resulet);

// //Question No 12

// // const ramdam = "this random number"
// // function isRandam(num){
// // return Math.floor(Math.random(num) * 100 +1 );
// // }console.log(isRandam(ramdam));


// //Question No 12

// // const rquare = 3;
// // function isSqoure(num){
// // return num * num
// // }
// // console.log(isSqoure(rquare));


// //Question No 13

// // const date = "current date"
// // function isDate(){
// // return new Date ;
// // }
// // console.log(isDate(date));

// //Question No 14

// // const str = "ankit"
// // function isLanght(str){
// // return str.length;

// // }
// // console.log(isLanght(str));

// //Question No 15

// // const age = ["ankit","jatin","mohit","payal"]
// // function isIndex(arr){
// // return arr.indexOf("payal");
// // }
// // console.log(isIndex(age));

// //Question No  16

// // const number = 5;
// // function factial(n){
// // if(n < 0)return
// // if(n == 0 || n == 1)return 1
// // return n * factial(n -1);
// // }
// // console.log(factial(number));

// //Question No 17

// // const a = [1,5,6,8,54,78,54,11,1,,1,1,];
// // var findDuplicates = function(nums) {
// // let solve = 
// // };

// // console.log(findDuplicates(n));

// //Question No 18

// // var myfunction = function(){
// // return function(...arr){
// // return "helloWorld"
// // }
// // }

// //Question No 19

// // function myfunction(a,b){
// // return a + b;
// // }
// // const a = ["ankit","jatin","payal","mohit"];
// // const b = [" i love my wife ","i love my gf"]
// // console.log(myfunction(a,b));

// //Question No 20

// // function divide(num){
// // if(num % 3 === 0){
// // return true
// // }else{
// // return false
// // }
// // }
// // const num = 13;
// // console.log(divide(num));

// //Question No 21

// // function isSume(){
// // const arr = [1,5,67,8,79];
// // let sum = 0;
// // for(let i = 0; i < arr.length; i += 1){
// // sum += arr[i];
// // }
// // return sum;
// // }
// // console.log(isSume([1,5,67,8,79]));


// //Question 1

// // function isnum(square){
// // return square ** 2
// // }
// // const square = 3;
// // console.log(isnum(square));



// //Question 2

// // const cars  = "thar";
// // function isSize(str){
// // return str.length;
// // }
// // console.log(isSize(cars));


// //Question 3

// // const wife = ["i love my future wife " ,"i love my future girlfriend","i love my future cars"]
// // function isFirst(arr){
// // return arr.indexOf("i love my future girlfriend");
// // }
// // console.log(isFirst(wife));


// //Question 4 


// // function isLarge(a,b, c){
// // return Math.max(a, b, c);
// // }
// // console.log(isLarge(21,47,7));
// // console.log(isLarge(2,4,78));
// // console.log(isLarge(2,90,79,));

// //Question  5

// // const myName = "i love my wife";
// // function isSub(str){
// // return str.includes("my wife");
// // }
// // console.log(isSub(myName));

// //Question  6

// // const a = "ankit or ";
// // const b = "payal"
// // function isConcat(a,b){
// // return a + b;
// // }
// // console.log(isConcat(a , b));

// //Question No 7

// // const second = 4;
// // function isDate(min){
// // return min * 60;
// // }
// // console.log(isDate(second));

// //Question No 8

// // const wifeName = 'swite'
// // function isSide(str){
// // return str.split('').reverse().join('')
// // }
// // console.log(isSide(wifeName));

// //Question No 9
// // const wife = "ankit"
// // function isCheck(plain){
// // const revesed = plain.replace(/[\W_]/g, '');
// // let normal = plain.split('').reverse().join('')
// // return revesed === normal
// // }
// // console.log(isCheck(wife));

// //Question No 10


// // const myNme = "ankit";
// // function isVovle(str){
// // let vovelCount = 0;
// // for(const char of str){
// // if(char === "a" || 
// // char === "e" || 
// // char === "i" || 
// // char === "o" || 
// // char === "u"){
// // vovelCount++;
// // }

// // }
// // return vovelCount;
// // }
// // console.log(isVovle(myNme));


// //Question No 11

// // const num = 6;
// // function isfactiacl(n){
// // if(n < 0 )return
// // if(n === 0 )  return 1
// // return n * isfactiacl (n - 1);
// // }
// // console.log(isfactiacl(num));

// //Question No 12

// // function isFibonacci(n){
// // let Fibonacci  = [0,1];
// // if(n <= 0){
// // return []
// // }else if(n === 0){
// // return [0];
// // }else if(n === 2){
// // return Fibonacci;
// // }
// // for(let i = 2 ; i < n; i++){
// // Fibonacci.push(Fibonacci[i - 1] + Fibonacci[i -2])
// // }
// // return Fibonacci;
// // }
// // const n = 10;
// // console.log(isFibonacci(n));

// //Question No 13

// // const wife = "payal"
// // function isupper(str){
// // return str[0].toUpperCase() + str.slice(1);
// // }
// // console.log(isupper(wife));

// //Question No 14

// // const number = [1,1,4,4,2,1,5,2,1,3,3,1]
// // function isdubale(arr){
// // return [...new Set (arr)];
// // }
// // console.log(isdubale(number));

// //OR 

// // const number = [1,1,4,4,2,1,5,2,1,3,3,1]
// // function myfunction(arr){
// // return arr.filter((item, index ) => arr.indexOf(item) === index)
// // }
// // console.log(myfunction(number));

// //Question No 15
// // let i = 0;
// // for(let i = 0; i < 100; i++){
// // if(i % 3 === 0 && i % 5 === 0 ){
// // console.log(i,"fizz or buzzz");
// // }else if(i % 3 === 0){
// // console.log(i,"fizz");
// // }else if(i % 5 === 0 ){
// // console.log(i,"buzzz");
// // }else{
// // console.log(i,"not multiplie");
// // }
// // }

// //Question No 16

// // const celsius = 20;
// // function temperature(celsius){
// // return (celsius * 9/5)+32
// // }
// // const result = temperature(celsius);
// // console.log(`${celsius}° is equal to ${result}f°`);

// //Question No 17

// // const myNumber = -99;
// // function determine(num){
// // if(num > 0){
// // console.log("possitive");
// // }else{
// // console.log("negitive");
// // }
// // return num
// // }
// // console.log(determine(myNumber));


// //Question No 18

// // const num = [13,5,7,9,7,5,3,3,3,5,7]
// // function isOder(num){
// // return  num.sort(function(a, b){return a - b})
// // }
// // console.log(isOder(num));

// //Question No 19

// // const num = "this a random"
// // function israndm(num){
// // return Math.floor(Math.random(num)  * 10 + 1)
// // }
// // console.log(israndm(num));

// //Question No 20

// // const wife = ["ankit","payal","jatin"]
// // function isSpacle(str){
// // return str.includes("payal")
// // }
// // console.log(isSpacle(wife));

// //Question No 21


// // function mulit(num , number){
// // return num % number === 0;
// // }
// // console.log(mulit(10,4));

// //Question No 1

// // const wife = "i love my wife payal"
// // function longestWordString(str){
// // const words = str.split(' ');
// // let longWords = '';
// // for (let word of words){
// // if(word.length > longWords.length){
// // longWords = word
// // }
// // }
// // return longWords;
// // }5
// //Question No 2

// // const arr = [2,4,6,7,7,5,3,5,];
// // const target = 7;
// // function bainarySeacher(arr,target){
// // let left = 0;
// // let right = arr.length;
// // while (left <= right){
// // let mind = Math.floor((left + right) / 2)

// // if(arr[mind] === target){
// // return mind
// // }
// // if(arr[mind] > target){
// // right = mind -1;
// // }
// // else{
// // left = mind  +1
// // }
// // return -1
// // }
// // }
// // console.log(bainarySeacher(arr,target));

// //Question No 3

// // const arr = [1,4]
// // function isSum(arr){
// // let sum = 0
// // for(let i = 0; i < arr.length; i++){
// // sum+=arr[i];
// // }
// // return sum
// // }
// // console.log(isSum(arr));

// //Question No 4

// // const my = 10;
// // function fibonacci(num){
// // let factial = [0,1];
// // if(num <= 0){
// // return []
// // }
// // else if(num === 0){
// // return [0]
// // } else if(num === 2){
// // return factial
// // }
// // for(let i = 2; i < num; i++){
// // factial.push(factial[i -1 ]  + factial[i -2] )
// // }
// // return factial
// // }
// // console.log(fibonacci(my));


// //Question No 5

// // const num = "ankit"
// // function isVovles(num){
// // let vowelClount = 0;
// // for(const char of num){
// // if(char === "a" || char === "i" || char === "e" || char === "o" || char === "u"){
// // vowelClount++
// // }

// // }
// // return vowelClount;
// // }
// // console.log(isVovles(num));


// //Question No 5

// // const num = 5;
// // function isfactorial(n){
// // if(n < 0) return
// // if(n === 0 ) return 1
// // return n * isfactorial(n - 1);
// // }
// // console.log(isfactorial(num));

// //Question No 6

// // const a = [23,6,8,3,];
// // const b = [4,7,6,4,6]
// // function isMerge(a , b){
// // return a + b;
// // }
// // console.log(isMerge(a,b));

// //Question No 6

// // const wife = "payal"
// // function isfunction(str){
// // return str.split('').reverse().join('');
// // }
// // console.log(isfunction(wife));

// //Question No 7

// // const n = "payal"
// // function iaPrimealindrome(n){
// // const resulet = n.replace(/[\W_]/g, '');
// // const my =  n.split('').reverse().join('');
// // return my === resulet
// // }
// // console.log(iaPrimealindrome(n));


// //Question No 8

// // const a = "race";
// // const b =  "care"
// // function  anagrams(a,b){
// // const str1 = a.replace(/[^A-Za-z]/g, '').toLowerCase();
// // const str2 = b.replace(/[^A-Za-z]/g, '').toLowerCase();

// // if(str1.length !== str2.length){
// // return false;
// // }

// // const stord1 = str1.split('').sort().join();
// // const stord2 = str1.split('').sort().join();

// // return stord1 === stord2;
// // }

// // console.log(anagrams(a,b));

// //Question No 9

// // function clickme(num){

// // const red = Math.floor(Math.random(num) * 255 );
// // const bule = Math.floor(Math.random(num) * 255 );
// // const green = Math.floor(Math.random(num) * 255 );

// // const color  = `rgb(${red}, ${bule} , ${green})`;
// // document.body.style.backgroundColor = color;

// // }

// //Question No 10

// // const num = [18,78,68,40,79,95,73,77,77]
// // function islong(arr){
// // return arr.sort(function(a , b){return a -b});

// // }
// // console.log(islong(num));

// //Question No 11

// // const num = 1;
// // function negitive(num){
// // if(num < 0){
// // console.log("negitive");
// // }else{
// // console.log("positive");
// // }
// // return num
// // }
// // console.log(negitive(num));

// //Question No 12

// // const wife = "  payal  love     "
// // function isSpace(str){
// // return str.trim();
// // }
// // console.log(isSpace(wife));

// //Question No 13

// // const n = 3;
// // function isBoolen(n){
// // if(n % 10 === 0 ){
// // return true
// // }else{
// // return false
// // }

// // }
// // console.log(isBoolen(n));

// //Question No 14

// // const gf = ["ankit" , "payal", "jatin","mohit"]
// // function wife(arr){
// // return arr.reverse();
// // }
// // console.log(wife(gf));

// //Question No 15

// // const num =2
// // function isConvet(fun){
// // return ft*12;
// // }
// // console.log(isConvet(num));

// //Question No 16

// // function isEven(){
// // for (let i = 1; i <= 10; i++) {
// // if(i % 2 === 0 ){
// // console.log(i,"even");
// // }
// // }
// // }
// // isEven();



// //Question No 1

// // const wife = "i love me wife payal"
// // function  sentence(str){
// // const longe = str.split(' ');
// // let large = "";
// // for(let words of longe){
// // if(words.length > large.length){
// // large = words;
// // }
// // }
// // return large;
// // }
// // console.log(sentence(wife));

// //Question No 2

// // let s = "ankitgill";
// // let c = "l";
// // function isOccurrence(s){
// // let resulet = s.split(c).length -1;
// // return resulet;
// // }
// // console.log(isOccurrence(s));

// //Question No 3

// // const num = [1,2,3,4,5,6,7]
// // function check (arr){
// // for (let i = 0; i < arr.length; i++){
// // if(arr[i] < arr [i - 1]){
// // return false;
// // }
// // }
// // return true
// // }
// // console.log(check(num));

// //Question No 4

// // const min = 10;
// // const max = 50;
// // function random(min,max){
// // return Math.floor(Math.random() * ( max - min) + min);
// // }
// // console.log(random(min, max));

// //Question No 5

// // const wife = "payal"
// // function title(str){
// // return str.charAt(0).toUpperCase() + str.slice(1);
// // }
// // console.log(title(wife));

// //Question No 6

// let firsts = [1,2,2,1]
// let seconds = [2,2];
// function inTercetion(first , second){
// let set = new Set(first);
// return Array.from(new Set(second.filter(el => set.has(el))));
// }
// console.log(inTercetion(firsts,seconds));

// //Question No 7

// // const arr = [23,0,"payal",false,true,null,'hi',undefined, [],""]
// // function  flay(value){
// // return value.filter((value) => value);
// // }
// // console.log(flay(arr));


// //Question No 8

// // const a = [1,4,[5,6,],[8,9,5],8,6]
// // function flatten(arr){
// // return arr.reduce((a, b) => a.concat(b),[]);
// // }
// // console.log(flatten(a));

// //Question No 9

// // const num = [123,null,true,false,"hi",undefined,NaN,[],""]
// // function falsy(value){
// // let newarr = [];
// // value.forEach((K) => {
// // if(K){
// //     newarr.push(K);
// // }
// // })
// // return newarr
// // }
// // console.log(falsy(num));

// //Question No 10

// // const arr = [10, 20, 4, 45, 99, 99,89];
// // function twoLarge(num){
// // if(num.length < 2){
// // return null;
// // }
// // let first = -Infinity;
// // let second = -Infinity;
// // for(let number of num){
// // if(number > first){
// // second = first;
// // first = number;
// // }else if(number  > second && number < first){
// // second = number;
// // }
// // }
// // if(second === -Infinity){
// // return null;
// // }
// // return second;
// // }
// // console.log(twoLarge(arr));


// //Question No 1

// // const celce = 28;
// // function celsius(value){
// // let temperature = (value * 9/5 +32);
// // return temperature
// // }
// // console.log(celsius(celce));

// //Question No 2

// // const arr = [3,6,5,7,6,5,6,7,7,7,65,656]
// // const num = [3,6,5,67,6,55,6,76,7,7,6,66]
// // const long = [3,67,5,69,5,906,907,7657,7,65,656]
// // function lagest(arr){
// // let number = Math.max.apply(null, arr);
// // return number;
// // }
// // console.log(lagest(arr));
// // console.log(lagest(num));
// // console.log(lagest(long));

// //Question No 3

// // function calculator(num1 , num2, operator){
// // if(operator == "+"){
// // return num1 + num2
// // }else if (operator == "-"){
// // return num1 - num2;
// // }else if (operator == "*"){
// // return num1 * num2;
// // }else if (operator == "/"){
// // if(num2 == 0);
// // console.log("cannot divide by zero");
// // return num1 / num2;
// // }
// // else{
// // console.log("invalid  operator");
// // }
// // }

// // console.log(calculator(4,8,"*") );


// //Question No 4

// // const target = ("hello payal", "payal");
// // function end(str){
// // let solve = str.endsWith("payal");
// // return solve;
// // }

// // console.log(end(target));


// //Question No 5

// // const wife = "payal "
// // function repert(str){
// // let string = str.repeat(3);
// // return string;
// // }
// // console.log(repert(wife));

// //Question No 6

// // const wife = "my wife is payal "
// // function turnOn(str , num){
// // if(str.length > num){
// // return str.slice(0, num) + "...";
// // }else{
// // return str;
// // }
// // }
// // console.log(turnOn(wife,8));

// //Question No 7

// // const num = [1, 2, 3, 4, 5,8,10];
// // const isEven  = num => num % 2 === 0;
// // function fand(arr, fun){
// // for(let i =0; i < arr.length; i++){
// // if(fun(arr[i])){
// // return arr[i];
// // }
// // }
// // return undefined;
// // }
// // console.log(fand(num,isEven))

// //Question No 8

// // function loop(){
// // for(let i = 1; i < 100; i++){
// // console.log(i);
// // }
// // }
// // loop()

// //Question No 9

// // function miising(a,n){
// // let total = Math.floor((n + 1) * (n + 2) /2);
// // for(let i = 0; i < n; i++){
// // total -= a[i];
// // }
// // return total;
// // }

// // let arrNum = [ 1, 3, 7, 5, 6, 2 ]
// // let arrLength = arrNum.length;
// // let solve = miising(arrNum,arrLength);
// // console.log(solve);

// //Question No 10 

// // function password (){
// // let pasing = "";
// // let str = 'ABCDEFGHIJKLMNO79679868658P345QR6780STUV90WXY900Z22344' +'abcdefg77788hijk7479090907lmnop56677q8stu544v799644756w8xyz8081283456789@#$';

// // for(let i = 0; i <= 8; i++){
// // let pass  = Math.floor(Math.random() * str.length + 1  )
// // pasing += str.charAt(pass);
// // }
// // return pasing;
// // }
// // console.log(password());

// //Question No 11

// // const inputEl = document.getElementById("inputs");
// // const resultEl = document.getElementById("result");
// // const buttonsEl = document.getElementById("buttons");


// // function rotate(str){
// // let rotateText = str.split('').reverse().join('');
// // return rotateText
// // }


// // buttonsEl.addEventListener("click" , () => {

// // const text = inputEl.value;
// // const reverseText = rotate(text);

// // resultEl.textContent = reverseText;

// // });

// //Question No 12

// // const inputEl = document.getElementById("inputs");
// // const resultEl = document.getElementById("result");
// // const buttonsEl = document.getElementById("buttons");

// // function vowels(str){
// // let vovelCount = 0;
// // for(const char of str){
// // if(char === "a" || 
// // char === "e" || 
// // char === "i" || 
// // char === "0" ||
// // char === "u"){
// // vovelCount++;
// // }
// // }
// // return vovelCount;
// // }


// // buttonsEl.addEventListener("click" , () => {
// // const text = inputEl.value;
// // const vowelText = vowels(text);

// // resultEl.textContent = vowelText;

// // })

// //Question No 13

// // const color = "hex color"
// // function hex(color){
// // let n = (Math.random(color) * 0xfffff * 1000000).toString(16);

// // return "#" + n.slice(0,6);
// // }
// // console.log(hex(color));

// //Question No 14

// const email = "ankitrai326@gmailcom"
// function check(s){
// let pat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,6}$/
// return pat.test(s)

// }
// console.log(check(email));

// //Question No 1

// // function anograms(str1,str2){
// // let itemFirst = str1.toLowerCase();
// // let itemSecond = str2.toLowerCase();

// // itemFirst = itemFirst.split("").sort().join("");
// // itemSecond = itemSecond.split("").sort().join("");

// // let resulet = itemFirst === itemSecond;

// // return resulet;
// // }

// // console.log(anograms("layap","payal"));


// //Question No 2

// // const wife = "aaa"
// // function plaicedrome(str){
// // let count = 0

// // function check(left ,right){
// // while(left >= 0 && right < str.length && str[left] === str[right]){
// // count++;
// // left--;
// // right++;
// // }
// // }
// // for (let i = 0; i < str.length; i++){
// // check(i,i);
// // check(i,i + 1);
// // }
// // return count
// // }
// // console.log(plaicedrome(wife));

// //Question No 3

// // class listNode{
// // constructor(value){
// // this.value = value
// // this.next = null
// // }
// // }
// // function listReveseNode(head){
// // let prev = null
// // let current = head;
// // let next = null;

// // while(current !== null){
// // next = current.next;

// // current.next = prev;

// // prev = current;
// // current = next;
// // }
// // return prev
// // }
// // // Helper function to print the linked list
// // function printList(head) {
// // let current = head;
// // let result = [];
// // while (current !== null) {
// // result.push(current.value);
// // current = current.next;
// // }
// // console.log(result.join(' -> '));
// // }

// // // Create a linked list: 1 -> 2 -> 3 -> 4
// // let head = new listNode(1);
// // head.next = new listNode(2);
// // head.next.next = new listNode(3);
// // head.next.next.next = new listNode(4);

// // console.log("Original list:");
// // printList(head);

// // // Reverse the linked list
// // head = listReveseNode(head);

// // console.log("Reversed list:");
// // printList(head);


// //Question No 4

// // class stack {
// // constructor(){
// // this.items = [];
// // }
// // isEmpty(){
// //     return this.items.length === 0 
// // }
// // push(item){
// // this.items.push(item);
// // }
// // pop(){
// // if(!this.isEmpty()){
// // return this.items.pop();
// // }else{
// // throw new Error("peek form empty stack");
// // }
// // }
// // peek(){
// // if(!this.isEmpty()){
// // return this.items[this.items.length -1];
// // }else {
// // throw new Error("peek form empty stack");
// // }
// // }
// // }

// // const stacks = new stack();
// // stacks.push(1);
// // stacks.push(2);
// // stacks.push(3);

// // console.log("peek",stacks.peek());
// // console.log("pop", stacks.pop());
// // console.log("peek after pop ", stacks.peek());



// //Question No 5


// // function caesarCipher(str, shift) {
// //     // Ensure the shift is within 0-25
// //     shift = shift % 26;
    
// //     // Helper function to shift a single character
// //     function shiftChar(char, shift) {
// //         const code = char.charCodeAt(0);
        
// //         // Handle uppercase letters
// //         if (code >= 65 && code <= 90) {
// //             return String.fromCharCode(((code - 65 + shift) % 26) + 65);
// //         }
        
// //         // Handle lowercase letters
// //         if (code >= 97 && code <= 122) {
// //             return String.fromCharCode(((code - 97 + shift) % 26) + 97);
// //         }
        
// //         // Return the character as is if it's not a letter
// //         return char;
// //     }
    
// //     // Apply shift to each character in the string
// //     return str.split('').map(char => shiftChar(char, shift)).join('');
// // }

// // // Example usage:
// // console.log(caesarCipher('Hello, World!', 3));  // Khoor, Zruog!
// // console.log(caesarCipher('abc', 1));            // bcd
// // console.log(caesarCipher('XYZ', 2));            // ZAB



// //Question No 6

// // function  swap(strArr,i,j){
// // const temp = strArr[i];
// // strArr[i] = strArr[j];
// // strArr[j] = temp;

// // }

// // function permuter(str,n = str.length, strArr = str.split('')){
// // if(n === 1){
// // console.log(strArr.join(""));
// // }else{
// // for(let i = 0; i < n ; i++){
// // permuter(str,n -1 ,strArr)
// // if(n % 2 === 0){
// // swap(strArr,i,n-1)
// // }else {
// // swap(strArr,0,n -1)
// // }
// // }
// // }
// // }
// // const str = "ab";
// // permuter(str)

// //Question No 7


// const roman = {
// I: 1,
// V: 5,
// X: 10,
// L: 50,
// C: 100,
// D: 500,
// M: 1000,
// }
// // const s = "MCMLXXXIX";
// // function ramdamtoInt(s){
// // let accumlater = 0;
// // for(let i = 0; i < s.length; i++){
// // if(s[i] === "I" && s[i + 1] === "V"){
// // accumlater+=4;
// // i++;
// // }else if(s[i] === "I" && s[i + 1] === "X"){
// // accumlater+= 9;
// // i++
// // }else if(s[i] === "X" && s[i + 1] === "L"){
// // accumlater+= 40;
// // i++
// // }else if(s[i] === "X" && s[i + 1] === "C"){
// // accumlater+= 90;
// // i++
// // }else if(s[i] === "C" && s[i + 1] === "D"){
// // accumlater+= 400;
// // i++
// // }else if(s[i] === "C" && s[i + 1] === "M"){
// // accumlater+= 900;
// // i++
// // }else{
// // accumlater += roman[s[i]];
// // }
// // }
// // return accumlater;
// // }
// // console.log(ramdamtoInt(s));

// //Question No 8

// // const a = "listen";
// // const b = "silent";
// // function check(str1, str2){
// // let itemFirst = str1.toUpperCase();
// // let itemSecond = str2.toUpperCase();
// // itemFirst = itemFirst.split("").sort().join('');
// // itemSecond = itemSecond.split("").sort().join("");
// // let solve = itemFirst === itemSecond;
// // return solve;
// // }

// // console.log(check(a,b));

// //Question No 9

// // const  num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// // function* chunker(arr,n){
// // for(let i = 0; i < arr.length; i+=n){
// // yield arr.slice(i, i + n);
// // }
// // }
// // console.log([...chunker(num,2)]);

// //Question No 10

// // let array = [1, 2, 3, 4, 5];
// // function contains(arr,value){
// // let resulet = arr.includes(value);
// // return resulet
// // }
// // console.log(contains(array,3));

// //Question No 11

// // function toggleParagraph(paragraphId){
// // var paragraph = document.getElementById(paragraphId);
// // if(paragraph.classList.contains('hidden')){
// // paragraph.classList.remove('hidden')
// // }else{
// // paragraph.classList.add("hidden");
// // }
// // }

// //Question No 1

// // const wife = "i love my wife payal"
// // function title(str){

// // str =  str.split(" ");

// // for(let i = 0 , x = str.length; i < x ; i++){
// // str[i] = str[i][0].toUpperCase() + str[i].substr(1);
// // }
// // return str.join(' ');
// // }
// // console.log(title(wife));

// //Question No 2

// // const wife = ("payal");
// // const love = "l";
// // function ending (str, target){
// // var newStr =  "";
// // newStr = str.substring(str.length - target.length);
// // return newStr === target;
// // }
// // console.log(ending(wife,love));

// //Question No 3

// // const wife = "payal "
// // function dobbule(str){
// // return str.repeat(3);
// // }
// // console.log(dobbule(wife));

// //Question No 4

// // const wife = "A-tisket a-tasket A green and yellow basket"
// // function  turon(str,num){
// // if(str.length > num){
// // return str.slice(0,num)+("...");
// // }else{
// // return str
// // }
// // }
// // console.log(turon(wife,8));

// //Question No 5

// // const arr = [1,2,3,4,6,7,8,9,0,10]
// // function * chunker(str,num){
// // for(let i = 0; i < str.length; i+=num){
// // yield str.slice(i,i + num);
// // }
// // }
// // console.log(...chunker(arr,2));

// //Question No 6

// // const num = [1,4];
// // function isSumAll(arr){
// // let  bigger = Math.max(...arr);
// // let smaller = Math.min(...arr);

// // let  total = bigger + smaller;

// // for(let i = smaller + 1; i < bigger; i++){
// // total+=i;
// // }
// // return total
// // }
// // console.log(isSumAll(num));

// //Question No 7

// // const arr = "abce";
// // function miising(str){
// // for(let i = 0; i < str.length - 1; i++){
// // const currentCharCode = str.charCodeAt(i);
// // const nextCharCode = str.charCodeAt(i + 1);

// // if(nextCharCode !== currentCharCode + 1){
// // return String.fromCharCode(currentCharCode + 1);
// // }
// // }
// // return undefined;
// // }
// // console.log(miising(arr));


// //Question No 8

// // let first = [[1, 3, 2], [5, 2, 1, 4], [2, 1]];
// // function flatten(arr){
// // let args  = Array.from(arguments);

// // let arrconcat = args.reduce(function(a,b)  {
// // return a.concat(b);
// // },[]);
// // let unqueArr = function(a){
// // return a.reduce(function(b,c) {
// // if(b.indexOf(c) < 0){

// // b.push(c);
// // }
// // return b;
// // },[]);
// // };
// // return unqueArr(arrconcat)
// // }
// // console.log(flatten(first));


// //Question No 1

// // const wife = ["payal","joty","preeti"]
// // function findIndex(arr,element){
// // let solve = arr.indexOf(element)
// // return solve 
// // }
// // console.log(findIndex(wife,"joty"));

// //Question No 2

// // const wife = "Payla"
// // function checkUpper(str){
// // let solve = str.charAt(0).toUpperCase() + str.slice(1);
// // if(str === solve){
// // return true;
// // }else{
// // return false
// // }

// // }
// // console.log(checkUpper(wife));


// //Question No 3

// // const circle = 5;
// // function findArea(r){
// // let area = Math.PI*r*r;
// // return area
// // }
// // console.log(findArea(circle));


// //Question No 4

// // const wife = ("Hello world, welcome to the universe.")
// // function containString(str,substring){
// // let solve = str.includes(substring);
// // return solve;
// // }
// // console.log(containString(wife,"world"))

// //Question No 5

// // const num = [1,2,3,4]
// // function remove(arr,elem){
// // for(let i = 0; i < arr.length; i++){
// // if(arr[i] === elem){
// // arr.splice(i,1); i--;
// // }
// // }
// // return arr
// // }
// // console.log(remove(num,3));

// //Question No 6

// // const str = 123;
// // function numberString(num){
// // return num.toString();
// // }
// // console.log(numberString(str));

// //Question No 7

// // const end = [];
// // function empty(arr){
// // if(arr.length === 0){
// // return true;
// // }else{
// // return false;
// // }
// // }
// // console.log(empty(end));

// //Question No 8

// // const wife = "i hate my wife payal"
// // function myRplace(str,before,after){
// // str = str.replace(before,function(x){
// // if(before[0] == before[0].toUpperCase()){
// // after = after[0].toUpperCase() + after.slice(1);
// // return after
// // }
// // return after
// // });
// // return str
// // }

// // console.log(myRplace(wife,"hate","love"));

// //Question No 9

// // const wife = "I LOVE PAYAL"
// // function spinalCase(str){
// // return str.replace(/[-_]/g,'').split(/(?=[A-Z])/).join("").split(/\W/).filter(v => v!= "").join("-").toLowerCase();
// // }
// // console.log(spinalCase(wife));

// //Question No 10

// function destroyer(arr,...valuesToRemove){
// return arr.filter(element => !valuesToRemove.includes(element))
// }
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// //Question No 11

// const inputEl = document.getElementById("input");
// const buttonEl = document.getElementById("button");
// const resultEl = document.getElementById("result");


// function simpleCalucater(num1 , num2 , operator){
// if(operator == "+"){
// return num1 + num2;
// }else if(operator == "-"){
// return num1 - num2;
// }else if(operator == "*"){
// return num1 * num2;
// }else if(operator == "/"){
// if(num2 == 0){
// console.log("cannot divide by zero");
// return num1 / num2
// }else{
// console.log("invalid  operator");
// }
// }
// }



// buttonEl.addEventListener("click", () => {

// const text = inputEl.value.trim();

// const  sume = text.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/)

// if(sume){
// const num1 = parseFloat(sume[1])
// const operator = sume[2];
// const num2 = parseFloat(sume[3]);

// const result = simpleCalucater(num1,num2,operator);

// resultEl.textContent = result;
// }else{
// console.log("invalid Input");
// }


// })

//Question No 1

// function remaider(a,b){
// return a % b;
// }
// console.log(remaider(10,3));

//Question No 2

// const wifes = "i love my wife payal gill"
// function countWords(str){
// return str.split(" ").length;
// }
// console.log(countWords(wifes));

//Question No 3

// const wife = "payal gill"
// function stringToArray(str){
// return str.split(" ") ;
// }
// console.log(stringToArray(wife));

 //Question No 4

// const num = [true, false, true]
// function getFirstElement(arr){
// return arr.shift();
// }
// console.log(getFirstElement(num));

//Question No 5

// const result = 7;
// function Binary(num){
// return num.toString(2);
// }
// console.log(Binary(result));


//Question No 6

// const wife = "payal"
// function occurrences(str,char){
// let resulet = str.split(char).length -1;
// return resulet
// }
// console.log(occurrences(wife,"a"));

//Question No 7

// const min = 2;
// const max = 10;
// function getRandomInt(min,max){
// return Math.floor(Math.random()*(max - min + 1) + min)
// }
// console.log(getRandomInt(min,max));

//Question No 8

// const count = [1,2,3,4,5]
// function mide(num){
// num.sort(function(a,b){return a -b});
// let haft = Math.floor(num.length/2);
// if(num.length % 2){
// return num[haft];
// }else{
// return (num[haft -1] + num[haft]);
// }
// }
// console.log(mide(count));

//Question No 9

// const a = 1;
// const b = 3;
// const c = 6;
// function maxOfThree(a,b,c){
// return Math.max(a,b,c);
// }
// console.log(maxOfThree(a,b,c));

//Question No  10 

// const wife = 5;
// function counting(arr){
// if(arr < 1){
// return [];
// }else{
// const countArray = counting(arr - 1);
// countArray.push(arr);
// return countArray.sort(function (a,b) { return b - a});
// }
// }
// console.log(counting(wife));

//Question No  11

// const inputEl = document.getElementById("input");
// const buttonEl = document.getElementById("button");
// const resulet = document.getElementById("result");


// function change(str){
// return str.split(" ").length;
// };

// buttonEl.addEventListener("click" ,() => {
// const text = input.value;
// const resuletes = change(text);
// resulet.textContent = resuletes;
// })

//Question No  12

// const inputEl = document.getElementById("input");

// function plaicedrome(str){
// return str.split("").reverse().join("");
// };


// function check() {
// const text = input.value;
// const resuletes = plaicedrome(text);
// if( text === resuletes){
// alert("P A L I N D R O M E");
// }else{
// alert("Not today!")
// }
// input.value = "";
// };

//Question No 1

// const num = 10;
// function getFibonacciArrage(count){
// let n1  = 1; n2 = 0,result = [];
// for(let i = 0; i < count; i++){
// result.push(n2);
// const temp = n1;
// n1 = n2;
// n2 += temp
// }
// return result;
// }
// console.log(getFibonacciArrage(num));

//Question No 2

// const wife = [1,2,3,4,5]
// function listElement(arr){
// return arr[arr.length -1];
// }
// console.log(listElement(wife));

//Question No 3

// const second = 5;
// function minutesToSeconds(min){
// return min*60;
// }
// console.log(minutesToSeconds(second));

//Question No 4

// const wife = "payal gill"
// function replcestring(str,oldchar,newchar){
// return str.replace(oldchar, newchar);
// }
// console.log(replcestring(wife,"payal", "ankit"));


//Question No 5

// let   date1 = new Date(Date.now());
// let   date2 = new Date('2024-7-30');
// function daysBetween(date1,date2){
// let different1 = date2.getTime() - date1.getTime();
// let different2 = Math.round(different1/(1000 * 3600 * 24));
// return different2
// }
// console.log(daysBetween(date1,date2));



//Question No 6

// const wife = 1233333333
// function isAlphabetic(str){
// return  /^[a-zA-Z]+$/.test(str);
// }
// console.log(isAlphabetic(wife));



//Question No 7

// const num = [4556645,66455669,1132455,6613669845,566182264,4556604556,62733963189,624536,452660]
// function indexOfLargest(arr){
// if(arr.length === 0){
// return -1;
// }
// let largesIndex = 0;
// for(let i = 0;i < arr.length; i++){
// if(arr[i] > arr[largesIndex]){
// largesIndex = i
// }
// }
// return largesIndex
// }
// console.log(indexOfLargest(num));

//Question No 8

// const abcd = {a: 1, b: 2, c: 3}
// function objectKeysToArray(arr){
// return  Object.keys(arr)  ;
// }
// console.log(objectKeysToArray(abcd));


//Question No 9

// const arr = [{a: 1}, {a: 2}, {a: 3}];
// function sumproperty(arr,pro){
// return arr.reduce((sum , obj) => {
// return sum + (obj[pro] || 0)
// },0)
// }
// console.log(sumproperty(arr,"a"));


//Question No 10


// const num = [,1,2,3,4,2,,2,2,2]
// function frequentNumber(arr){
// if(arr.length === 0 ){
// return null;
// }
// const frequentMap = {};
// let maxFrequancy = 0;
// let mostFrequemcyElement = arr[0];

// arr.forEach(element => {
// frequentMap[element] = (frequentMap[element] || 0)+1;
// if(frequentMap[element] > maxFrequancy){
// maxFrequancy = frequentMap[element];
// mostFrequemcyElement = element;
// }
// });
// return mostFrequemcyElement;
// }
// console.log(frequentNumber(num));

//Question No 1

// const wife = "payalpya";
// function firstNoRepetingChar(str){
// let arr1 = str.split("");
// let resulet = "";
// let ctr = 0;
// for(let i = 0; i < arr1.length; i++){
// ctr = 0;
// for(let e = 0; e < arr1.length; e++){
// if(arr1[i] === arr1[e]){
// ctr+=1;
// }
// }
// if(ctr < 2){
// resulet = arr1[i];
// break;
// }
// }
// return resulet;
// }
// console.log(firstNoRepetingChar(wife));

//Question No 2

// const num = [1,2,3,4,5]
// function rotateArray(arr,step){
// const n = arr.length;
// step = step % n
// if(step === 0){
// return arr
// }
// return arr.slice(-step).concat(arr.slice(0,n-step))
// }
// console.log(rotateArray(num,2))

//Question No 3

// const wife = ("A man, a plan, a canal: Panama")
// function isPalindrome(str){
// let total = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
// let solve = total.split("").reverse().join("");
// return total === solve;
// }
// console.log(isPalindrome(wife));

//Question No 4

// const wife = "abcabcbb"
// function lengthOfLongestSubstring(str){
// if(str.length === 1){
// return 1
// }
// let map = new Map();
// let  maxLength = 0;
// for(let i = 0; i < str.length; i++){
// if(map.has(str[i])){
// i = map.get(str[i]) + 1;
// map.clear();
// map.set(str[i],i)
// }else{
// map.set(str[i],i);
// if(maxLength < map.size){
// maxLength = map.size
// }
// }
// }
// return maxLength
// }
// console.log(lengthOfLongestSubstring(wife))

//Question No 5

// const arr = [[1, 3, 5,8,7] ,[2, 4,6]]
// function mergeSortedArrays(arr1){
// let second = arr1.reduce((a,b) => a.concat(b));
// let sorts = second.sort(function (a,b){return a - b} )
// return sorts = second
// }
// console.log(mergeSortedArrays(arr));

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// function mergeSortedArrays(arr1,arr2){
// let merrageArray = [];
// let i = 0,j = 0;
// while(i < arr1.length &&  j < arr2.length){
// if(arr1[i] < arr2[j]){
// merrageArray.push(arr1[i]);
// i++
// }else{
// merrageArray.push(arr2[j]);
// j++
// }
// }
// while(i < arr1.length){
// merrageArray.push(arr1[i]);
// i++
// }
// while(j < arr2.length){
// merrageArray.push(arr2[j]);
// j++
// }
// return merrageArray;
// }
// console.log(mergeSortedArrays(arr1,arr2));

//Question 1

// const wife = "i love my wife payal"
// function countWords(str){
// return str.split(' ').length;
// }
// console.log(countWords(wife));

//Question 2

// const wife = "hello world";
// function containsSubstring(str,substring){
// return str.includes(substring);
// }
// console.log(containsSubstring(wife,"worldS"));

//Question No 3 

// const num = 7;
// function prime(n){
// if(n <=  1){
// return false
// }
// for(let i = 2; i <  n; i++ ){
// if(n % i == 0){
// return false
// }
// return true
// }
// }
// console.log(prime(num));

//Question No 4

// const num = [1,2,3,4,5]
// function findIndex(arr,index){
// return arr.indexOf(index);
// }
// console.log(findIndex(num,3));

//Question No 5

// const num = [1,2,3,4,5]
// function  removeElement(arr,element){
// for(let i = 0; i < arr.length;i++){
// if(arr[i] === element){
// arr.splice(i,1),i--;
// }
// }
// return arr
// }
// console.log(removeElement(num,2));

//Question No 6

// const num = [1, [2, 3], [4, [5, 6]]];
// function flattenArray(arr){
// let resulet = [];
// for(const item of arr){
// if(Array.isArray(item)){
// resulet = resulet.concat(flattenArray(item));
// }else{
// resulet.push(item);
// }

// }
// return resulet
// }

// console.log(flattenArray(num));

//Question No 7

// const arr = [3,2,4]
// function twoSum(nums,target){
// const hash = {};
// for(let i = 0; i < nums.length; i++){
// let value = nums[i];
// hash[value]=i;
// }
// for(let i = 0; i < nums.length; i++){
// let check = target-nums[i];
// if(hash[check] && hash[check]!=i);
// return [i,hash[check]]
// }
// }
// console.log(twoSum(arr,6));

//Question No 8

// const arr = [4,5,6,7,0,1,2]
// function secarch(nums,target){
// let start = 0; end = nums.length-1;

// while(start<=end){
// const mid = Math.floor((start+end)/2);

// if(nums[mid] === target){
// return mid;
// }
// if(nums[mid]>=nums[start]){
// if(target>=nums[start]&&target<nums[mid]){
// end=mid-1
// }else{
// start=mid+1
// }
// }
// else{
// if(target>nums[mid]&&target<=nums[end]){
// start=mid+1;
// }else{
// end=mid-1;
// }
// }

// }
// return -1
// }
// console.log(secarch(arr,9));

//Quetion No 1

// const arr = [3,2,4]
// function twoSum(nums,target){
// const hash = {}
// for(let i = 0; i < nums.length;i++){
// let value = nums[i]
// hash[value]=i;
// }
// for(let i = 0; i< nums.length;i++){
// let check = target-nums[i];
// if(hash[check]&&hash[check]!=i);
// return [i,hash[check]]
// }
// }
// console.log(twoSum(arr,6));

//Question No 2

// const nums = 123;
// function reverseNumber(x){
// let str = x.toString().split('').reverse().join('');
// if(str.endsWith("-")){
// str = "-" + str;
// return parseInt(str)
// }else{
// return parseInt(str)
// }

// }
// console.log(reverseNumber(nums));


//Question No 3

// const num = [9,9,9,9]
// function plusOne(digit){
// return (BigInt(digit.join("")) + BigInt(1)).toString().split("")
// }
// console.log(plusOne(num));

//Question No 4

// const wife = "payal"
// function strStr(str,char){
// return str.indexOf(char);
// }
// console.log(strStr(wife,"a"));

//Question No 5

// function addBinary(a,b){
// return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
// }
// console.log(addBinary("1010","1011"));

//Question No 1

// const wife = "anagram"
// function isAnagram(s,t){
// return s.split("").sort().join("") === t.split("").sort().join("");
// }
// console.log(isAnagram(wife,"nagaram"));

//Question No 2

// const power = 27;
// function  powerThree(n){
// return 3**parseInt(Math.log(n)/Math.log(3)) === n;

// }
// console.log(powerThree(power));


//Question No 3

// const arr = [3,2,3]
// function majorityElement(nums){
// const threshoud = Math.floor(nums.length/2);
// const map = {};
// for(let i = 0; i < nums.length;i++){
// const value = arr[i];
// map[value] = map[value] + 1 || 1;
// if(map[value] > threshoud){
// return value
// }
// }
// }
// console.log(majorityElement(arr));

// //Question No 4

// function missing(arr){
// let n = arr.length;
// let total = Math.floor((n * (n+ 1))/2);
// for(let i = 0; i < n ; i++){
// total -= arr[i];
// }
// return total
// }
// let arrs = [3, 0, 1];
// console.log(missing(arrs));

// //Question No 5

// const first = [1, 2, 2, 1] 
// const second = [2,2]
// function inTercetion(first,second){
// let set = new Set(first);
// return Array.from(new Set(second.filter(el => set.has(el))));
// }
// console.log(inTercetion(first,second));

//Question No 6

// const num = 15;
// function fizzBuzz (n){
// let arr = [];
// for(let i = 1; i <= n; i++){
// if(i % 3==0 && i % 5 == 0) arr[i-1]= "FizzBuzz"
// else if(i % 3==0)          arr[i-1]= "Fizz"
// else if(i % 5==0)          arr[i-1]= "Buzz"
// else                       arr[i-1]=''+i
// }
// return arr
// }
// console.log(fizzBuzz(num));



//Question No 1

// const first = ["abc", "d", "defg"]
// const second = ["abcddefg"]
// function stringEquall(word1,word2){
// return word1.join("") === word2.join("");
// }
// console.log(stringEquall(first,second));

//Question No 2


// Symbole = {
// "I" : 1,
// "V" : 5,
// "X" : 10,
// "L" : 50,
// "C" : 100,
// "D" : 500,
// "M" : 1000,
// };

// // const num = 3 ;
// function roman(s){
// value = 0;
// for(let i = 0; i < s.length; i+=1){
// Symbole[s[i]] < Symbole[s[i+1]] ? value -= Symbole[s[i]]: value += Symbole[s[i]];
// }
// return value;
// };
// console.log(roman("MI"));

//Question No 3

// const value = "[]()[()()][{}]()";
// function isValid(s){
// let obj = {'(':')','{':'}','[':']'};
// let stack = [];
// for(const char of s){
// if(obj[char]) stack.push(char);
// else if(obj[stack.pop()] !== char )return false;
// }
// return stack.length==0;
// }
// console.log(isValid(value));

//Question No 4

// const remove = [3, 2, 2, 3]
// function removeElement(nums,val){
// for(let i = 0; i < nums.length; i++){
// if(nums[i] !== val){
// nums.splice(i,1)
// }
// }
// return nums
// }
// console.log(removeElement(remove,3));

//Question No 5

// const arr = [1,3,5,6]
// function searchInsert(nums,target){
// for(let i = 0; i < nums.length; i++){
// if(nums[i] === target){
// return i;
// }else if(target < nums[i]){
// return i;
// }else if(i === nums.length - 1 || (nums[i] < target && target < nums[i+1])){
// return i + 1
// }
// }
// }
// console.log(searchInsert(arr,7))


function findeIndex(arr,target){
let resulet = arr.IndexOf(target)(function(elem) resulet.elem-)
}