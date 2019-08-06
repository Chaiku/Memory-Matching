import React from 'react';
import './game.css';
import Board from './Board';
import Pyro from './Pyro';
import PlayAgain from './PlayAgain';

class Game extends React.Component {
  state = {
    time: 90,
    gameStarted: false,
    matchesFound: 0,
    // winningScore: {this.state.time} * 3.14159265359,
  }
  
  addMatch = () => {
    this.setState({ matchesFound: this.state.matchesFound + 1 });
  };
  resetMatch = () => {
    const playAgain = document.getElementById("playDiv");
    const pyro = document.getElementById('pyro');
    setTimeout(() => {   
        if (this.state.matchesFound === 10) {
            pyro.style.display = "block"
            playAgain.style.display = "block";
        } else {
        playAgain.style.display = "none";
        }
    }, 500);
  };

  youLose = () => {
    document.getElementById('youLose').display = 'inline-block'
  };

  subtractSecond = () => {
    this.setState({ time: this.state.time - 1 });
    this.startTimer();
  }

  startTimer = () => {
    const playAgain = document.getElementById("playDiv");
    const pyro = document.getElementById('pyro');
    const youLose = document.getElementById('youLose');
    const timer = document.getElementById('timer');
    const youWin = document.getElementById('youWin');
    if(this.state.matchesFound < 10 && this.state.time > 0 ) {
      setTimeout(() => {
        this.subtractSecond();
      }, 1000);
    }else if(this.state.matchesFound === 10){
      setTimeout(() => {
        pyro.style.display = "block"
        playAgain.style.display = "block";
        youWin.style.display="block";
        timer.style.display = "none"
      }, 500);
    } else if(this.state.matchesFound < 10 && this.state.time === 0){
      playAgain.style.display = "block";
      timer.style.display = "none"
      youLose.style.display = "block";
    };
  };
  


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
        <header id="gameHead">
          <h1><u>Memory Match</u></h1>
          <p>Click the cards to find their matching counterpart!</p>
        </header>
        <header 
          id="timer"
          style={{display: 'none'}}
          >{this.state.time}</header>
        <header
          id="youWin"
          style={{ display: 'none' }}>Your Score: {this.state.time}</header>
        <header id="youLose" style={{ display: 'none' }}>Time is out, sucka.</header>

        
        <Board 
          addMatch={this.addMatch}
          resetMatch={this.resetMatch}
          time={this.state.time}/>
        <Pyro/>
        <PlayAgain/>
      </div>
    );
  }
}

export default Game;