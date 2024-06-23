const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button");
const resultEl = document.getElementById("result");

function validEmail(email){
let pat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,6}$/;
return pat.test(email)
}

function storeInlocal(email,valid){
const storad = {
email: email,
valid: valid,
timestamp: new Date().toISOString()
}
localStorage.setItem('emailValidation',JSON.stringify(storad))
}


buttonEl.addEventListener("click", () =>{
const text  = inputEl.value;
const solve = validEmail(text);
resultEl.textContent = solve ? `${resultEl.style.color = "black", "Yes this valid email"}` : `${resultEl.style.color = "red", "Please enter valid email"} `;
storeInlocal(text,solve)
})
