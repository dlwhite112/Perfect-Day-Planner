// variables
var timeNow  = moment().format('MMM Do YYYY h:mm a');
var present = 1
var past = 2
var future = 3

// time now display at the top of the Calendar 
console.log(timeNow)
console.log($("#currentDay").text(`${timeNow}`)) ;

//each time block is color-coded to indicate whether it is in the past, present, or future WHEN I click into a time block
if (timeNow > past){
    // make the color grey
}
if (timeNow == present){
// make the color red
}
if (timeNow < future){
// make the color green
}

// WHEN I click into a time block, THEN I can enter an event

//WHEN I click the save button for that time block, THEN the text for that event is saved in local storage

// WHEN I refresh the page, THEN the saved events persist (local storage??)

