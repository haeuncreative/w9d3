const View = require("./ttt-view.js")// require appropriate file
const Game = require("../ttt_node/game.js")// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  const newGame = new Game ();
  const board = document.getElementsByClassName("ttt")[0];
  const newView = new View(newGame, board);
  // newView.setupBoard();
});
