import { GameBoard, Knight } from "./create-game";


function createGame() {
    const gameboard = new GameBoard()
    gameboard.create()

    const knight = new Knight(gameboard.board);

    return {gameboard, knight}
}

const {gameboard, knight} = createGame();

knight.knightMoves([4, 4], [4, 6]);
