$( document ).ready(function() {

   $("#toggleBtn").on("click", function() {
    if($(this).attr("data-status") === "on") {

      $(this)
        .html("Play on")
        .addClass("btn-success")
        .removeClass("btn-danger")
        .attr("data-status", "off");


    } else {
      $(this)
        .html("Game off")
        .addClass("btn-danger")
        .removeClass("btn-success")
        .attr("data-status", "on");
        $('.btn-info').off();
    }
  });



});