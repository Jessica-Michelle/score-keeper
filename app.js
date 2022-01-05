const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');

// score starts at 0
let p1Score = 0;
let p2Score = 0;

// winning score can be adjusted
let winningScore = 5;
let isGameOver = false;

// when +1 p1 button is clicked increment score by 1
p1Button.addEventListener('click', function () {
	if (!isGameOver) {
		p1Score += 1;
		if (p1Score === winningScore) {
			isGameOver = true;
			p1Display.classList.add('winner');
			p2Display.classList.add('loser');
		}
		p1Display.textContent = p1Score;
	}
});

// when +1 p2 button is clicked increment score by 1
p2Button.addEventListener('click', function () {
	if (!isGameOver) {
		p2Score += 1;
		if (p2Score === winningScore) {
			isGameOver = true;
			p2Display.classList.add('winner');
			p1Display.classList.add('loser');
		}
		p2Display.textContent = p2Score;
	}
});

winningScoreSelect.addEventListener('change', function () {
	// takes a string and returns a number
	winningScore = parseInt(this.value);
	reset();
});

resetButton.addEventListener('click', reset);

function reset() {
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove('winner', 'loser');
	p2Display.classList.remove('winner', 'loser');
}
