const boxes = document.querySelectorAll('.box');

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
                    switchPlayer();
                }
            })
        })}
        return {board, addMark};
})();

gameBoard.addMark();