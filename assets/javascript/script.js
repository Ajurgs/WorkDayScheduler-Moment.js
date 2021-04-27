// variable declerations
const currentDay = document.querySelector("#currentDay");

// call fucntions
showCurentDay();

// Functions ---------------------

// set the current day in the header
function showCurentDay() {
  currentDay.textContent = `Today is ${moment().format("MMM Do YY")}`;
}
