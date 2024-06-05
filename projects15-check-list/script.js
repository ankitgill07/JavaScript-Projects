const input = document.getElementById("input");

function reverseString(str){
return str.split("").reverse().join("");
}


function check(){
const value = input.value;
const reverse = reverseString(value);

if( value === reverse){
alert("P A L I N D R O M E");
}else{
alert("Not today!")
}
input.value = ""
}














































//Question No = 1

// function one(arr){
//    return (Math.round(arr));
// }
// const arr = 8.8;
// const resulet = one(arr);
// console.log(resulet);

//Question No = 2 

// function two(num1,num2){
//     return (Math.min(num1,num2));

// }
// const num1 = 9;
// const num2 = 5;

// const result = two(num1 ,num2);
// console.log(result);

//Question No = 3

//  function three(str){
//     return str.toString();

//  }
// const str = [1,4,6,8,0];
// const result = three(str);
// console.log(result);

//Question = 4

// function four(a,b){
//     return (Math.max(a,b));
// }
// const a = 10;
// const b = 9;
// const total = four(a,b)
// console.log(total);


//Question = 5

// function five(sqare){
//     return sqare * sqare ;
// }
// const sqare = 5;
// const answer = five(sqare);
// console.log(answer);

//Question = 6 

// function sex(a,b,c,d){
//  return a + ( c/d.length)
// }




//Question = 7
// let sum
// function seven(odd){
//     if(sum % 2 === 0){
//         console.log("even");
//     }else{
//         console.log("odd");
//     }
//     return odd
// }
// const odd = 0;
// const resulet = seven(odd);
// console.log(resulet);
