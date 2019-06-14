import React, { Component } from 'react';
import CardBack from './media/gray_back.png';
import './card.css'

class Card extends Component {
    state={
        flipped: false
    }
    
flipCard = (event) => {
    this.setState({
        flipped: true
    })
};

    render(props) {
        return(
                <div 
                    key={this.props.key} 
                    className="card" 
                    id={this.props.cardId}
                    style={{transform: `${this.state.flipped ? "rotateY(180deg)" : null}`}}
                    >
                    <img src={CardBack}
                        onClick={this.flipCard}
                        className="cardBack" 
                        alt=""
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