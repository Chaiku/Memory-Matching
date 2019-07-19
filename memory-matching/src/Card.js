import React, { Component } from 'react';
import CardBack from './media/gray_back.png';
import './card.css'

class Card extends Component {
    constructor(props) {
		super(props);
        this.state={ 
            flipped: this.props.flipped,
            visibility: "visible",
            matched: false,
        };
    }

    
    flipCard = (event) => {
        this.setState({ flipped: true });
        this.props.handleFlip(event);
    };

    // unflipCard = () => {
    //     // this.setState({ flipped: false });
    //     alert("you unflipped it")
    // };

    hideMe = () => {
        this.setState({ matched: "true" })
    }



    render(props) {
        return(
            <div 
                key={this.props.keyProp} 
                className="card" 
                id={this.props.cardId}
                data-value={this.props.value}
                style={{
                    transform: `${this.state.flipped ? "rotateY(180deg)" : "rotate(0deg)" }`,
                    visibility: `${this.state.matched ? "hidden" : "visible" }` 
                }}
                >
                <img src={CardBack}
                    className="cardBack" 
                    alt=""
                    data-value={this.props.value}
                    onClick={ (event) => (
                        this.props.flippedCards < 2 ? //prevents flipping more than 2 cards
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
                    }}
                    onClick={this.props.unflipCard}
                />
            </div>
        )
    }
}

export default Card;