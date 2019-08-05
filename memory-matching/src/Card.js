import React, { Component } from 'react';
import CardBack from './media/gray_back.png';
import './card.css'

class Card extends Component {
    
    flipCard = (event) => {
        document.getElementById(this.props.id).style.transform = "rotateY(180deg)";
        // this.setState({ flipped: true });
        this.props.handleFlip(event);
    };

    render(props) {
        return(
            <div 
                key={this.props.keyProp} 
                className="card" 
                id={this.props.id}
                data-value={this.props.value}
            >
                <img src={CardBack}
                    className="cardBack" 
                    alt=""
                    style={{
                        zIndex: '1'
                    }}
                    data-value={this.props.value}
                    onClick={ (event) => (
                        this.props.flippedCards < 2 && this.props.time > 0 ?
                        this.flipCard(event) :
                        null 
                    )}
                />
                <img 
                    src={this.props.src} 
                    className="cardFace" 
                    id={this.props.id}
                    alt=""
                    style={{ 
                        transform: `rotateY(180deg)`,
                        zIndex: '2'
                    }}
                />
            </div>
        )
    }
}

export default Card;