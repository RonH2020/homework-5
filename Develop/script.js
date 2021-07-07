// This will show the time in the jumbotron
var timeStamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");;
$("#currentDay").text(timeStamp);
console.log(timeStamp);

var dateTime = document.getElementById("currentDay");

var timeNow = Date.now();
dateTime.innerHTML = timeStamp;

// This will show JUST the time in the beginning of the input box
var timeStamp = moment().format("h a");
$("#timeRow").text(timeStamp);

console.log(timeStamp);

var dateTime = document.getElementById("timeRow");

var timeNow = Date.now();
dateTime.innerHTML = timeStamp;

// This will be the loop to show the increments of the time through out the day
for (let i = 0; i < 60; i++) {
    dateTime[i];
}


// Click button to submit the input data by user


$("#showInput").click(function() {
    let input = document.getElementById("showInput").value
    $(this).text(input);
    console.log()
  });
