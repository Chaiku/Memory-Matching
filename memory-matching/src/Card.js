import React, { Component } from 'react';
import CardBack from './media/gray_back.png';
import x from './media/x.png';
import './card.css'

class Card extends Component {
    state={
        discarded: false,
    }
    flipCard = (event) => {
        document.getElementById(this.props.id).style.transform = "rotateY(180deg)";
        this.props.handleFlip(event);
    };


    render(props) {
        const cardX = `${this.props.id}X`;
        const cardMove = `${this.props.id}Move`;
        return(
            <div class="cardHolder">
            <div class="cardMove" id={cardMove}>
            <div 
                key={this.props.keyProp} 
                className="card" 
                id={this.props.id}
                data-value={this.props.value}
            >
                <img src={CardBack}
                    className="cardBack"
                    alt=""
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
                    alt=""
                    style={{ 
                        transform: `rotateY(180deg)`,
                    }}
                />
                <img
                    src={x}
                    alt=''
                    className='cardFace'
                    id={cardX}
                    style={{
                        zIndex: 1000,
                        visibility: 'hidden',
                        transform: `rotateY(180deg)`,
                    }}
                />                
            </div>
            </div>
            </div>
        )
    }
}

export default Card;