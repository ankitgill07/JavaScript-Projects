const generateBtn = document.getElementById("generateBtn");


const singleHexColorGenerator = () =>{
    const hex = [0, 1, 2, 3, 4 , 5 , 6, 7, 8 ,9, "A", "B" , "C", "D", "E", "F"]


    let hexColor = "#";
for(let i = 0; i < 6; i++){
    let random = Math.floor(Math.random()*hex.length);

 hexColor += hex[random];

   

}

return hexColor;

};

const colorPaletteGenerator = () => {

const colorPalette = []
for(let i = 0; i < 4; i++){
    colorPalette.push(singleHexColorGenerator());
}

return colorPalette;

}
 

 
const rendeColorPalette = () =>{

    const colorsCoontainer = document.querySelector(".colors_coontainer");

    colorsCoontainer.innerHTML = "";

   const colorPalette = colorPaletteGenerator();

   colorPalette.forEach((color, i) =>{

    const colorDiv  = document.createElement("div");
    colorDiv.id = `color${i + 1}`;
    colorDiv.style.backgroundColor = color;
    colorDiv.className = "colorBox" ; 

    const colorTag = document.createElement("p");
    colorTag.id = `color$${i + 1} Tag`;
    colorTag.className = "colorTag";
    colorTag.innerHTML = color;
    colorDiv.appendChild(colorTag)

    colorsCoontainer.appendChild(colorDiv);

   });

   const copyClipBoard = (id) =>{

    const el = document.getElementById(id);
    
    navigator.clipboard.writeText(el.innerText).then(() =>{
       alert("Copied to Clipboard");
    }).catch((error) =>{
alert("Could not copy")
    })

   };

   const colorTags = document.querySelectorAll(".colorTag");
   colorTags.forEach((colorTags, i) => {
colorTags.addEventListener("click", () => 
    copyClipBoard(`color$${i + 1} Tag`) 



);
   });


};
rendeColorPalette();
generateBtn.addEventListener("click" , rendeColorPalette)