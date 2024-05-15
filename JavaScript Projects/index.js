let isDOBOpen = false;
let dateOfBirth; 
const settingcogEl = document.getElementById("settingsIcon");
const settingsContentEl = document.getElementById("settingscontent");
const initialTextEl = document.getElementById("initialText");
const afetDOBButtonEl = document.getElementById("afetDOBButton");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("months");
const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");


const makeTwoDigitNumber = (number) => {
   return number > 9 ? number : `0 ${number}`;
}


const toggleDateOfBirthSelector = () =>{
     if(isDOBOpen){
      settingsContentEl.classList.add("hide");
        }else{
      settingsContentEl.classList.remove("hide");
           
        }
        isDOBOpen = !isDOBOpen;

   console.log("toggle", isDOBOpen)
};
const updateAge = () => {

 
  const currentdate = new Date();
const dateDiff = currentdate - dateOfBirth;
const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365 ));
const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365 )) % 12);
const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
const hour = Math.floor(dateDiff / (1000 * 60 * 60 )) % 24;
const minute = Math.floor(dateDiff / (1000 * 60 )) % 60;
const second = Math.floor(dateDiff / 1000) % 60;

yearEl.innerHTML = makeTwoDigitNumber(year);
monthEl.innerHTML = makeTwoDigitNumber (month);
dayEl.innerHTML = makeTwoDigitNumber (day);
hourEl.innerHTML = makeTwoDigitNumber (hour);
minuteEl.innerHTML = makeTwoDigitNumber (minute);
secondEl.innerHTML = makeTwoDigitNumber (second);



};


const localStorageGetter = () => {
  const year = localStorage.getItem('year');
  const month = localStorage.getItem('month');
  const date = localStorage.getItem('date');
  if(year && month && date){
    dateOfBirth = new Date(year, month, date )
  }
  updateAge();
}

const contentToggler =() => {
  updateAge();
if(dateOfBirth){

  
    initialTextEl.classList.add("hide");
    afetDOBButtonEl.classList.remove("hide");

  }else{
   afetDOBButtonEl.classList.add("hide");
   initialTextEl.classList.remove('hide');
  
  
  };
}

const setDOBHamdler = () => {
const dateString = dobInputEl.value;

dateOfBirth =  dateString ? new Date(dateString): null;





if(dateOfBirth){

localStorage.setItem('year', dateOfBirth.getFullYear());
localStorage.setItem('month', dateOfBirth.getMonth());
localStorage.setItem('date', dateOfBirth.getDate());


}
setInterval(() => updateAge(),1000 );
contentToggler();

}

localStorageGetter();
contentToggler();







settingcogEl.addEventListener("click",  toggleDateOfBirthSelector);
dobButtonEl.addEventListener("click", setDOBHamdler);