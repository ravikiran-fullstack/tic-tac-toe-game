import React from "react";
import Board from "./Board";

const Game = () => {
  const status = "Next Player is X";
  const moves = (
    <li>
      <button>Start the game</button>
    </li>
  );

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

export default Game;
