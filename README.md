# Fatalityfries
Project 1 Game

A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc. #### Planning Phase

Scorpion, the undead ninja specter, must escape the netherrealm in order to avenge his death at the hands of Subzero. One problem though...the eldergods are closing the portal in 99 seconds!!!  Help him escape and experience the sweetness that is revenge before this opportunity is forever sealed! 

Jquery was used to expertly manipulate the DOM. The HTML document consists of a sparse amount of elements that were stlyed with CSS and designed to achieve an optimally immersive experience. Scorpion, being the instantly recognizable character that his is, was used as the protagonist in order to get users to associate with and immerse in the game.

CSS: Allowed me to postion my character to the left of the screen and use jquery to manipulate the character's position by issuing a click event.

Jquery:

Jquery utlized a timer to manage the game's outcome. The click event shifts the character 200px to the right. When the character reaches 1600px, which denotes the right side of the screen, before the timer expires the user wins. If the user fails to reach the end of the screen in the alloted time he loses.

List of technologies used:

parseInt
setInterval and clearInterval
if/else statements
alert()
click()
css()


The game stays true to the KISS (Keep It Simple Stupid) dogma whilst creating an engaging user experience.

Unsolved problems:
1. The game does not reload. To solve this problem a reload method could have been used
2. After a win, the game clock continues to run and issues a 'You lose' alert although a victory was achieved.






















