const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => board;

    const setCell = (index, marker) => {
        if (index >= 0 && index < board.length && board[index] === "") {
            board[index] = marker;
            return true;
        }
        return false;
    };

    const reset = () => {
        board = ["", "", "", "", "", "", "", "", ""];
    };

    return { getBoard, setCell, reset };
})();
