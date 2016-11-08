$(document).ready(function(){


var counter = 200;

$('.scorpion').on('click', function() {

  $(this).css("left", counter+"px");
  counter +=200;
  if( counter === 1600) {
  alert('You Win! Refresh browser to try again');
};
  console.log(counter);
});





/*the clock is breaking the animation for some reason
the clock and animation are both working now GREAT!*/
var ourCountdown = setInterval(function() {

  var timer = parseInt($('#num').html());

  if (timer !== 0) {

    $('#num').html(timer -1);
  } else {

   clearInterval(ourCountdown);

   $('#num').html('FATALITY');
      alert('You Lose! Refresh browser to try again');

  }

}, 55);

  // console.log(parseInt($('#num').html()))
 });

// psuedocode
//function that movesCharacter
//function/variable to register clicks or whatever
//timer function that ends the game and alerts user

//while timer is running, move charcter, collect clicks
//when timer ends, alert player game ended and # of clicks
//set up for replay option after game ends
// var $body = $('.scorpion');


//   $('.scorpion').on('click', function() {
//     $(this).animate({
//       width: "70%",
//       opacity: 1,
//       marginLeft: "15.0in",
//       fontsize: "3em",
//       borderWidth: "10px"
//     }, 2000);
//  $('#clicks').text("count " + event.target.scorpion);
//   });
// $(function())





