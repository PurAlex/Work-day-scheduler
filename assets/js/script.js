// DOM elements
var dayDisplayEl = $('#currentDay');
var hours = $('.time-block');
var timeNow = parseInt(moment().format("HH"));
var text = $('.description');
var btnSave = $('.saveBtn');
var hour = $('.hour');


// Function to display the day of today
function displayDay() {
    var todayDay = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(todayDay);
}
setInterval(displayDay, 1000);

// Function to check the time of the day and add the colors depending of the time.
$.each(hours, function () {
    var hourId = parseInt($(this).attr('id'));
    if (hourId === timeNow) {
        $(this).addClass("present");
    } else if (hourId < timeNow) {
        $(this).addClass("past");
    } else if (hourId > timeNow) {
        $(this).addClass('future');
    }
});

var input = document.querySelector("textarea");
var pTag = document.createElement("p");
input.append(pTag);
input.textContent = localStorage.getItem("value");

$.each(input, function () {

    btnSave.on("click", function () {

        localStorage.setItem("value", input.value);

    })
})


function display() {

    input.textContent = localStorage.getItem("value");
    console.log(localStorage.getItem("value"));

}

