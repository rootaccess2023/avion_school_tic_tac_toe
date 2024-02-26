# avion_school_tic_tac_toe

## Introduction

This repository contains the code for a Tic Tac Toe game, designed to meet specific project requirements of Avion School. The game is implemented using HTML, CSS, and JavaScript, focusing on creating an interactive and user-friendly experience.

## Game Overview

- **Phase  1**: The game is a classic Tic Tac Toe, where players take turns marking spaces on a grid with X or O. The game board is represented by a two-dimensional array, and the game logic is designed to enforce the rules of Tic Tac Toe, including determining the winner and handling turns.

- **Phase  2**: Upon completion of a game, the application displays the history of moves made during the game. Players can navigate through the game history using "Previous" and "Next" buttons, allowing them to review their gameplay. Additionally, a reset button is provided to restart the game, clearing the game board and move history.

## Technical Details

- **Game Board Representation**: The game board is represented using a two-dimensional array in JavaScript, where each cell can be either 'X', 'O', or empty, indicating the state of the game at that point.

- **Game Logic**: The game logic is implemented using JavaScript to handle player turns, determine the game's state (e.g., win, lose, or draw), and manage the game's history.

- **User Interface**: The game interface is designed to be responsive and visually appealing, utilizing HTML and CSS for the layout and styling. The game board is dynamically updated based on the game's state, and player actions are reflected in real-time.

- **Navigation**: The application includes "Previous" and "Next" buttons for navigating through the game history, as well as a "Reset" button to restart the game. These controls are implemented using JavaScript event listeners to respond to user interactions.

## Getting Started

To play the game, simply visit the provided link to the game's hosted version. If you wish to contribute or make modifications, you can fork the repository, make your changes, and submit a pull request for review.

[Play Tic Tac Toe Game](https://your-github-username.github.io/tic-tac-toe/)

<img src="/Tic Tac Toe.png">

## Player vs. Player Mode

In addition to the standard gameplay, this Tic Tac Toe game also features a Player vs. Player mode. This mode allows two players to compete against each other, making it an excellent choice for friends or family who want to enjoy the game together. Each player takes turns to place their mark ('X' or 'O') on the game board, aiming to be the first to get three of their marks in a row, column, or diagonal.

## BMO Vs. Player Mode

For a more challenging experience, the game also includes a BMO (Best Move Optimizer) vs. Player mode. This mode utilizes the Minimax algorithm, a decision-making algorithm used in artificial intelligence and game theory, to create an unbeatable AI opponent. The Minimax algorithm evaluates all possible moves and selects the best one, ensuring that the AI player always makes the optimal move to either win the game or prevent the player from winning 

In this mode, the player competes against the AI, which uses the Minimax algorithm to calculate the best possible move at each turn. The algorithm considers all possible future game states and chooses the move that leads to the best possible outcome for the AI, making it nearly impossible to win against the AI in this mode.

## Implementation Details

The implementation of the Minimax algorithm for the BMO Vs. Player mode involves creating a recursive function that evaluates the game board's state, simulating possible moves, and assigning scores to each state based on whether it leads to a win, loss, or draw. The algorithm then selects the move with the highest score for the AI player.

This mode not only provides a fun challenge for players but also serves as an educational tool, showcasing the power of algorithms in decision-making and game strategy.

## Conclusion

By offering both Player vs. Player and BMO Vs. Player modes, this Tic Tac Toe game provides a versatile and engaging gaming experience. Whether you're looking to play with friends or challenge yourself against an unbeatable AI, this game has something for everyone.

## Contributing

Contributions to the project are welcome! If you have suggestions for improvements or bug fixes, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.