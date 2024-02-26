// Imports
import { createBoard } from "./src/components/board.js";
import { resetGame, undoMove, redoMove } from "./src/components/button.js";
import { bestMove } from "./src/components/ticbot.js";

// DOM (Query Selectors)
export const gameBoard = document.querySelector('.game-board');
export const resultsBoard = document.querySelector('.results');
export const newGame = document.querySelector('.player-new-game');
const undoRedoBtn = document.querySelector('.undo-redo-btn');
const undoBtn = document.querySelector('.undo-button');
const redoBtn = document.querySelector('.redo-button');
const ticbotPlayer = document.querySelector('.ticbot-player');
const playerPlayer = document.querySelector('.player-player');
const bmoImgPlayer = document.querySelector('.bmo-img-player');
const bmoImgBMO = document.querySelector('.bmo-img-bmo');

// Variables declared
export let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

export let gameEnded = false;
export let currentPlayer = 'X'
export let previousMoves = [];
export let undoneMoves = [];
export let isSinglePlayerMode = false;


// Functions
export function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function hide() {
    undoRedoBtn.classList.add('hide')
    bmoImgPlayer.classList.add('hide')
    bmoImgBMO.classList.remove('hide')
}

function show() {
    undoRedoBtn.classList.remove('hide')
    bmoImgPlayer.classList.remove('hide')
    bmoImgBMO.classList.add('hide');
}



// Event Listeners
newGame.addEventListener('click', () => {
    resetGame();
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    previousMoves = [];
    undoneMoves = [];
    
    if (isSinglePlayerMode) {
        currentPlayer = 'O'; 
        resultsBoard.textContent = "Player X's turn";
        bestMove(); 
    } else {
        resultsBoard.textContent = "Player X's turn";
        currentPlayer = 'X';
    }

    setTimeout(() => {
        if (!isSinglePlayerMode || isSinglePlayerMode) {
            
        }
    }, 5000);
});


undoBtn.addEventListener('click', undoMove);
redoBtn.addEventListener('click', redoMove);

playerPlayer.addEventListener('click', () => {
    isSinglePlayerMode = false;
    resetGame();
    show();
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    previousMoves = [];
    undoneMoves = [];
    resultsBoard.textContent = "Player vs. player? Get set for an epic showdown!";

    setTimeout(() => {
        resultsBoard.textContent = "Player X's turn";
    }, 5000);
});

ticbotPlayer.addEventListener('click', () => {
    isSinglePlayerMode = true;
    resetGame();
    hide();
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    currentPlayer = 'O';
    previousMoves = [];
    undoneMoves = [];
    resultsBoard.textContent = "BMO vs player? Get ready for an electrifying clash!";

    setTimeout(() => {
        currentPlayer = 'X';
        resultsBoard.textContent = "Player X's turn";
    }, 5000);

    setTimeout(() => {
        bestMove();
    }, 3000);
});

createBoard();