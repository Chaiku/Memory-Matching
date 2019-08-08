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
            className="pyro"
            id="pyro"
            style={{
                zIndex: 0,
                display: 'none',
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0
            }}>
                <div className="before"></div>
                <div className="after"></div>
            </div>
        )
    }
}

export default Pyro;