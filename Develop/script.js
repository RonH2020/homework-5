// This will show the time in the jumbotron
// This will display the format
var timeStamp = moment().format("dddd, MMMM Do YYYY, h:mm a");;
$("#currentDay").text(timeStamp);
// Grabs the element from the html document
var dateTime = document.getElementById("currentDay");
// Will display the date and time that it currently is
var timeNow = Date.now();
dateTime.innerHTML = timeStamp;





// Click button to save the input data by user
$(".saveBtn").on("click", function(){
    var userInput = $(this).siblings(".userInput").attr("textarea");
// This will grab the text entered by user and store in localStorage
    var input = $(this).siblings(".userInput").val();
    localStorage.setItem(input, userInput);
    console.log(input)

    // Gets items stored in localStorage
    $("#9am").val(localStorage.getItem('9am'))
    $("#10am").val(localStorage.getItem('10am'))
    $("#11am").val(localStorage.getItem('11am'))
    $("#12am").val(localStorage.getItem('12pm'))
    $("#13am").val(localStorage.getItem('1pm'))
    $("#14am").val(localStorage.getItem('2pm'))
    $("#15am").val(localStorage.getItem('3pm'))
    $("#16am").val(localStorage.getItem('4pm'))
    $("#17am").val(localStorage.getItem('5pm'))


})



