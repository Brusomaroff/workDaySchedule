// Time display at top of page 
var timeDisplay = $('#currentDay')

  var currentTime = dayjs().format('dddd, MMMM D, YYYY');
  timeDisplay.text(currentTime);
  $(document).ready(function () {
  // makes the save button on click
  $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      // seting text in the local storage
      localStorage.setItem(time, text);
  })
  // Getting item from the local storage
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  })

