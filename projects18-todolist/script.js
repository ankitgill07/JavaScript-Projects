let items = [];

const itemDiv = document.getElementById("items");
const input = document.getElementById("inputItem")
const stringKey = "items";


function renderItems (){
itemDiv.innerHTML = null;

for(const [idx, item] of Object.entries(items)){
const container = document.createElement('div');
container.style.marginBottom = "10px";
const text = document.createElement("p");
text.style.display = "inline";
text.style.marginRight = "10px"
text.textContent = item;

const button = document.createElement("button");
button.textContent = "Delete";
button.onclick = () => removeItem(idx);

container.appendChild(text);
container.appendChild(button);

itemDiv.appendChild(container);
}
}

function loadItems(){
const oddItems = localStorage.getItem(stringKey);
if(oddItems) items = JSON.parse(oddItems);
renderItems();
}


function saveItems(){
const stringItems = JSON.stringify(items);
localStorage.setItem(stringKey, stringItems)
}

function addItems(){
const value = input.value;
if(!value){
alert('You cannot add an empty item')
return
}
items.push(value);
renderItems()
input.value = "";
saveItems();
}

function removeItem(idx) {
    items.splice(idx, 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded",loadItems);