import React, { Component } from 'react';
import './game.css';

class GameHead extends Component {


    render(props) {
        return(
            <header 
                id="gameHead"
                style={{ display: 'none' }}>
                <h1><u>Memory Match</u></h1>
                <p>Click the cards to find their matching counterpart!</p>
          </header>
        )
    }
}

export default GameHead;