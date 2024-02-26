import { board, togglePlayer, resultsBoard, currentPlayer } from "../../main.js";
import { checkWinner } from "./winner.js";

function minimax(board, depth, isMaximizing) {
    const winner = checkWinner(board);
    if (winner !== null) {
        if (winner === 'X') {
            return -10 + depth;
        } else if (winner === 'O') {
            return 10 - depth;
        } else {
            return 0; // Draw
        }
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'O'; // 'O' is maximizing player
                    let score = minimax(board, depth + 1, false);
                    board[i][j] = '';
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'X'; // 'X' is minimizing player
                    let score = minimax(board, depth + 1, true);
                    board[i][j] = '';
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}


export function bestMove() {

    if (currentPlayer === 'O') {
        let bestScore = -Infinity;
        let move;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'O';
                    const score = minimax(board, 0, false);
                    board[i][j] = '';
                    if (score > bestScore) {
                        bestScore = score;
                        move = { i, j };
                    }
                }
            }
        }
        if (move) { 
            board[move.i][move.j] = 'O';
            const tileId = move.i * 3 + move.j + 1;
            const tile = document.getElementById(tileId);
            const imgSrc = currentPlayer === 'X' ? "src/img/cross.png" : "src/img/circle.png";
            const img = document.createElement('img');
            img.classList.add('circle');
            tile.appendChild(img);
            img.setAttribute('src', imgSrc);
            togglePlayer();
            resultsBoard.textContent = `Player ${currentPlayer}'s turn`;
            
        }
    }
}