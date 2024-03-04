//We’re making a Tic Tac Toe game you can play in your browser!
//The game is played on a 3x3 grid.
//You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects,
//one object will control the flow of the game. The other will control the players themselves.
//Your main goal here is to have as little global code as possible. Try tucking as much as you can inside factories. If you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be reused to create additional instances.
//Each little piece of functionality should be able to fit in the game, player or gameboard objects.
//nclude logic that checks for when the game is over! You should be checking for all winning 3-in-a-rows and ties. 
//create an object that will handle the display/DOM logic. Write a function that will render the contents of the gameboard array to the webpage (
//Write the functions that allow players to add marks to a specific spot on the board by interacting with the appropriate DOM elements (e.g. letting players click on a board square to place their marker). Don’t forget the logic that keeps players from playing in spots that are already taken!
//Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that shows the results upon game end!
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
  
    const reset = () => {
      board = ["", "", "", "", "", "", "", "", ""];
    };
  
    return { setMark, getBoard, reset };
  })();
  