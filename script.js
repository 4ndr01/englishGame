document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    const timerDisplay = document.getElementById('timer');
    const resultDisplay = document.getElementById('result');
    const playerXWinsDisplay = document.getElementById('playerXWins');
    const playerOWinsDisplay = document.getElementById('playerOWins');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
    let timeLeft = 30;
    let timer;
    let playerXWins = 0;
    let playerOWins = 0;

    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Time: ${timeLeft}s`;

            if (timeLeft === 0) {
                endGame(null, 'Time\'s up!');
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timer);
        timeLeft = 30;
        timerDisplay.textContent = `Time: ${timeLeft}s`;
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = parseInt(cell.id.split('-')[1]) - 1;

            if (gameBoard[index] === '' && gameActive) {
                gameBoard[index] = currentPlayer;
                cell.textContent = currentPlayer;

                if (checkWinner()) {
                    endGame(currentPlayer, `Player ${currentPlayer} wins!`);
                } else if (gameBoard.every(cell => cell !== '')) {
                    endGame(null, 'It\'s a tie!');
                } else {
                    resetTimer();
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    startTimer();
                }
            }
        });
    });

    function checkWinner() {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombos.some(combo => {
            const [a, b, c] = combo;
            return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
        });
    }

    function endGame(winner, message) {
        gameActive = false;
        clearInterval(timer);

        if (winner !== null) {
            resultDisplay.textContent = message;

            if (winner === 'X') {
                playerXWins++;
                playerXWinsDisplay.textContent = playerXWins;
            } else {
                playerOWins++;
                playerOWinsDisplay.textContent = playerOWins;
            }
        } else {
            resultDisplay.textContent = message;
        }
    }

    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetGame);

    function resetGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        timeLeft = 30;

        cells.forEach(cell => {
            cell.textContent = '';
        });

        resultDisplay.textContent = '';
        resetTimer();
        startTimer();
    }

    startTimer();
});
