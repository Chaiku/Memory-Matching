import React, { Component } from 'react';
import './pyro.css';

class Pyro extends Component {
    constructor(props){
        super(props);
        this.state={
            matchesFound: this.props.matchesFound,
        }
    };

    render(props) {
        return(
            <div 
            class="pyro"
            id="pyro"
            style={{
                zIndex: 0,
                display: 'none'
            }}>
                <div class="before"></div>
                <div class="after"></div>
            </div>
        )
    }
}

export default Pyro;