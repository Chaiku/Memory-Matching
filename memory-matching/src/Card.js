import React, { Component } from 'react';
import CardBack from './media/gray_back.png';
import './card.css'

class Card extends Component {
    state={ 
        flipped: false,
        matched: false
    }

    
flipCard = (event) => {
    this.setState({ flipped: true });
    console.log("Value read in Card.js: " + event.target.dataset.value);
    this.props.handleFlip(event);
};




    render(props) {
        return(
            <div 
                key={this.props.keyProp} 
                className="card" 
                id={this.props.cardId}
                data-value={this.props.value}
                style={{
                    transform: `${this.state.flipped ? "rotateY(180deg)" : null }`,
                }}
                >
                <img src={CardBack}
                    className="cardBack" 
                    alt=""
                    // value={this.props.value}
                    data-value={this.props.value}
                    onClick={ (event) => (
                        !this.props.twoFlipped ?
                        this.flipCard(event) :
                        null 
                    )}
                />
                <img 
                    src={this.props.src} 
                    className="cardFace" 
                    alt=""
                    style={{ 
                        transform: "rotateY(180deg)",
                        visibility: `${this.props.matchFound ? "hidden" : null }`
                    }}
                />
            </div>
        )
    }
}

export default Card;