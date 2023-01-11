function displayTime() {
  var rightNow = dayjs().format('MMMM DD, YYYY [at] hh:mm:ss A');
  $("#time-display").text(rightNow);
  }
displayTime()
setInterval(displayTime, 1000)

function militaryTime () {
  var currentHr = dayjs().format('HH');
  localStorage.setItem('militaryTime', currentHr)
}
militaryTime()
setInterval(militaryTime, 1000);

window.onload = function(){
  var militaryTime = localStorage.getItem('militaryTime')
  for (var i = 8; i < 21; i++) {
    $("#hour-"+i).find("textarea").text(localStorage.getItem('hour-'+i))
      if ((militaryTime) == i) {
        $("#hour-"+i).addClass("present");
      } else if (militaryTime > i) {
        $("#hour-"+i).addClass("past");
      } else if (militaryTime < i)
        $("#hour-"+i).addClass("future");
      }
    }

$(".saveBtn").on("click", function (event){
  var descriptionId = $(this).parent().attr("id");
  var description = $(this).prev().val();
  localStorage.setItem(descriptionId, description);
})
