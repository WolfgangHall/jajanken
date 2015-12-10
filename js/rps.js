$( document ).ready(function() {
    var rpsValue = ['rock', 'paper', 'scissors'];

    $(".btn-primary").on('click', function() {
     var randRpsVal = rpsValue[Math.floor(Math.random() * rpsValue.length)];
     console.log(randRpsVal);
    });

});