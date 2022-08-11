"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        this.possibleMoves = [];
        this.moves = [];
    }
    getPossibleMoves(start) {
        //given a pair of coordinates, find each legal move
        //for each legal move, find its legal moves
        //put all moves into a tree
        // base case: if the move is already in possible moves
        const isInMoves = (element) => element[0] === start[0] && element[1] === start[1];
        if (this.possibleMoves.some(isInMoves))
            return;
        this.possibleMoves.push(start);
        //this.possibleMoves[start] = start
        //goal: to get possible coordinates for ALL possible moves
        const x = start[0];
        const y = start[1];
        function getCombos(coords) {
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
        const legalCombos = getCombos(start);
        legalCombos.forEach((combo) => {
            this.getPossibleMoves(combo);
        });
        return this.possibleMoves;
    }
    knightMoves(start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            const movesArr = this.getPossibleMoves(start);
            console.log(movesArr);
            //const root = this.buildTreeFromMoves(movesArr);
            //this.dfs(root, end)
        });
    }
    dfs(root, target) {
        if (root == null)
            return;
        this.dfs(root.left, target);
        this.dfs(root.right, target);
    }
    buildTreeFromMoves(arr) {
        const start = arr[0];
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
        const sorted = mergeSort(arr);
        const noDups = [...new Set(sorted)];
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
        root.left = buildTree(noDups.splice(1, Math.floor(noDups.length / 2)), 0, noDups.length - 1);
        root.right = buildTree(noDups, 0, noDups.length - 1);
        return root;
    }
}
exports.Knight = Knight;
/*
 getPossibleMoves(start: Array<number>) {
        //goal: to get possible coordinates for ALL possible moves
        const x = start[0]
        const y = start[1]

        function getCombos(coords: any) {
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
    
            const legalCombos = possibleCombos.filter((combo: Array<number>) => (combo[0] >= 0 && combo[0] <=8) && (combo[1] >= 0 && combo[1] <= 8));
            return legalCombos;
        }
        
        const legalCombos = getCombos(start)
        
        function mergeSort(arr: any): Array<any> {
            if(arr.length < 2) return arr

            let mid = Math.round(arr.length / 2);

            let left = arr.splice(0, mid)

            return sort(mergeSort(left), mergeSort(arr))
        }

        function sort(arr1: any, arr2: any) {
            let arr = [];

            while(arr1.length && arr2.length) {
                if(arr1[0][0] > arr2[0][0]) {
                    arr.push(arr2.shift())
                } else {
                    arr.push(arr1.shift())
                }
            }
            return [...arr, ...arr1, ...arr2]
        }

        const sorted: Array<any> = mergeSort(legalCombos);

        function buildTree(arr: any, start: any, end: any) {
            if(start > end) return null

            let mid = Math.round((start + end)/ 2);
            let root: any = new TreeNode(arr[mid]);

            root.left = buildTree(arr, start, mid - 1)
            root.right = buildTree(arr, mid + 1, end)
            return root
        }

        const root: any = new TreeNode(start);
        root.left = buildTree(sorted.splice(0, Math.floor(sorted.length / 2)), 0, sorted.length - 1)
        root.right = buildTree(sorted, 0, sorted.length - 1)


    }
*/ 
//# sourceMappingURL=create-game.js.map