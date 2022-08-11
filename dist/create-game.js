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
        this.currentPosition = [];
    }
    getPossibleMoves(start, end) {
        this.currentPosition = start;
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
        //tree root and right left
        function mergeSort(arr) {
            if (arr.length < 2)
                return arr;
            let mid = Math.round(arr.length / 2);
            let left = arr.splice(0, mid);
            return sort(mergeSort(left), mergeSort(arr));
        }
        function sort(arr1, arr2) {
            let arr = [];
            while (arr1.length && arr2.length) {
                if (arr1[0][0] > arr2[0][0]) {
                    arr.push(arr2.shift());
                }
                else {
                    arr.push(arr1.shift());
                }
            }
            return [...arr, ...arr1, ...arr2];
        }
        const sorted = mergeSort(legalCombos);
        function buildTree(arr, start, end) {
            if (start > end)
                return null;
            let mid = Math.round((start + end) / 2);
            let root = new TreeNode(arr[mid]);
            root.left = buildTree(arr, start, mid - 1);
            root.right = buildTree(arr, mid + 1, end);
            return root;
        }
        const root = new TreeNode(start);
        root.left = buildTree(sorted.splice(0, Math.floor(sorted.length / 2)), 0, sorted.length - 1);
        root.right = buildTree(sorted, 0, sorted.length - 1);
        function preOrder(root) {
            if (root == null)
                return;
            if (root.value === end)
                console.log('here');
            preOrder(root.left);
            preOrder(root.right);
        }
        preOrder(root);
    }
    knightMoves(coord1, coord2) {
        this.getPossibleMoves(coord1, coord2);
    }
}
exports.Knight = Knight;
//# sourceMappingURL=create-game.js.map