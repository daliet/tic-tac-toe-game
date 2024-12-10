# Tic-Tac-Toe Game

A simple, interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript. The game allows two players to take turns and play on a 3x3 grid, with X and O markers. It detects the winner and displays a message when a player wins or if the game ends in a tie.


## Features

- Two players can take turns playing.
- Players are represented by 'X' (Player 1) and 'O' (Player 2).
- The game automatically checks for a winner after each move.
- The game board is displayed using a 3x3 grid of clickable boxes.
- The winner is displayed when a player wins or if the game is a tie.
- A reset button is available to start a new game.


## How to Play

1. Player 1 clicks on an empty box to place an 'X'.
2. Player 2 clicks on an empty box to place an 'O'.
3. The game checks after each move if there is a winner.
4. If a player wins, the game displays the winner.
5. If all the boxes are filled and there is no winner, it declares a tie.
6. Click the "Reset" button to start a new game.


## How to Run

[**Click here**](daliet.github.io/tic-tac-toe-game/) to play the game or:

1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Start playing the game!


## Key Components:

- **Player Factory Function**: `playerFactory(name, symbol)` creates a player object with a name and symbol ('X' or 'O').
- **GameBoard Module**: The `gameBoard` module handles the game logic, including:
  - Tracking the current player's turn.
  - Updating the game board after each move.
  - Checking for a winner based on predefined winning combinations.
  - Displaying the winner or a tie when applicable.
  - Resetting the game when the reset button is clicked.

  ## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**