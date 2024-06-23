const imagesEl = document.getElementById("images")

function on(){
if(imagesEl.src.match("onbtn")){
imagesEl.src = "https://www.w3schools.com/js/pic_bulboff.gif";
}else{
imagesEl.src = "https://www.w3schools.com/js/pic_bulbon.gif"
}
}

function off(){
if(imagesEl.src.match("offbtn")){
imagesEl.src = "https://www.w3schools.com/js/pic_bulbon.gif";
}else{
imagesEl.src = "https://www.w3schools.com/js/pic_bulboff.gif"
}
}

