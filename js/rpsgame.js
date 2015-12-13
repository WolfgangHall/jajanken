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
      $('#roundCount').html(" " + roundCount);


      startAnimation();

      userChoice = ($(this).attr("data-throw"));
      computerChoice = rpsValue[Math.floor(Math.random() * rpsValue.length)];


      $('#userChoice').html(" " + userChoice);
      $('#computerChoice').html(" " + computerChoice);

      changeUserGlyph();
      changeCompGlyph();

      if (computerChoice === userChoice) {
       $('#endGameMessage').html('\'twas a tie');
       ties++;
       $('#ties').html(" " + ties);
     } 
     else if (computerChoice === 'rock' && userChoice === 'scissors') {
       $('#endGameMessage').html('Computer wins');
       computerScore++;
       $('#computerScore').html(" " + computerScore);
       
     } 
     else if (computerChoice === 'scissors' && userChoice === 'paper') {
       $('#endGameMessage').html('Computer Wins');
       computerScore++;
       $('#computerScore').html(" " + computerScore);
       

     } 
     else if (computerChoice === 'paper' && userChoice === 'rock') {
       $('#endGameMessage').html('Computer Wins');
       computerScore++;
       $('#computerScore').html(" " + computerScore);
       
     } 
     else {
       $('#endGameMessage').html("User Wins");
       userScore++;
       $('#userScore').html(" " + userScore);
     }


//round end messages

if (roundCount === 5) {
  endGame();
}

if (roundCount === 10) {
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
    }, 2000)
  } 

  else if (computerScore > userScore) {
    setTimeout(function() {
      $("#loserModal").modal("show");
    }, 2000)

  } else if (userScore > computerScore) {
    setTimeout(function() {
      $("#winnerModal").modal("show");

    }, 2000)
  }
}

function startAnimation() {  
  $("#userHand").addClass('floating');  
  setTimeout(function(){
    $("#userHand").removeClass('floating')
  },1500);
  $("#computerHand").addClass('floating');  
  setTimeout(function(){
    $("#computerHand").removeClass('floating')
  },1500);

}

$(".btn-info").hover(function () {
  $(this).toggleClass("tossing");
}); 

$(".btn-warning").hover(function () {
  $(this).toggleClass("pulse");
});


function changeUserGlyph () {
  if (userChoice === 'scissors') {
    $('#userHandChange').removeClass().addClass("fa fa-rotate-180 fa-hand-scissors-o fa-4x");
  } else if (userChoice === 'paper') {
    $('#userHandChange').removeClass().addClass("fa fa-rotate-90 fa-hand-paper-o fa-4x");
  } else if (userChoice === 'rock') {
    $('#userHandChange').removeClass().addClass("fa fa-rotate-90 fa-hand-rock-o fa-4x");
  }
}

function changeCompGlyph () {

  if (computerChoice === 'scissors') {
    $('#computerHandChange').removeClass().addClass("fa fa-rotate-360 fa-hand-scissors-o fa-4x");
  } else if (computerChoice === 'paper') {
    $('#computerHandChange').removeClass().addClass("fa fa-rotate-270 fa-hand-paper-o fa-4x");
  } else if (computerChoice === 'rock') {
    $('#computerHandChange').removeClass().addClass("fa fa-rotate-270 fa-hand-rock-o fa-4x");
  }

}




});






