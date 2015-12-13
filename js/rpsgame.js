$( document ).ready(function() {


  var rpsValue = ['rock', 'paper', 'scissors'];
  var computerScore = 0;
  var ties = 0;
  var userScore = 0;
  var computerScore = 0;
  var roundCount = 0;


  function bindControls() {

    $(".btn-info").on("click", function() {

      roundCount++;
      $('#roundCount').html(roundCount);


      startAnimation();

      var userChoice = ($(this).attr("data-throw"));
      var computerChoice = rpsValue[Math.floor(Math.random() * rpsValue.length)];


      $('#userChoice').html(" " + userChoice);
      $('#computerChoice').html(" " + computerChoice);


      if (computerChoice === userChoice) {
       $('#endGameMessage').html('\'twas a tie');
       ties++;
       $('#ties').html(ties);
     } 
     else if (computerChoice === 'rock' && userChoice === 'scissors') {
       $('#endGameMessage').html('Computer wins');
       computerScore++;
       $('#computerScore').html(computerScore);
     } 
     else if (computerChoice === 'scissors' && userChoice === 'paper') {
       $('#endGameMessage').html('Computer Wins');
       computerScore++;
       $('#computerScore').html(computerScore);
     } 
     else if (computerChoice === 'paper' && userChoice === 'rock') {
       $('#endGameMessage').html('Computer Wins');
       computerScore++;
       $('#computerScore').html(computerScore);
     } 
     else {
       $('#endGameMessage').html("User Wins");
       userScore++;
       $('#userScore').html(userScore);
     }

      if (roundCount === 5) {
        endGame();
      }

   });
}

//code used to toggle Game on and off

$("#toggleBtn").on("click", function() {
  if($(this).attr("data-status") === "off") {

    $(this)
    .html("Game on")
    .addClass("btn-success")
    .removeClass("btn-danger")
    .attr("data-status", "on");
    bindControls();
    resetBtn();

  } else {
    $(this)
    .html("Game off")
    .addClass("btn-danger")
    .removeClass("btn-success")
    .attr("data-status", "off");
    $(".btn-info").off();
  }
});


//button used to reload page only called when controls are bound

function resetBtn (){
  $(".resetBtn").click(function(){
    document.location.reload(true);
  });
}


//modal that shows on game end
function endGame() {
  if (userScore === computerScore) {
      setTimeout(function() {
      $("#tieModal").modal("show");
    }, 2300)
  } 

  else if (computerScore > userScore) {
    setTimeout(function() {
    $("#loserModal").modal("show");
  }, 2300)

  } else if (userScore > computerScore) {
    setTimeout(function() {
    $("#winnerModal").modal("show");

  }, 2300)
  }
}

function startAnimation() {  
    $("#userHand").addClass('floating');  
    setTimeout(function(){
      $("#userHand").removeClass('floating')
    },2000);
    $("#computerHand").addClass('floating');  
    setTimeout(function(){
      $("#computerHand").removeClass('floating')
    },2000);

}




//animations


});






