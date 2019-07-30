import React from 'react';
// import ReactDOM from 'react-dom';
import './board.css';
import Card from './Card';
import Ace1 from './media/Ace1.png';
import King1 from './media/King1.png';
import Queen1 from './media/Queen1.png';
import Jack1 from './media/Jack1.png';
import Ten1 from './media/Ten1.png';
import Nine1 from './media/Nine1.png';
import Eight1 from './media/Eight1.png';
import Seven1 from './media/Seven1.png';
import Six1 from './media/Six1.png';
import Five1 from './media/Five1.png';
import Ace2 from './media/Ace2.png';
import King2 from './media/King2.png';
import Queen2 from './media/Queen2.png';
import Jack2 from './media/Jack2.png';
import Ten2 from './media/Ten2.png';
import Nine2 from './media/Nine2.png';
import Eight2 from './media/Eight2.png';
import Seven2 from './media/Seven2.png';
import Six2 from './media/Six2.png';
import Five2 from './media/Five2.png';

const boardStyle = {
    width: "100vw"
}

class Board extends React.Component {
<<<<<<< HEAD
    state = {
        deck: [
            Ace1, Ace2, King1, King2, Queen1,
            Queen2, Jack1, Jack2, Ten1, Ten2,
            Nine1, Nine2, Eight1, Eight2, Seven1,
            Seven2, Six1, Six2, Five1, Five2
        ],
        flippedCards: [],
        onCardFlip: function(card) {
            this.flippedCards.push(card)
            console.log(this.flippedCards);
        }
    };
=======
    constructor(props){
        super(props);
        this.cardElement = React.createRef();
    
        this.state = {
            deck: [
                Ace1, Ace2, King1, King2, Queen1,
                Queen2, Jack1, Jack2, Ten1, Ten2,
                Nine1, Nine2, Eight1, Eight2, Seven1,
                Seven2, Six1, Six2, Five1, Five2
            ],
            flipped: null,
            flippedCards: 0,
            flippedOne: '',
            flippedStoreOne: '',
            flippedTwo: '',
            flippedStoreTwo: '',
            matchFound: false,
        };
    }
>>>>>>> a98b601fd6cdb7fbc8896af58be7628dff022e85


    shuffleArray = (array) => {
        let i = 0;
        for (i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
    };
    
    handleNoMatch = () => {
        console.log("they don't match");
        this.cardElement.current.unflipCard();
        this.setState({ flipped: false })
    }

    handleMatch = () => {
        console.log("they match!")
        console.log(this.state.flippedStoreOne);
        console.log(this.state.flippedStoreTwo);
    }

    checkForMatch = () => {setTimeout(() => {
        console.log(this.state.flippedOne + "  " + this.state.flippedTwo + " cards flipped so far: " + this.state.flippedCards);
        if(this.state.flippedOne === this.state.flippedTwo && this.state.flippedCards > 1) {
        this.handleMatch();
        }else if(this.state.flippedOne !== this.state.flippedTwo && this.state.flippedCards > 1) {
        this.handleNoMatch();
        }
    }, 1000);
    };

    handleFlip = (event) => {
            const cardValue = event.target.dataset.value.slice(0,-1);
            const cardStoreValue = event.target.dataset.value;

            this.state.flippedCards === 0 ?  //if flipedOne in state is still blank...
                this.setState({ flippedOne: cardValue, flippedStoreOne: cardStoreValue }): //assign clicked card to flippedOne, and otherwise
                this.setState({ flippedTwo: cardValue, flippedStoreTwo: cardStoreValue });  //assign clicked card to flippedTwo
            this.setState({ flippedCards: this.state.flippedCards + 1 });  //add one to number of flipped cards
        
            this.checkForMatch();
    };

    // componentWillMount() {
    // this.shuffleArray(this.state.deck);
    // };

    render(props) {
        return(
            <React.Fragment>
                <div style={boardStyle}>
<<<<<<< HEAD
                    {this.state.deck.map(d => (
                        <Card 
                            key={d} 
                            src={d} 
                            cardId={d.substr(14).slice(0, -13)} 
                            value={d.substr(14).slice(0, -14)}
                            flipped={false}
                            flipCard={this.value}
                            onCardFlip={this.onCardFlip}
                            card={this.value}
=======
                    {this.state.deck.map(data => (
                        <Card   
                            // ref={data.substr(14).slice(0, -14)}  //e.g. Ace, Ace
                            ref={this.cardElement}
                            key={data} 
                            keyProp={data}
                            src={data} 
                            id={data.substr(14).slice(0, -13)} //e.g. Ace1, Ace2    
                            value={data.substr(14).slice(0, -13)}  //e.g. Ace, Ace
                            unflipCard={this.unflipCard}
                            handleFlip={this.handleFlip}
                            matchFound={this.state.matchFound}
                            flippedCards={this.state.flippedCards}
>>>>>>> a98b601fd6cdb7fbc8896af58be7628dff022e85
                        />
                        
                    ))}

                </div>
            </React.Fragment>
        )
    }


}

export default Board;