$( document ).ready(function() {

  var rpsValue = ['rock', 'paper', 'scissors'];

  var computerScore = 0;
  var ties = 0;
  var userScore = 0;
  var computerScore = 0;
  var roundCount = 0;


 $(".btn-info").on("click", function() {
  
  roundCount++;
  $('#roundCount').html(roundCount);

  var computerChoice = rpsValue[Math.floor(Math.random() * rpsValue.length)];
  var userChoice = ($(this).attr("data-throw"));

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

});



});
   
   
   