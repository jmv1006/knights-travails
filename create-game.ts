class TreeNode {
    value: Array<any>;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: Array<any>) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}
class GameBoard {
    board: Array<any>;

    constructor() {
        this.board = [];
    }

    create() {
        let board = [];
        for(let i = 1; i < 9; i++) {
            for(let j = 1; j < 9; j++) {
                board.push([i, j])
            }
        }
        this.board = board;
    }
}

class Knight {
    possibleMoves: any;
    currentPosition: Array<number>;
    board: any;

    constructor(board: any) {
        this.board = board
        this.currentPosition = [];
    }

    getPossibleMoves(start: Array<number>, end: Array<number>) {
        this.currentPosition = start;
        const root = new TreeNode(start);
        //root node in tree are the possible moves a knight count take from given coordinates

        const x = start[0]
        const y = start[1]

        const possibleCombos = [
            [x + 2, y + 1],
            [x + 1, y + 2],
            [x + 2, y - 1],
            [x + 1, y - 2],
            [x - 2, y - 1],
            [x - 1, y - 2], 
            [x - 1, y + 2],
            [x - 2, y + 1]
        ]

        const legalCombos = possibleCombos.filter((combo: any) => (combo[0] >= 0 && combo[0] <=8) && (combo[1] >= 0 && combo[1] <= 8));

        console.log(legalCombos)
    }   

    knightMoves(coord1: any, coord2: any) {
        this.getPossibleMoves(coord1, coord2)
    }
    
}

export {GameBoard, Knight};