var timeStamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");;
$("#currentDay").text(timeStamp);
console.log(timeStamp);

var dateTime = document.getElementById("currentDay");

var timeNow = Date.now();
dateTime.innerHTML = timeStamp;