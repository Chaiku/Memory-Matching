import React from 'react';
// import ReactDOM from 'react-dom';
import './game.css';
import Board from './Board';

class Game extends React.Component {
  state = {
    time: 90,
    gameStarted: false,
  }

  youLose = () => {
    document.getElementById('youLose').display = 'inline-block'
  }

  subtractSecond = () => {
    this.setState({ time: this.state.time - 1 });
    this.startTimer();
  }

  startTimer = () => {
    setTimeout(() => {
      if(this.state.time > 0 ) {
      this.subtractSecond();
      }else{
      this.youLose();
      }
  }, 1000);
  }

  openTimer = () => {
    document.getElementById('gameHead').style.display = "none";
    document.getElementById('timer').style.display = "inline-block";
    this.startTimer();
  };

  handleClick = () => {
    if(this.state.gameStarted === false){
      this.setState({ gameStarted: true });
      this.openTimer();
    };
  };


  render() {
    return (
      <div 
        className="game"
        onClick={this.handleClick}
        >
        <header 
          id="timer"
          style={{display: 'none'}}
          >{this.state.time}</header>
        <header id="youLose" style={{ display: 'none' }}>Time is out, sucka.</header>
        <header id="gameHead">
          <h1><u>Memory Match</u></h1>
          <p>Click the cards to find their matching counterpart!</p>
        </header>
        
        <Board />

      </div>
    );
  }
}

export default Game;