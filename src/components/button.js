import { board, gameBoard, resultsBoard, previousMoves, togglePlayer, currentPlayer, undoneMoves } from "../../main.js";
import { createBoard } from "./board.js";
import { checkWinner } from "./winner.js";

export function resetGame() {
    gameBoard.innerHTML = '';
    createBoard();
}

export function undoMove() {
    if (!checkWinner() && previousMoves.length > 0) {
        const lastMove = previousMoves.pop(); 
        const row = Math.floor((lastMove - 1) / 3);
        const col = (lastMove - 1) % 3;
        const tile = document.getElementById(lastMove);
        tile.innerHTML = '';
        board[row][col] = '';
        togglePlayer();
        resultsBoard.textContent = `Player ${currentPlayer}'s turn`;
        undoneMoves.push(lastMove);
    }
}

export function redoMove() {
    if (!checkWinner() && undoneMoves.length > 0) {
        const lastUndoneMove = undoneMoves.pop(); 
        const row = Math.floor((lastUndoneMove - 1) / 3);
        const col = (lastUndoneMove - 1) % 3;
        const tile = document.getElementById(lastUndoneMove);
        if (tile.innerHTML === '') { 
            const img = document.createElement('img');
            img.src = currentPlayer === 'X' ? "src/img/cross.png" : "src/img/circle.png";
            img.classList.add(currentPlayer === 'X' ? 'cross' : 'circle');
            tile.appendChild(img);
            board[row][col] = currentPlayer;
            previousMoves.push(lastUndoneMove); 
            togglePlayer();
            resultsBoard.textContent = `Player ${currentPlayer}'s turn`;
        }
    }
}