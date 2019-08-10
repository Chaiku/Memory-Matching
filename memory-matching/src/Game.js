import React from 'react';
import './game.css';
import Board from './Board';
import PickLevel from './PickLevel';
import GameHead from './GameHead';
import Timer from './Timer';
import YouWin from './YouWin';
import YouLose from './YouLose';
import Pyro from './Pyro';
import PlayAgain from './PlayAgain';

class Game extends React.Component {
  state = {
    time: 2,
    gameStarted: false,
    matchesFound: 0,
    beginningTime: 0,
    score: 0
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
      const setScore = (this.state.beginningTime - (this.state.beginningTime - this.state.time)) * 3.14159;
      // this.setState({ score: Math.round(setScore) + 1 })
      this.setState({ score: (setScore + .411).toFixed(3) })
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

  startGame = () => {
    document.getElementById('pickLevel').style.display = 'none';
    document.getElementById('gameBoard').style.display = 'inline-block';
    if(this.state.gameStarted === false){
      this.setState({ gameStarted: true });
      this.openTimer();
    };
  };
  pickLevel = (event) => {
    const setTime = event.target.value;
    this.setState({ beginningTime: setTime,
                    time: setTime })
    this.startGame();
  }

  render() {
    return (
      <div 
        className="game"
        >
        <div id="scoreboard"
          style={{ height: '17vh', margin: '0 0 3vh' }}>
          <GameHead/>
          <Timer time={this.state.time}/>
          <YouWin score={this.state.score}/>
          <YouLose/>
        </div>
        <PickLevel level={this.pickLevel}/>
        <Board
          onClick={this.startGame}
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