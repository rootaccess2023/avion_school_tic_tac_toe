import { gameBoard, currentPlayer, board, togglePlayer, resultsBoard, previousMoves, isSinglePlayerMode } from "../../main.js";
import { checkWinner } from "./winner.js";
import { bestMove } from "./ticbot.js";


export function createBoard() {

    for (let i = 0; i < 3; i++) {
        const squareContainer = document.createElement('div');
        squareContainer.classList.add('square-container');
        gameBoard.appendChild(squareContainer);

        for (let j = 0; j < 3; j++) {
            const tile = document.createElement('div');
            tile.classList.add('square');
            tile.setAttribute('id', (i * 3 + j + 1));

            tile.addEventListener('click', () => {
                const row = Math.floor((parseInt(tile.id) - 1) / 3);
                const col = (parseInt(tile.id) - 1) % 3;

                if (!checkWinner() && board[row][col] === '') {
                    const imgSrc = currentPlayer === 'X' ? "src/img/cross.png" : "src/img/circle.png";
                    const img = document.createElement('img');
                    img.setAttribute('src', imgSrc);
                    img.classList.add(currentPlayer === 'X' ? 'cross' : 'circle');
                    tile.appendChild(img);
                
                    board[row][col] = currentPlayer;
                    previousMoves.push(parseInt(tile.id));
                    togglePlayer();
                    
                    resultsBoard.textContent = `Player ${currentPlayer}'s turn`;
                    if (isSinglePlayerMode && currentPlayer === 'O' && !checkWinner()) {
                        bestMove(); 
                    }
                    checkWinner();
                }
                
            });
            
            squareContainer.appendChild(tile);
        }
    }
}