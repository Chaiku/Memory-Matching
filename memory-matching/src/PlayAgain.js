import React, { Component } from 'react';
import './game.css';

class PlayAgain extends Component {


    render(props) {
        return(
            <div  id="playDiv" style={{ display: 'none' }}>
                <a href="."><button class="playBtn">play again</button></a>
            </div>
        )
    }
}

export default PlayAgain;