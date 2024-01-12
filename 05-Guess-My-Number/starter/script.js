'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

const secNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// const numberFontSize = function () {
//   guess == secretNumber
//     ? (document.querySelector('.number').style.width = '30rem')
//     : (document.querySelector('.number').style.width = '15rem');
// };

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // player guess is empty - no number
  if (!guess) {
    displayMessage('⛔ No number!');
    // player guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🏆 Winner!! 🏆');
    document.querySelector('.number').textContent = secretNumber;
    // winning condition: css
    document.querySelector('body').style.backgroundColor = '#60b347';
    // numberFontSize();
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '.. too high' : '.. too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  // numberFontSize();
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secNumber();
  // secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});

// player guess is too high
/*
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '.. too high';
      score--;
    } else {
      document.querySelector('.message').textContent = '😥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // player guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '.. too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
