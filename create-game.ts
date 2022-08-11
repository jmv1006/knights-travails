class TreeNode {
    value: Array<any>;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: Array<any>) {
        this.value = value
        this.left = null;
        this.right = null;
    }
};
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
    possibleMoves: Array<any>;
    board: any;
    list: any;
    
    constructor(board: any) {
        this.board = board;
        this.possibleMoves = [];
        this.list = {};
    }

    populateList(start: any): any {
        if(`${start}` in this.list) return
        //this gets the legal moves from the coordinate passed into it
        function getCombos(coords: any) {
            const x = coords[0]
            const y = coords[1]

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
    
            return possibleCombos.filter((combo: Array<number>) => (combo[0] >= 1 && combo[0] <=8) && (combo[1] >= 1 && combo[1] <= 8));
        }
        
        const moves = getCombos(start);

        this.list[`${start}`] = [];

        moves.forEach((move: any) => {
            this.list[`${start}`].push(move);
            this.populateList(move)
        })
    }
   
    knightMoves(start: any, end: any) {
        this.populateList(this.board[0])
        console.log(this.list)
    }

    dfs(root: TreeNode | null, target: any) {
        if(root == null) return

        this.dfs(root.left, target)
        this.dfs(root.right, target)
    }
    
}

export {GameBoard, Knight};