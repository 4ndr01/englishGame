document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = parseInt(cell.id.split('-')[1]) - 1;

            if (gameBoard[index] === '' && gameActive) {
                gameBoard[index] = currentPlayer;
                cell.textContent = currentPlayer;

                if (checkWinner()) {
                    alert(`Player ${currentPlayer} wins!`);
                    gameActive = false;
                } else if (gameBoard.every(cell => cell !== '')) {
                    alert('It\'s a tie!');
                    gameActive = false;
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
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
});
