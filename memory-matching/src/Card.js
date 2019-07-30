import React, { Component } from 'react';
import CardBack from './media/gray_back.png';
import './card.css'

class Card extends Component {
<<<<<<< HEAD
    state={ 
        flipped: false
     }
    
onCardFlip = (event) => {
    this.setState({ flipped: true })
    console.log(this.props.cardId);
    this.props.flippedCards.push(this.props.cardId);

};
=======
    constructor(props) {
		super(props);
        this.state={ 
            flipped: this.props.flipped,
            isHidden: false,
            matched: false,
        };
    }

    
    flipCard = (event) => {
        this.setState({ flipped: true });
        this.props.handleFlip(event);
    };

    unflipCard = () => {
        this.setState({ flipped: false });
    };

    hideMe = () => {
        this.setState({ isHidden: "true" });
        
    }


>>>>>>> a98b601fd6cdb7fbc8896af58be7628dff022e85

    render(props) {
        return(
            <div 
                key={this.props.keyProp} 
                className="card" 
                id={this.props.cardId}
                data-value={this.props.value}
                style={{
                    transform: `${this.state.flipped ? "rotateY(180deg)" : "rotate(0deg)" }`,
                    visibility: `${this.state.isHidden ? "hidden" : "visible" }` 
                }}
                >
                <img src={CardBack}
<<<<<<< HEAD
                    onClick={this.onCardFlip}
=======
>>>>>>> a98b601fd6cdb7fbc8896af58be7628dff022e85
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
                    onClick={this.hideMe}
                />
            </div>
        )
    }
}

export default Card;