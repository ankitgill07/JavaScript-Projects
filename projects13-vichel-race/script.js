class vahicle  {
    constructor(emjoi,speed){
     this.emjoi = emjoi;
     this.speed = speed;
    };
    addToPage(){
        const path = document.createElement("MARQUEE");
        path.innerText = this.emjoi;
        path.scrollAmount = this.speed;
        document.body.appendChild(path);
    };
};

const bicylek = new vahicle ("🚴‍♀", 1);
bicylek.addToPage();
const motarbicylek = new vahicle ("🚴‍♀", 2);
motarbicylek.addToPage();
const motoscrooter = new vahicle ("🚴‍♀", 3);
motarbicylek.addToPage();
