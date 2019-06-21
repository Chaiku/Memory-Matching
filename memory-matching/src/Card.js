import React, { Component } from 'react';
import CardBack from './media/gray_back.png';
import './card.css'

class Card extends Component {
    state={ flipped: false }

    
flipCard = (event) => {
    this.setState({ flipped: true });
    console.log("Value read in Card.js: " + event.target.dataset.value);
};

    render(props) {
        return(
            <div 
                key={this.props.key} 
                className="card" 
                id={this.props.cardId}
                data-value={this.props.value}
                style={{transform: `${this.state.flipped ? "rotateY(180deg)" : null}`}}
                >
                <img src={CardBack}
                    className="cardBack" 
                    alt=""
                    // value={this.props.value}
                    data-value={this.props.value}
                    onClick={ (event) => {
                        this.flipCard(event);
                        this.props.handleFlip(event);
                    }}
                />
                <img 
                    src={this.props.src} 
                    className="cardFace" 
                    alt=""
                    style={{ transform: "rotateY(180deg)"}}
                />
            </div>
        )
    }
}

export default Card;