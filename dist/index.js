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
knight.knightMoves([0, 0], [3, 3]);
//# sourceMappingURL=index.js.map