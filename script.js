const Gameboard = function (initialState) {
  // Private variables and functions
  let board = [];

  function init() {
    // Create a copy of the initial state to represent the gameboard
    for (let i = 0; i < 3; i++) {
      board.push([...initialState[i]]);
    }
  }

  function displayBoard() {
    // Print the current state of the gameboard to the console
    console.log("-------------");
    for (let i = 0; i < 3; i++) {
      console.log(`| ${board[i][0]} | ${board[i][1]} | ${board[i][2]} |`);
      console.log("-------------");
    }
  }

  function render() {
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board-container");

    // Loop through each row of the gameboard
    for (let i = 0; i < board.length; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      // Loop through each cell in the current row
      for (let j = 0; j < board[i].length; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = board[i][j];
        row.appendChild(cell);
      }

      boardContainer.appendChild(row);
    }

    // Append the board container to the document body
    document.body.appendChild(boardContainer);
  }

  // Initialize the gameboard with the initial state
  init();

  // Public API
  return {
    board: board,
    displayBoard: displayBoard,
    render: render,
  };
};

// Use the Gameboard module to render the board
const gameboard = new Gameboard([
  ["X", "", "O"],
  ["", "O", ""],
  ["X", "", ""],
]);
gameboard.render();
