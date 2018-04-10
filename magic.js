$(document).ready(function(){
// TO DO FOR GAME:
// Make game end when you lose. i.e refresh the browser after alert
// make game end when you win i.e refresh the browser
// make a div with a click logger. high score is determnined by
// number of clickNumber times counter (position of screen)
var clickNumber = 0;
var counter = 200;

var $scorpion = $('.scorpion')

// function moveScorpion(e){
//   $(this).animate(pageX += counter)

// }


startGame()
function startGame(){
  $scorpion.on('click', function(e) {
  $scorpion.fadeOut("fast").fadeIn("fast")


  $(this).animate({left: counter});

  counter +=200;
  clickNumber ++
  console.log(clickNumber)
  $scorpion.fadeOut("fast").fadeIn("fast")

});

  function alertGameWin(){
    if( counter === 1600) {
  alert('You Win! Refresh browser to try again. Your number of clicks was' +
    clickNumber);
};
  console.log(counter);


  }














// $scorpion.on('click', function(e){
//   console.log(e.target)
//   console.log(e.pageX)

// })





/*the clock is breaking the animation for some reason
the clock and animation are both working now GREAT!*/
var ourCountdown = setInterval(function() {


  var timer = parseInt($('#num').html());

  if (timer !== 0) {

    $('#num').html(timer - 1);
  } else {

   clearInterval(ourCountdown);

   $('#num').html('FATALITY');
      alert('You Lose! Refresh browser to try again. Your number of clicks was' +
        clickNumber);

  }

}, 100);

  // console.log(parseInt($('#num').html()))
 };

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





