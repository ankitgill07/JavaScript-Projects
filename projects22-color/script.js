const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button")
const body = document.getElementsByTagName("body")[0]


function setColor(name){
body.style.backgroundColor = (name);
}


function randomColor(){
const red = Math.round(Math.random() * 255);
const green = Math.round(Math.random() * 255);
const blue = Math.round(Math.random() * 255);

const color = `rgb(${red}, ${green}, ${blue})`
body.style.backgroundColor = color;
}






function colorHex(color){
let n = (Math.random(color) * 0xfffff * 1000000).toString(16);
return "#" + n.slice(0,6);
}

buttonEl.addEventListener("click",() =>{
const text =  inputEl.value;
const solve = colorHex(text)

inputEl.textContent = solve
})