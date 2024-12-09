const boxes = document.querySelectorAll('.box');
let winner = document.querySelector('.winner');

const playerFactory = (name, symbol) => { // Factory function that creates an object that contains the player's name and symbol
    return {name, symbol};
};

const player1 = playerFactory('Player1', 'X');
const player2 = playerFactory('Player2', 'O');

const gameBoard = (() =>{
        
    let currentPlayer = player1;
    let board = Array(9).fill(''); // Array with 9 empty strings that represents the 3x3 grid  
        
        
    function switchPlayer(){ // Switch between players after each turn
        if(currentPlayer === player1) currentPlayer = player2;
        else currentPlayer = player1;
    }
        
        
    function addMark() {
        boxes.forEach((box, index) => {
            box.addEventListener('click', () =>{
                if(box.textContent === '') { // Only allow marking if the box is empty
                    board[index] = currentPlayer.symbol; // Update the board with the current player's symbol at the correct index
                    box.textContent = currentPlayer.symbol; // Update the text of the box with the current player's symbol
                    displayWinner();
                    switchPlayer();
                }
            })
        })
    }

    function displayWinner(){

        const winningCombinations = [[0, 1, 2],
                                     [0, 3, 6],
                                     [1, 4, 7],
                                     [2, 5, 8],
                                     [3, 4, 5],
                                     [6, 7, 8],
                                     [2, 4, 6],
                                     [0, 4, 8]]
    
        for(let combination of winningCombinations){ // Loop through the winning combinations to check if any player has won
            if(combination.every(index => board[index] === 'X')){ // Checks if all positions -that are specified in the combination array- of the board array have the value of 'X'
                winner.textContent = `${player1.name} WINS`;
            }else if(combination.every(index => board[index] === 'O')){
                winner.textContent = `${player2.name} WINS`;
            } 
        }
            if(board.every(item => item !== '')){ // Checks that every item in the board array is not an empty string (i.e the board is full)
                winner.textContent = "IT'S A TIE";
            }
            
    }


        return {board, addMark};
})();

gameBoard.addMark();