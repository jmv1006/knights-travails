import { GameBoard, Knight } from "./create-game";

function createGame() {
    const gameboard = new GameBoard()
    const board = gameboard.create();

    //knight object initialized with a gameboard (in form of adjancency list) passed into it
    const knight = new Knight(board);

    return { knight }
}

const { knight } = createGame();

knight.knightMoves([8, 8], [1,1]);