const calculateFormEl = document.getElementById("calculateForm")
const resultEl = document.getElementById("result")

const calculateMarks =  (event) => {
const maxMarks = 500;
event.preventDefault();

  const formData = new FormData(calculateFormEl);

  const data = {}

 formData.forEach((value, key) =>{
 data[key] = +value;
 });
const totalMarks = data.maths + data.science + data.hindi  + data.english + data.histary;
const percentage = Math.floor((totalMarks / maxMarks) * 100).toFixed(2);
resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`

};