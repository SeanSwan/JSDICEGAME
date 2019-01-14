/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();
// create dice using math.random() and math.floor() ex math.floor(math.random())




//https://developer.mozilla.org/en-US/docs/Web/Events Event Listhener Refferance

/*function btn() {
  //do somthing here
}
btn();*/

/*this now has become a call back function calling btn() since this function .addEventListhener is now calling btn with the need for ()
document.querySelector('.btn-roll').addEventListener('click', btn);*/

//this is the same function above with an anon call back function instead which can only be called within this functions scope
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    //1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. Display the result Bring back the dice roller
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";
    //3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
      //add score
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //NEXT PLAYER
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
//using gamePlaying variable for a boolean value if buttons should init.
  
    //Add current score to global score
    scores[activePlayer] += roundScore;
    //same thing as above. longer version non preffered
    //scores[activePlayer] = scores[activePlayer] + roundScore;

    // Update the UI activePlayer with .textContent using id #score-'
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    console.log(activePlayer);
    // Check if player won the game
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      //change the css style display to none. Not the best way to mix css with javascript.
      //better practice is 'document.querySelector('.player-0-panel').classList.toggle('active');'
      // Using the .toggle between classes ex .active class and .winner class in css add to index html tags.
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      //Stop roll button from moving after
      gamePlaying = false;
    } else {
      //NEXT PLAYER
      nextPlayer();
    }
  }
  
  });

function nextPlayer() {
  //Next Player
  // active player is test condition if it's zero then activePlayer should be 1 else activePlayer should be 0

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //then the round score is set to 0 in memory
  roundScore = 0;

  // setting score to 0 in the current 1 and 0 html elements
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //adding the .active class to the next player
  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  // used .toggle to switch the .active class classes between players
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // hides the dice in the .btn-roll function
  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  // create the score for each player var scores
  // create variable for Round Score
  // create a variable for the active player 0 = 1st player 1 = 2nd player
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  // control css by hiding element
  document.querySelector(".dice").style.display = "none";

  // getElementById is faster if your using id's then query selector no need for # just name is fine

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  //pulling in player name text
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  // change .winner and .active class from active on init
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");

}

// This is a setter setting value
// using querySelector to grab one element of id then .textContent function to change text in element current-0 which = variable dice
// switched '#current-0' to '#current-' + activePlayer so when var active player is changed to 1 the current player will be 2 and 0 player is 1
//document.querySelector('#current-' + activePlayer).textContent = dice;

// this one allows html to be added to dom innerHTML
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//this is a getter getting value
// prints players score to the console
//var x = document.querySelector('#score-0').textContent;
//console.log(x)
