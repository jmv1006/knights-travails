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
    currentPosition: Array<number>;
    board: any;
    moves: any;
    

    constructor(board: any) {
        this.board = board
        this.currentPosition = [];
        this.possibleMoves = [];
        this.moves = [];
    }

    getPossibleMoves(start: any): any {
        // base case: if the move is already in possible moves
        const isInMoves = (element: any) => element[0] === start[0] && element[1] === start[1];
        if(this.possibleMoves.some(isInMoves)) return 

        this.possibleMoves.push(start)

        //goal: to get possible coordinates for ALL possible moves from position
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
    
            return possibleCombos.filter((combo: Array<number>) => (combo[0] >= 1 && combo[0] <=8) && (combo[1] >= 1 && combo[1] <= 8));
        }
        
        const legalCombos = getCombos(start);

        legalCombos.forEach((combo: any) => {
            this.getPossibleMoves(combo)
        })

        return this.possibleMoves;
    }
   
    async knightMoves(start: any, end: any) {
        const movesArr = this.getPossibleMoves(start);

        console.log(movesArr)
        //const root = this.buildTreeFromMoves(movesArr);

        
        //this.dfs(root, end)
    }

    dfs(root: TreeNode | null, target: any) {
        if(root == null) return

        this.dfs(root.left, target)
        this.dfs(root.right, target)
    }

    buildTreeFromMoves(arr: any) {
        const start = arr[0];

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

        const sorted: Array<any> = mergeSort(arr);
        const noDups = [...new Set(sorted)];

        function buildTree(arr: any, start: any, end: any) {
            if(start > end) return null

            let mid = Math.round((start + end)/ 2);
            let root: any = new TreeNode(arr[mid]);
            
            root.left = buildTree(arr, start, mid - 1)
            root.right = buildTree(arr, mid + 1, end)
            return root
        }

        const root: any = new TreeNode(start);
        root.left = buildTree(noDups.splice(1, Math.floor(noDups.length / 2)), 0, noDups.length - 1)
        root.right = buildTree(noDups, 0, noDups.length - 1)

        return root
    }
    
}

export {GameBoard, Knight};

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