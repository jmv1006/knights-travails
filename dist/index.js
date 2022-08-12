"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_game_1 = require("./create-game");
function createGame() {
    const gameboard = new create_game_1.GameBoard();
    const board = gameboard.create();
    //knight object initialized with a gameboard (in form of adjancency list) passed into it
    const knight = new create_game_1.Knight(board);
    return { knight };
}
const { knight } = createGame();
knight.knightMoves([8, 8], [1, 2]);
knight.knightMoves([1, 3], [1, 2]);
knight.knightMoves([5, 8], [1, 1]);
knight.knightMoves([1, 8], [8, 2]);
//# sourceMappingURL=index.js.map