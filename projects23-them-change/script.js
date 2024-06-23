const body = document.getElementsByTagName("body")[0]
const btn = document.getElementById("btn");

let darke = false;
const setThem = () => {
if(darke){
body.style.backgroundColor = "black"
body.style.color = "white"
}else{
body.style.backgroundColor = "white"
body.style.color = "black"
}
return darke = !darke
}


btn.addEventListener("click", setThem);