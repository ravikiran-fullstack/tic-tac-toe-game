import React from "react";
import Square from "./Square";

const Board = (props) => {
  return (
    <div className='board'>
      <div>
        <Square value={props.squares[0]} onClick={() => props.onClick}></Square>

        <Square value={props.squares[1]} onClick={() => props.onClick}></Square>

        <Square value={props.squares[2]} onClick={() => props.onClick}></Square>
      </div>
      <div>
        <Square value={props.squares[3]} onClick={() => props.onClick}></Square>

        <Square value={props.squares[4]} onClick={() => props.onClick}></Square>

        <Square value={props.squares[5]} onClick={() => props.onClick}></Square>
      </div>
      <div>
        <Square value={props.squares[6]} onClick={() => props.onClick}></Square>

        <Square value={props.squares[7]} onClick={() => props.onClick}></Square>

        <Square value={props.squares[8]} onClick={() => props.onClick}></Square>
      </div>
    </div>
  );
};

export default Board;
