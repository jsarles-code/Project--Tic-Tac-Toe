const Game = (() => {
    let player1, player2, currentPlayer;

    const startGame = (name1, name2) => {
        player1 = Player(name1, 'X');
        player2 = Player(name2, 'O');
        currentPlayer = player1;
        Gameboard.reset();
        DisplayController.renderBoard();
    };

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const playTurn = (cellIndex) => {
        if (Gameboard.setCell(cellIndex, currentPlayer.marker)) {
            DisplayController.renderBoard();
            if (checkWin()) {
                DisplayController.displayWin(currentPlayer.name);
                return;
            }
            if (checkTie()) {
                DisplayController.displayTie();
                return;
            }
            switchPlayer();
            DisplayController.updateTurn(currentPlayer.name);
        }
    };

    const checkWin = () => {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]            // Diagonals
        ];
        return winConditions.some(condition => {
            return condition.every(index => {
                return Gameboard.getBoard()[index] === currentPlayer.marker;
            });
        });
    };

    const checkTie = () => {
        return Gameboard.getBoard().every(cell => cell !== "");
    };

    return { startGame, playTurn };
})();
