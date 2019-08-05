import React, { Component } from 'react';
import './game.css';

class PlayAgain extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         matchesFound: this.props.matchesFound,
    //     }
    // };

    render(props) {
        return(
            <div  id="playDiv" style={{ display: 'none' }}>
                <a href="."><button id="playBtn">play again</button></a>
            </div>
        )
    }
}

export default PlayAgain;