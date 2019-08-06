import React, { Component } from 'react';
import './game.css';

class Timer extends Component {
    render(props) {
        return(
            <header 
                id="timer"
                style={{display: 'none'}}
            >{this.props.time}</header>
        )
    }       
}
export default Timer