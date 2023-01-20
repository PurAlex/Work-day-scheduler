// DOM elements
var dayDisplayEl = $('#currentDay');

function displayDay() {
    var todayDay = moment().format('dddd, MMMM Do');
    dayDisplayEl.text(todayDay);
}

setInterval(displayDay, 1000);