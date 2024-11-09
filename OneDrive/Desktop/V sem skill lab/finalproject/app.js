// Tic Tac Toe JavaScript Code
document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("statusText");
    const resetButton = document.getElementById("resetButton");
  
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let isGameActive = true;
  
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    function handleCellClick() {
      const cellIndex = this.getAttribute("data-index");
  
      if (board[cellIndex] !== "" || !isGameActive) return;
  
      board[cellIndex] = currentPlayer;
      this.innerText = currentPlayer;
  
      checkWinner();
    }
  
    function checkWinner() {
      let roundWon = false;
  
      for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          roundWon = true;
          break;
        }
      }
  
      if (roundWon) {
        statusText.innerText = `Player ${currentPlayer} wins!`;
        isGameActive = false;
      } else if (!board.includes("")) {
        statusText.innerText = "Draw!";
        isGameActive = false;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.innerText = `Player ${currentPlayer}'s turn`;
      }
    }
  
    function resetBoard() {
      board = ["", "", "", "", "", "", "", "", ""];
      isGameActive = true;
      currentPlayer = "X";
      statusText.innerText = `Player ${currentPlayer}'s turn`;
      cells.forEach(cell => (cell.innerText = ""));
    }
  
    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetBoard);
  
    statusText.innerText = `Player ${currentPlayer}'s turn`;
  });
  