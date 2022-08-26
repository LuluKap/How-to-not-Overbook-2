setInterval (() => {
    var time = moment().format("MMM Do YYYY,h:mm:ss a");
    $("#time").text(time);
    },1000)

$(init);

function init() {
  // get current day and display on top of page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // color our time blocks and start interval to re-color every minute
  colorTimeBlocks();
  setInterval(colorTimeBlocks, 1000);

  // update time blocks with data in local storage
  $(".time-block").each(function() {
    var blockId = $(this).attr("id");
    // load saved data from local storage
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });

  // attach our handler for the save buttons
  $(".saveBtn").on("click", handleSave);
}

function colorTimeBlocks() {
    // for each time block
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
      var currentHour = parseInt(moment().format("H"));
      // remove any class we may have added before
      $(this).removeClass("past present future");
      // color block based on past, present, future class
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour > currentHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    });
}
 

// $("#9oc").val(localStorage.a)
// $("#10oc").val(localStorage.b)
// $("#11oc").val(localStorage.c)
// $("#12oc").val(localStorage.d)
// $("#13oc").val(localStorage.e)
// $("#14oc").val(localStorage.f)
// $("#15oc").val(localStorage.g)
// $("#16oc").val(localStorage.h)
// $("#17oc").val(localStorage.i)

// $(".btn9").on("click", saveText);
// $(".btn10").on("click", saveText);
// $(".btn11").on("click", saveText);
// $(".btn12").on("click", saveText);
// $(".btn13").on("click", saveText);
// $(".btn14").on("click", saveText);
// $(".btn15").on("click", saveText);
// $(".btn16").on("click", saveText);
// $(".btn17").on("click", saveText);

function handleSave(event) {
    // get the id of our parent
    var hourId = $(this).parent().attr("id");
    // save data in textarea in local storage
    localStorage.setItem(moment().format("DDDYYYY") + hourId, $("#" + hourId + " textarea").val());
  }