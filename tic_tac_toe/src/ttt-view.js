class View {
  constructor(game, el) {
    this.newGame = game;
    this.board = el;
    this.setupBoard();
  }

  setupBoard() {
    let ul = document.createElement("ul")
    this.board.appendChild(ul);
    // li.dataset.columns = 3;
    // ul.dataset.rows = 3;
    
    for(let x = 0; x < 3; x++){
      for (let y = 0; y < 3; y++){
        let li = document.createElement("li");
        li.dataset.position = JSON.stringify([x,y]);
        ul.appendChild(li);
      }
    }
  }

  bindEvents() {}

  handleClick(e) {
    const tile = e.target;
    if (tile.className)
  }

  makeMove(square) {}

}

module.exports = View;
