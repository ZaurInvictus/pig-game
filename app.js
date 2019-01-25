/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer;

init();

//ADD EVENT LISTENER
document.querySelector('.btn-roll').addEventListener('click', function() {

  // 1. Random number
  let dice = Math.floor(Math.random() * 6) + 1;
   
  // 2. Display the result
  let diceDOM =  document.querySelector('.dice');
   diceDOM.style.display = 'block';
   diceDOM.src = 'dice-' + dice + '.png';

  // 3. Update the round score only IF called number is not a 1
  if (dice !== 1) {
    //Add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    //Next PLayer
    nextPlayer();
   }  

});

document.querySelector('.btn-hold').addEventListener('click', function(){
//Add CURRENT score to GLOBAL score
//scores[activePlayer] = scores[activePlayer] + roundScore;
scores[activePlayer] += roundScore;

//Update the UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//Check if player won the game
if (scores[activePlayer] >= 10) {
 document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
 document.querySelector('.dice').style.display = 'none';
 document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
 document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
} else {
 //Next PLayer
 nextPlayer();
}

});

function nextPlayer() {
   //Next Player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  //Setting Scores to 0 in interface
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';
    
   //Toggling Active Player
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');
   
   //Not Displaying Dice when player changes 
   document.querySelector('.dice').style.display = 'none'
}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}




//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//To read values & store it in variables
//let x = document.querySelector('#score-0').textContent;

