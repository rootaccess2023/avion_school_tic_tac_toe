import { board, resultsBoard } from "../../main.js";

export function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' 
        && board[i][0] === board[i][1] 
        && board[i][1] === board[i][2]) {
            resultsBoard.textContent = `Player ${board[i][0]} wins. You totally algebraic-ed that victory!`;
            return board[i][0];
        }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] !== '' 
        && board[0][j] === board[1][j] 
        && board[1][j] === board[2][j]) {
            resultsBoard.textContent = `Player ${board[0][j]} wins! Victory is as sweet as sugar, yum yum!`;
            return board[0][j];
        }
    }

    // Check diagonals
    if (board[0][0] !== '' 
    && board[0][0] === board[1][1] 
    && board[1][1] === board[2][2]) {
        resultsBoard.textContent = `Player ${board[0][0]} wins! Let's do the victory dance!`;
        return board[0][0];
    }
    if (board[0][2] !== '' 
    && board[0][2] === board[1][1] 
    && board[1][1] === board[2][0]) {
        resultsBoard.textContent = `Player ${board[0][2]} wins! Oh my glob! Pixelated party it is!`;
        return board[0][2];
    }

    // Check for tie
    let isTie = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                isTie = false;
            }
        }
    }
    if (isTie) {
        resultsBoard.textContent = "Oh glob, it's a tie! Both sides are equally awesome!";
        return 'tie';
    }
}