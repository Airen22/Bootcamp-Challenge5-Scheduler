// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeDisplayEl = $("#time-display");
var timeBlockClass = $(".time-bock");
var saveBtn = document.querySelector(".saveBtn");
   
// saveBtn.on("click", storeDescription);
//   function storeDescription () {
//     console.log(this.parent().id);

//   }
   

function millitaryTime() {
  var currentHr = dayjs().format('HH');
  localStorage.setItem('24Hr', "hour-" + currentHr)
  }
  millitaryTime()
  setInterval(millitaryTime, 1000);

  // function present () {
  //   for (var i = 0; i < 9; i ++ )
  //   var timeId = document.getElementsByClassName('time-block')[i].id;
  //   if (timeId == localStorage.getItem('24Hr')) {
      
  //   }
  // }

  // present();


  


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
saveBtn.addEventListener("click", function (){
  var descriptionId = $(this).parent().attr("id");
  // var description = $(this).previousChild().;
  localStorage.setItem(descriptionId, description);
})
function storeDescription (event) {
  var id = $(this).parent().id;
  localStorage("descritpion", id);
}


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
  var rightNow = dayjs().format('MMMM DD, YYYY [at] hh:mm:ss A');
  timeDisplayEl.text(rightNow);
  }
displayTime()
setInterval(displayTime, 1000);
