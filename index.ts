import { GameBoard, Knight } from "./create-game";


function createGame() {
    const gameboard = new GameBoard()
    gameboard.create()

    const knight = new Knight(gameboard.board);

    return {gameboard, knight}
}

const { knight } = createGame();

knight.knightMoves([3, 3], [7, 5]);
//knight.knightMovesDfs([3, 3], [8, 8], 0);