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
    board: any;
    list: any;
    visited: any;

    constructor(board: any) {
        this.board = board;
        this.list = {};
        this.populateList(this.board[0])
        this.visited = {};
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
        let queue = [];
        let visited: any = {};

        queue.push(`${start}`);
        visited[`${start}`] = start

        while(queue.length > 0) {
            let n: any = queue.shift()

            const space = this.list[n];
            
            
            if(n === `${end}`) {
                return console.log(`found ${n}`)
            }
            

            for(let neighbor in space) {
                if(!(`${space[neighbor]}` in visited)) {
                    visited[`${space[neighbor]}`] = space[neighbor];
                    queue.push(`${space[neighbor]}`);
                }
            }
        }
    }

    knightMovesDfs(start: any, end: any, moves: number) {
        if(!(`${start}` in this.visited)) {
            const space = this.list[start];
            this.visited[`${start}`] = start;

            moves++;
            if(`${start}` === `${end}`) {
                return console.log(`found space ${end} in ${moves - 1} moves`)
            }

            for(let neighbor in space) {
                this.knightMovesDfs(space[neighbor], end, moves)
            }
        }
    }
    
}

export {GameBoard, Knight};