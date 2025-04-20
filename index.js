let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetBtn = document.getElementById('reset-btn');

guessBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = ' Please enter a number between 1 and 100.';
    message.style.color = '#ffcc00';
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    message.textContent = ` Correct! It was ${secretNumber}.`;
    message.style.color = '#00ff88';
    guessBtn.disabled = true;
    guessInput.disabled = true;
    resetBtn.classList.remove('hidden');
  } else if (guess < secretNumber) {
    message.textContent = ' Too low!';
    message.style.color = '#ffc107';
  } else {
    message.textContent = ' Too high!';
    message.style.color = '#ffc107';
  }

  attemptsDisplay.textContent = ` Attempts: ${attempts}`;
  guessInput.value = '';
  guessInput.focus();
});

resetBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessInput.value = '';
  attemptsDisplay.textContent = ' Attempts: 0';
  resetBtn.classList.add('hidden');
});
