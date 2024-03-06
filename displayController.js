const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const setMark = (index, mark) => {
        if (index >= 0 && index < board.length && board[index] === "") {
            board[index] = mark;
            return true;
        }
        return false;
    };

    const getBoard = () => board;

    const resetBoard = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return { setMark, getBoard, resetBoard };
})();
const Player = (name, mark) => {
    const getName = () => name;
    const getMark = () => mark;

    return { getName, getMark };
};
const GameController = (() => {
    const player1 = Player("Player 1", "X");
    const player2 = Player("Player 2", "O");
    let currentPlayer = player1;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        DisplayController.updateCurrentPlayerDisplay(currentPlayer.getName());
    };

    const playTurn = (index) => {
        if (Gameboard.setMark(index, currentPlayer.getMark())) {
            switchPlayer();
            DisplayController.renderBoard();
        }
    };

    const resetGame = () => {
        Gameboard.resetBoard();
        currentPlayer = player1;
        DisplayController.renderBoard();
        DisplayController.updateCurrentPlayerDisplay(currentPlayer.getName());
    };

    return { playTurn, resetGame };
})();
const DisplayController = (() => {
    const renderBoard = () => {
        const gameBoard = document.getElementById('gameBoard');
        const boardArray = Gameboard.getBoard();
        gameBoard.innerHTML = '';
        boardArray.forEach((mark, index) => {
            const square = document.createElement('div');
            square.classList.add('square');
            square.textContent = mark;
            square.addEventListener('click', () => GameController.playTurn(index));
            gameBoard.appendChild(square);
        });
    };

    const updateCurrentPlayerDisplay = (playerName) => {
        document.getElementById('gameStatus').textContent = `Current Player: ${playerName}`;
    };

    return { renderBoard, updateCurrentPlayerDisplay };
})();
document.getElementById('startGame').addEventListener('click', () => {
    const player1Name = document.getElementById('player1Name').value || "Player 1";
    const player2Name = document.getElementById('player2Name').value || "Player 2";
    // Initialize players with names from input fields
    GameController.resetGame();
    DisplayController.renderBoard();
});

// Initial call to render the board
DisplayController.renderBoard();
