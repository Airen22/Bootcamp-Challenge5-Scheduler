
var timeDisplayEl = $("#time-display");
var timeBlockId = $(".time-block");
var saveBtn = $(".saveBtn");
var currentHr = dayjs().format('HH');

  saveBtn.on("click", function (event){
  var descriptionId = $(this).parent().attr("id");
  var description = $(this).prev().val();
  localStorage.setItem(descriptionId, description);
})

  window.onload = function(){
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
  function displayTime() {
  var rightNow = dayjs().format('MMMM DD, YYYY [at] hh:mm:ss A');
  timeDisplayEl.text(rightNow);

  }
displayTime()
setInterval(displayTime, 1000)

