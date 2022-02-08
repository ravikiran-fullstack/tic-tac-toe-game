import React, { useReducer } from "react";
import Board from "./Board";

const reducer = (state, action) => {
  switch (action.type) {
    case "JUMP":
      return state;
    case "MOVE":
      return {
        ...state,
        history: state.history.concat({
          squares: action.payload.squares,
        }),
        xIsNext: !state.xIsNext,
      };
    default:
      return state;
  }
};

const Game = () => {
  const [state, dispatch] = useReducer(reducer, {
    xIsNext: true,
    history: [{ squares: Array(9).fill(null) }],
  });

  const { xIsNext, history } = state;

  const jumpTo = (step) => {
    dispatch({ type: "JUMP", payload: step });
  };

  const handleClick = (i) => {
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    dispatch({ type: "MOVE", payload: { squares } });
  };

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  const status = winner
    ? winner === "D"
      ? "DRAW"
      : "Winner is " + winner
    : "Next Player is " + (xIsNext ? "X" : "0");

  const moves = history.map((step, move) => {
    const desc = move ? "Go to #" + move : "Start the game";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const squares = Array(9).fill(null);

  return (
    <div className='game'>
      <div className='gameBoard'>
        <Board squares={squares}></Board>
      </div>
      <div className='gameInfo'>
        <div>{status}</div>
        <ul>{moves}</ul>
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  return null;
};

export default Game;
