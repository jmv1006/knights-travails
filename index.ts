import { GameBoard, Knight } from "./create-game";


function createGame() {
    const gameboard = new GameBoard()
    gameboard.create()

    const knight = new Knight(gameboard.board);

    return {gameboard, knight}
}

const { knight } = createGame();

knight.knightMoves([3, 3], [1,0]);