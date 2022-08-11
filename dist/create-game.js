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
;
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
        this.possibleMoves = [];
        this.list = {};
    }
    populateList(start) {
        if (`${start}` in this.list)
            return;
        //this gets the legal moves from the coordinate passed into it
        function getCombos(coords) {
            const x = coords[0];
            const y = coords[1];
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
            return possibleCombos.filter((combo) => (combo[0] >= 1 && combo[0] <= 8) && (combo[1] >= 1 && combo[1] <= 8));
        }
        const moves = getCombos(start);
        this.list[`${start}`] = [];
        moves.forEach((move) => {
            this.list[`${start}`].push(move);
            this.populateList(move);
        });
    }
    knightMoves(start, end) {
        this.populateList(this.board[0]);
        console.log(this.list);
    }
    dfs(root, target) {
        if (root == null)
            return;
        this.dfs(root.left, target);
        this.dfs(root.right, target);
    }
}
exports.Knight = Knight;
//# sourceMappingURL=create-game.js.map