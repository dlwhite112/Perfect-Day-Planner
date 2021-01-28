// variables
var timeDisplay = moment().format("MMM Do YYYY h:mm a");
var timeNow = moment().hour();
var present
var past 
var future

// time now display at the top of the Calendar
console.log(timeNow);
console.log($("#currentDay").text(`${timeDisplay}`));

//each time block is color-coded to indicate whether it is in the past, present, or future WHEN I click into a time block
function timeBlockUpdate() {
  if (timeNow > past) {
    // make the color grey
    $(this).addClass('past');
    return
  }
  if (timeNow == present) {
    // make the color red
    $(this).addClass('present');
    return
  }
  if (timeNow < future) {
    // make the color green
    $(this).addClass('future');
    return
  }
}

// WHEN I click into a time block, THEN I can enter an event

//WHEN I click the save button for that time block, THEN the text for that event is saved in local storage

// WHEN I refresh the page, THEN the saved events persist (local storage??)

// call functions
timeBlockUpdate();