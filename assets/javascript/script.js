// variable declerations
const currentDay = $("#currentDay");
const timeContainer = $(".container");
// call fucntions
showCurentDay();

displayHours();

// Functions ---------------------

// set the current day in the header
function showCurentDay() {
  currentDay.text(`Today is ${moment().format("MMMM Do YYYY")}`);
}

// display all business hour time slots
function displayHours() {
  for (i = 0; i < 9; i++) {
    let hour = 9 + i;
    // set the html of the new time block div and use a ternary operator to determine AM and PM
    let newChild = $('<div class="time-block"></div>').html(
      `<div class="row">
       <div class="hour">
       ${hour > 12 ? hour - 12 + " PM" : hour + " AM"} 
       </div>
      <textarea class="present" cols="50" rows ="3"></textarea>
      <button class="saveBtn">save</button>
      </div>`
    );
    timeContainer.append(newChild);
  }
}

// on click save
// save the current textbox

// get the local saved information
