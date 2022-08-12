import { GameBoard, Knight } from "./create-game";

const gameboard = new GameBoard()
const board = gameboard.create();
const knight = new Knight(board);

test("knight moves function returns correct message when invalid coordinates are passed in", () => {
    expect(knight.knightMoves([1, 1], [9, 8])).toBe(null)
});

test("knight moves function returns correct moves count for given path", () => {
    expect(knight.knightMoves([1, 1], [3, 2])).toBe(1);
    expect(knight.knightMoves([8, 8], [8,6])).toBe(2);
    expect(knight.knightMoves([8, 8], [1, 1])).toBe(6);
});
