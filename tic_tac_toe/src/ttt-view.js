class View {
  constructor(game, el) {}

  setupBoard() {
    let ul = document.createElement("ul")
    let li = document.createElement("li")
    li.dataset.columns = 3;
    ul.dataset.rows = 3;
    ul.display = ("flex")
  }

  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
