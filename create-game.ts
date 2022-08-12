class GameBoard {
  board: any;

  constructor() {
    this.board = {};
  }

  create() {
    this.generateBoard([1,1]);
    return this.board;
  }

  generateBoard(start: any) {
    if (`${start}` in this.board) return;
  
    function getCombos(coords: any) {
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
        [x - 2, y + 1],
      ];

      return possibleCombos.filter(
        (combo: Array<number>) =>
          combo[0] >= 1 && combo[0] <= 8 && combo[1] >= 1 && combo[1] <= 8
      );
    }

    const moves = getCombos(start);

    this.board[`${start}`] = [];

    moves.forEach((move: any) => {
      this.board[`${start}`].push(move);
      this.generateBoard(move);
    });
  }
}

class Knight {
  board: any;

  constructor(board: any) {
    this.board = board;
  }

  isOnBoard(coord: any) {
    if (coord[0] >= 1 && coord[0] <= 8 && coord[1] >= 1 && coord[1] <= 8)
      return true;
    return false;
  }


  knightMoves(start: any, end: any) {
    if (!this.isOnBoard(start) || !this.isOnBoard(end)) {
      console.log("One of the passed coordinates is not on the gameboard");
      return null;
    }

    let queue = [];
    let visited: any = {};

    queue.push(`${start}`);
    visited[`${start}`] = start;

    //for every space I land on, there is an array containing the space(s) I was on before I got to it
    let prev: any = {};

    while (queue.length > 0) {
      let n: any = queue.shift();

      const space = this.board[n];

      if (n === `${end}`) {
        //returns move count and an array of the spaces knight landed on in its path
        const {movesCount, path} = this.countMoves(prev, start, end);
        console.log(`found [${n}] from [${start}] in ${movesCount} move(s). Here is your path:`);
        path.forEach((space: any) => {
          console.log(`[${space}]`);
        })
        return movesCount;
      }

      for (let neighbor in space) {
        if (!(`${space[neighbor]}` in visited)) {
          visited[`${space[neighbor]}`] = space[neighbor];
          queue.push(`${space[neighbor]}`);

          if (!(`${space[neighbor]}` in prev)) {
            prev[`${space[neighbor]}`] = [];
          }
          prev[`${space[neighbor]}`].push(n);
        }
      }
    }
  }

  countMoves(list: any, start: any, end: any) {
    let moves = 0;
    let path: any = [];

    function count(start: any, end: any, moves: number, path: any): any {
      moves++;
      path.push(start)

      if (`${list[start]}` === `${end}`) {
        return {movesCount: moves, pathArr: path}
      }

      return count(list[start], end, moves, path);
    }

    //counting steps backward: starting from end point (space I ended up at) to start point (space I started at)
    const {movesCount, pathArr} = count(end, start, moves, path);

    //pathArr is the path from my end space back to my starting space, excluding the starting space, so I reverse it:
    const reversed = Array.from(pathArr).reverse();

    //and add my start position to the front of it
    reversed.unshift(start);

    return {movesCount, path: reversed};
  }
}

export { GameBoard, Knight };