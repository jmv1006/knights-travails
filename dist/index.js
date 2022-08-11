"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_game_1 = require("./create-game");
function createGame() {
    const gameboard = new create_game_1.GameBoard();
    gameboard.create();
    const knight = new create_game_1.Knight(gameboard.board);
    return { gameboard, knight };
}
const { gameboard, knight } = createGame();
knight.knightMoves([3, 3], [1, 1]);
let moves = {
    "cat": [2, 1]
};
let coords = [9, 5];
moves[coords.toString()] = 1;
if (coords.toString() in moves) {
    console.log('yes');
}
;
//# sourceMappingURL=index.js.map