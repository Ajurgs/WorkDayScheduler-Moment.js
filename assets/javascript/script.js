// variable declerations ----------
const currentDay = $("#currentDay");
const timeContainer = $(".container");

const cureentHour = moment().hour();

let schedual = JSON.parse(localStorage.getItem("schedual")) || []; // return the stored schedual or a blank array if storage is empty

// call fucntions -----------------
showCurentDay();

displayHours();
getSavedSchedual();
// event Listeners ---------
timeContainer.on("click", ".saveBtn", function (event) {
  saveSchedual(event);
});
// Functions ---------------------

// set the current day in the header
function showCurentDay() {
  currentDay.text(`Today is ${moment().format("MMMM Do YYYY")}`);
}

// display all business hour time slots
function displayHours() {
  for (i = 0; i < 9; i++) {
    let hour = 9 + i;
    let relTime =
      hour >= cureentHour
        ? (hour = cureentHour)
          ? "present"
          : "future"
        : "past";
    // set the html of the new time block div and use a ternary operator to determine AM and PM
    let newChild = $('<div class="time-block"></div>').html(
      `<div class="row">
       <div class="hour" time = "${hour}">
       ${hour > 12 ? hour - 12 + " PM" : hour + " AM"} 
       </div>
      <textarea class="decription ${relTime}" cols="50" rows ="3"></textarea>
      <button class="saveBtn">save</button>
      </div>`
    );
    timeContainer.append(newChild);
  }
}

// on click save
function saveSchedual(event) {
  //create the object to store
  let timeVal = $(event.target).closest(".row").find(".hour").attr("time");
  let textVal = $(event.target).closest(".row").find(".decription").val();
  let newItem = { time: timeVal, text: textVal };
  // remove duplicate entries
  schedual = schedual.filter((item) => item.time != newItem.time);
  // add to the schedual array
  schedual.push(newItem);

  // save to local storage
  localStorage.setItem("schedual", JSON.stringify(schedual));
}

// get the local saved information
function getSavedSchedual() {
  $.each(schedual, function (index, value) {
    // select the time atribute from time property of the the object
    $(`[time='${value.time}']`)
      .closest(".row")
      .find(".decription")
      .val(value.text);
    // traverse to the associated textarea
    // set the textfeild val to the text property
  });
}
