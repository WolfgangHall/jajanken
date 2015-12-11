$( document ).ready(function() {
   $("#toggleBtn").on("click", function() {
    if($(this).attr("data-status") === "off") {
      $("#game-running").html("Game is not running");
      $(this)
        .html("SCENE ON")
        .addClass("btn-danger")
        .removeClass("btn-success")
        .attr("data-status", "on");



    } else {
      $("#game-running").html("Game is running");
      $(this)
        .html("SCENE OFF")
        .addClass("btn-success")
        .removeClass("btn-danger")
        .attr("data-status", "off");
        $(".btn-info").off();
       
    }
  });


});