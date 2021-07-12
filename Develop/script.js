// This will show the time in the jumbotron
var timeStamp = moment().format("dddd, MMMM Do YYYY, h:mm a");;
$("#currentDay").text(timeStamp);

var dateTime = document.getElementById("currentDay");

var timeNow = Date.now();
dateTime.innerHTML = timeStamp;





// Click button to submit the input data by user
$(".saveBtn").on("click", function(event){
    var userInput = localStorage.getItem("#textarea");
    console.log(userInput)
})



//   $("#showInput").on("click", function() {
//       var userInput = localStorage.getItem("");
//       var input = $('#text').val();
//       console.log(userInput)
//      // console.log(input)
//      $('#text').val();
//      $("text").text(userInput);

//        $("#showInput").click(function() {
//            let input = document.getElementById("text").value
//            console.log(input)
//             localStorage.setItem("text",  input);
//             $("#9").val(localStorage.getItem(userInput));
//        });
//   });

