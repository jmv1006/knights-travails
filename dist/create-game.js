"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = exports.GameBoard = void 0;
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class GameBoard {
    constructor() {
        this.board = [];
    }
    create() {
        let board = [];
        for (let i = 1; i < 9; i++) {
            for (let j = 1; j < 9; j++) {
                board.push([i, j]);
            }
        }
        this.board = board;
    }
}
exports.GameBoard = GameBoard;
class Knight {
    constructor(board) {
        this.board = board;
        this.currentPosition = [];
    }
    getPossibleMoves(start, end) {
        this.currentPosition = start;
        const root = new TreeNode(start);
        //root node in tree are the possible moves a knight count take from given coordinates
        const x = start[0];
        const y = start[1];
        const possibleCombos = [
            [x + 2, y + 1],
            [x + 1, y + 2],
            [x + 2, y - 1],
            [x + 1, y - 2],
            [x - 2, y - 1],
            [x - 1, y - 2],
            [x - 1, y + 2],
            [x - 2, y + 1]
        ];
        const legalCombos = possibleCombos.filter((combo) => (combo[0] >= 0 && combo[0] <= 8) && (combo[1] >= 0 && combo[1] <= 8));
        console.log(legalCombos);
    }
    knightMoves(coord1, coord2) {
        this.getPossibleMoves(coord1, coord2);
    }
}
exports.Knight = Knight;
//# sourceMappingURL=create-game.js.map