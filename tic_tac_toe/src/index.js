const View = require("./ttt-view.js")// require appropriate file
const Game = require("../ttt_node/game.js")// require appropriate file

document.addEventListener("DOMContentLoaded", (event) => {
  new Game ()
  event.getElementByClassName("ttt")
});
