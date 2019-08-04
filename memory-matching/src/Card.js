import React, { Component } from 'react';
import CardBack from './media/gray_back.png';
import './card.css'

class Card extends Component {
    
    flipCard = (event) => {
        document.getElementById(this.props.id).style.transform = "rotateY(180deg)";
        this.setState({ flipped: true });
        this.props.handleFlip(event);
        // setTimeout(() => this.setState ({ flipped: false }), 1500);
    };

    render(props) {
        return(
            <div 
                key={this.props.keyProp} 
                className="card" 
                id={this.props.id}
                data-value={this.props.value}
                // style={{
                //     // transform: `${this.state.flipped ? "rotateY(180deg)" : "rotate(0deg)" }`,
                //     visibility: `${this.state.isHidden ? "hidden" : "visible" }` 
                // }}
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
                        transform: `rotateY(180deg)`,
                    }}
                />
            </div>
        )
    }
}

export default Card;