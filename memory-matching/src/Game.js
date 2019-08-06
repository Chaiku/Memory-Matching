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
import { tsImportEqualsDeclaration } from '@babel/types';

class Game extends React.Component {
  state = {
    time: 60,
    gameStarted: false,
    matchesFound: 0,
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

  startGame = () => {
    document.getElementById('pickLevel').style.display = 'none';
    if(this.state.gameStarted === false){
      this.setState({ gameStarted: true });
      this.openTimer();
    };
  };
  pickEasy = () => {
    this.setState({ time: 90 });
    this.startGame();
  }
  pickMedium = () => {
    this.setState({ time: 60 });
    this.startGame();
  }
  pickDifficult = () => {
    this.setState({ time: 45 });
    this.startGame();
  }

  render() {
    return (
      <div 
        className="game"
        >
        <PickLevel 
          easy={this.pickEasy}
          medium={this.pickMedium}
          difficult={this.pickDifficult}/>
        <GameHead/>
        <Timer time={this.state.time}/>
        <YouWin time={this.state.time}/>
        <YouLose/>

        
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