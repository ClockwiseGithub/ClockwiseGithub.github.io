const button = document.getElementById('click-button');
const score = document.getElementById('score-value');

button.addEventListener('click', function() {
  score.textContent = parseInt(score.textContent) + 1;
});