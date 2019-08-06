import React, { Component } from 'react';
import './game.css';

class PickLevel extends Component {
    render(props) {
        return(
            <header id="pickLevel">
                <h1><u>pick a level</u></h1>
                <button 
                    data='90'
                    id="easy" 
                    class="playBtn" 
                    onClick={this.props.easy}
                >easy peasy</button>
                <button
                    data='60' 
                    id="medium" 
                    class="playBtn" 
                    onClick={this.props.medium}
                >...meh</button>
                <button 
                    data='45'
                    id="difficult" 
                    class="playBtn" 
                    onClick={this.props.difficult}
                >yikes!</button>
            </header>
        )
    }       
}
export default PickLevel;