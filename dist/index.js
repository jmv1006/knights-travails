"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_game_1 = require("./create-game");
function createGame() {
    const gameboard = new create_game_1.GameBoard();
    gameboard.create();
    const knight = new create_game_1.Knight(gameboard.board);
    return { gameboard, knight };
}
const { knight } = createGame();
knight.knightMoves([3, 3], [7, 5]);
//knight.knightMovesDfs([3, 3], [8, 8], 0);
//# sourceMappingURL=index.js.map