import React, { Component } from 'react';
import './game.css';

class Timer extends Component {
    render(props) {
        return(
            <header
                id="youWin"
                style={{ display: 'none' }}
            >Your Score: {this.props.time}</header>
        )
    }       
}
export default Timer