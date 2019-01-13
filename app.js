/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, dice;


// create the score for each player var scores
// create variable for Round Score
// create a variable for the active player 0 = 1st player 1 = 2nd player
// create dice using math.random() and math.floor() ex math.floor(math.random())
var scores = [0.0];
var roundScore = 0;
activePlayer = 1;
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// This is a setter setting value
// using querySelector to grab one element of id then .textContent function to change text in element current-0 which = variable dice
// switched '#current-0' to '#current-' + activePlayer so when var active player is changed to 1 the current player will be 2 and 0 player is 1
document.querySelector('#current-' + activePlayer).textContent = dice;

// this one allows html to be added to dom innerHTML
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; 

//this is a getter getting value
// prints players score to the console
var x = document.querySelector('#score-0').textContent;
console.log(x)

// control css by hiding element
document.querySelector('.dice').style.display ='none'











