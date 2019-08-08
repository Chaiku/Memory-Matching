import React, { Component } from 'react';
import './game.css';

class YouLose extends Component {
    render(props) {
        return(
            <header 
                id="youLose" 
                style={{ display: 'none' }}
            >Time is out, sucka.</header>
        )
    }       
}
export default YouLose;