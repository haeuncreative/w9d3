class View {
  constructor(game, el) {
    this.newGame = game;
    this.board = el;
    this.setupBoard();
    this.bindEvents();
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

  bindEvents() {
      document.querySelectorAll(".ttt li").forEach((li) => {
      li.addEventListener("click", this.handleClick.bind(this));
    });
  }


  handleClick(e) {
    const tile = e.target;
    console.log(tile)
    if (tile.innerHTML === "") {
      tile.className = "chosen";
      tile.innerHTML = this.newGame.currentPlayer //"CHAD";
      let tilePos = tile.dataset.position;
      this.makeMove(tilePos);

    }  
  }

  makeMove(square) {
    // square = this.currentTile
    this.newGame.playMove(square)
    // 
  }

}

module.exports = View;
