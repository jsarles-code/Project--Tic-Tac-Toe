const DisplayController = (() => {
    const renderBoard = () => {
        const gameBoardDiv = document.getElementById('gameBoard');
        gameBoardDiv.innerHTML = '';
        Gameboard.getBoard().forEach((cell, index) => {
            const cellDiv = document.createElement('div');
            cellDiv.textContent = cell;
            cellDiv.addEventListener('click', () => Game.playTurn(index));
            gameBoardDiv.appendChild(cellDiv);
        });
    };

    const displayWin = (playerName) => {
        const statusDisplay = document.getElementById('statusDisplay');
        statusDisplay.textContent = `${playerName} wins!`;
    };

    const displayTie = () => {
        const statusDisplay = document.getElementById('statusDisplay');
        statusDisplay.textContent = "It's a tie!";
    };

    const updateTurn = (playerName) => {
        const statusDisplay = document.getElementById('statusDisplay');
        statusDisplay.textContent = `${playerName}'s turn`;
    };

    return { renderBoard, displayWin, displayTie, updateTurn };
})();

document.getElementById('startGame').addEventListener('click', () => {
    const player1Name = document.getElementById('player1Name').value;
    const player2Name = document.getElementById('player2Name').value;
    Game.startGame(player1Name, player2Name);
    DisplayController.renderBoard();
});
