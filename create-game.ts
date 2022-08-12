class GameBoard {
  board: Array<any>;

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

class Knight {
  board: any;
  list: any;

  constructor(board: any) {
    this.board = board;
    this.list = {};
    this.populateList(this.board[0]);
  }

  isOnBoard(coord: any) {
    if (coord[0] >= 1 && coord[0] <= 8 && coord[1] >= 1 && coord[1] <= 8)
      return true;
    return false;
  }

  populateList(start: any): any {
    if (`${start}` in this.list) return;
    //this gets the legal moves from the coordinate passed into it
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

    this.list[`${start}`] = [];

    moves.forEach((move: any) => {
      this.list[`${start}`].push(move);
      this.populateList(move);
    });
  }

  knightMoves(start: any, end: any) {
    if (!this.isOnBoard(start) || !this.isOnBoard(end))
      return console.log(
        "One of the passed coordinates is not on the gameboard"
      );

    let queue = [];
    let visited: any = {};

    queue.push(`${start}`);
    visited[`${start}`] = start;

    let prev: any = {};

    while (queue.length > 0) {
      let n: any = queue.shift();

      const space = this.list[n];

      if (n === `${end}`) {
        const moves = this.countMoves(prev, start, end);
        console.log(`found ${n} from ${start} in ${moves} moves`);
        return;
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

    function count(start: any, end: any, moves: number): any {
      moves++;
      if (`${list[start]}` === `${end}`) {
        return moves;
      }
      return count(list[start], end, moves);
    }

    return count(end, start, moves);
  }
}

export { GameBoard, Knight };