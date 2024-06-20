
const buttonEl = document.getElementById("button");
const resultEl = document.getElementById("result");
const copyButton = document.getElementById("buttonEls")
function password(){
let passing = " "
let str = "ABCDEFGHIJKLMNO79679868658P345QR6780STUV90WXY900Z22344' +'abcdefg77788hijk7479090907lmnop56677q8stu544v799644756w8xyz8081283456789@#$";
for( let i = 0; i < 12 ;i++){
let pass = Math.floor(Math.random() * str.length + 1  )
passing += str.charAt(pass);
}
return passing;
}


buttonEl.addEventListener("click",() =>{
const text = resultEl.value
const solve = password(text);
resultEl.textContent = solve
})


