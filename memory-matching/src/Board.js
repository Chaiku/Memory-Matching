import React from 'react';
import ReactDOM from 'react-dom';
import './board.css';
import Card from './Card';
import CardBack from './media/gray_back.png';
import Ace1 from './media/AS.png';
import King1 from './media/KD.png';
import Queen1 from './media/QH.png';
import Jack1 from './media/JC.png';
import Ten1 from './media/10S.png';
import Nine1 from './media/9D.png';
import Eight1 from './media/8H.png';
import Seven1 from './media/7C.png';
import Six1 from './media/6S.png';
import Five1 from './media/5D.png';
import Ace2 from './media/AS.png';
import King2 from './media/KD.png';
import Queen2 from './media/QH.png';
import Jack2 from './media/JC.png';
import Ten2 from './media/10S.png';
import Nine2 from './media/9D.png';
import Eight2 from './media/8H.png';
import Seven2 from './media/7C.png';
import Six2 from './media/6S.png';
import Five2 from './media/5D.png';


class Board extends React.Component {
    state = {
        deck: [
            {King1}, {King2}, {Ace1}, {Ace2}, {Queen1}, 
            {Queen2}, {Jack1}, {Jack2}, {Ten1}, {Ten2}, 
            {Nine1}, {Nine2}, {Eight1}, {Eight2}, {Seven1}, 
            {Seven2}, {Six1}, {Six2}, {Five1}, {Five2}
        ],
    };

    shuffleArray = (array) => {
        const shuffledDeck = array;
        let i = 0;
        for (i = shuffledDeck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            console.log(shuffledDeck);
        };
        return shuffledDeck;
    };

    componentDidMount() {
        this.shuffleArray(this.state.deck);
    }

    render(props) {
        return(
            <React.Fragment>
                <div style={props.boardStyle}>
                    {this.shuffledDeck.map(d => (
                        <span>
                            <img src={d} className="card" style={this.props.cardStyles} key={d}/>
                            <img src={CardBack} className="cardBack" style={this.props.cardBackStyle}/>
                        </span>
                    ))};
                </div>
            </React.Fragment>


        )
    }


}

export default Board;