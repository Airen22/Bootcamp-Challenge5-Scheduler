// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeDisplayEl = $("#time-display");
var timeBlockId = $(".time-block");
var saveBtn = $(".saveBtn");
// for(var i = 0; i < timeBlockId.length; i++){
// console.log(timeBlockId[i])
//   var idtimeBlock = $(timeBlockId[i]).attr("id")
//   $("#"+idtimeBlock).find("textarea").text(localStorage.getItem(idtimeBlock))
// }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  saveBtn.on("click", function (event){
  var descriptionId = $(this).parent().attr("id");
  var description = $(this).prev().val();
  localStorage.setItem(descriptionId, description);
})


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // function formatTimeBlock() {

  // var compareHH = "hour-" + currentHr;
  
  // if (compareHH === timeBlockId) {
  //   $(".time-block").addClass('present')
  // } else {
  //   $(".time-block").addClass('past')
  // }
  // }

  // formatTimeBlock()
  // setInterval(formatTimeBlock, 1000);
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
var storedDescriptions
  window.onload = function(){
    // storedDescriptions = localStorage.getItem(timeBlockId); //get data from storage
    var currentHr = dayjs().format('HH');
    
      for (var i = 8; i < 21; i++) {
       $("#hour-"+i).find("textarea").text(localStorage.getItem('hour-'+i))
       if (currentHr == i) {
        $("#hour-"+i).addClass("present");
       } else if (currentHr > i) {
        $("#hour-"+i).addClass("past");
       } else if (currentHr < i)
        $("#hour-"+i).addClass("future");
       }
      }
      // storedDescriptions.forEach(function(description){ 
        // var description = $("textarea");
        // console.log($('#hour-9').find("textarea"))
        // $(timeBlockId).find("textarea"); 
        // $('#hour-9').find("textarea").text(storedDescriptions)
        // $('#hour-10').find("textarea").text(localStorage.getItem('hour-10'))
      // })
     
  
  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
  var rightNow = dayjs().format('MMMM DD, YYYY [at] hh:mm:ss A');
  timeDisplayEl.text(rightNow);
  }
displayTime()
setInterval(displayTime, 1000);
