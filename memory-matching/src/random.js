import React from 'react';
import ReactDOM from 'react-dom';
import './game.css';
import Board from './Board';

class Meow extends React.Component {
  render() {
    return (
      <div className="game">
        <header className="gameHead">
          <h1><u>Memory Match</u></h1>
          <p>Click the cards to find their matching counterpart!</p>
        </header>

        <Board />

      </div>
    );
  }
}

export default Meow;