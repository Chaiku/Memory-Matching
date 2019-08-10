import React from 'react';
import './board.css';
import Discard from './Discard';
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
    width: "100vw",
    display: 'none'
}

class Board extends React.Component {
    constructor(props) {
        super(props);   
        this.state = {
            deck: [
                Ace1, Ace2, King1, King2, Queen1,
                Queen2, Jack1, Jack2, Ten1, Ten2,
                Nine1, Nine2, Eight1, Eight2, Seven1,
                Seven2, Six1, Six2, Five1, Five2
            ],
            flippedCards: 0,
            flippedOne: '',
            flippedStoreOne: '',
            flippedTwo: '',
            flippedStoreTwo: '',
            matchesFound: this.props.matchesFound,
            Ace: '1.9',  //these are the "left:" values for discarding
            Five: '11.7',
            Six: '21.5',
            Seven: '31.3',
            Eight: '41.1',
            Nine: '50.9',
            Ten: '60.7',
            Jack: '70.5',
            Queen: '80.3',
            King: '90.1',
            xPosition: '',
            faceValue: ''
        };
    };

    resetMatch = () => {
        this.setState({ flippedOne: '',
                        flippedStoreOne: '',
                        flippedOneFace: '',
                        flippedTwo: '',
                        flippedStoreTwo: '',
                        flippedTwoFace: '',
                        flippedCards: 0,
                     })
    }
    
    handleNoMatch = () => {
        const unmatched1 = document.getElementById(this.state.flippedStoreOne);
        const unmatched2 = document.getElementById(this.state.flippedStoreTwo);        
        const unmatched1X = document.getElementById(`${this.state.flippedStoreOne}X`);
        const unmatched2X = document.getElementById(`${this.state.flippedStoreTwo}X`);        

        setTimeout(() => {
            unmatched1X.style.visibility = "visible";
            unmatched2X.style.visibility = "visible";
        }, 500);        
        setTimeout(() => {
            // unmatched1.classList.remove("shake");
            // unmatched2.classList.remove("shake");
            unmatched1X.style.visibility = "hidden";
            unmatched2X.style.visibility = "hidden";
        }, 999);
        setTimeout(() => {
            unmatched1.style.transform = 'rotate(0deg)';
            unmatched2.style.transform = 'rotate(0deg)';
        }, 1000);

        this.resetMatch();
    }


    handleMatch = () => {
        this.props.addMatch();  //adds a number to state.matchesFound in Game.js           
        const remove1 = document.getElementById(this.state.flippedStoreOne);
        const remove2 = document.getElementById(this.state.flippedStoreTwo); 
        const remove1Move = document.getElementById(`${this.state.flippedStoreOne}Move`);
        const remove2Move = document.getElementById(`${this.state.flippedStoreTwo}Move`);;
        const discard = document.getElementById(`discarded${this.state.flippedOne}`);      ;        
        remove1Move.classList.add('moveToDiscard');
        remove2Move.classList.add('moveToDiscard');
        discard.style.visibility = "visible";
        discard.classList.add('discardBig');
        setTimeout(() => {
            remove1.style.visibility = "hidden";
            remove2.style.visibility = "hidden";            
        }, 1000);
        
        this.resetMatch();
    }

    checkForMatch = () => {
        if(this.state.flippedOne === this.state.flippedTwo) { //if the two flipped cards match
            this.handleMatch();
        }else{
        this.handleNoMatch();
        }
    };

    handleFlip = (event) => {
        const cardStoreValue = event.target.dataset.value; //e.g. "Ace1" or "Ace2"
        const cardValue = event.target.dataset.value.slice(0,-1); //e.g. "Ace"
        this.setState({ faceValue: cardValue });
        this.state.flippedCards === 0 ?  //if no cards have been flipped yet...
            this.setState({ flippedOne: cardValue, flippedStoreOne: cardStoreValue }) : //assign clicked card to flippedOne, otherwise...
            this.setState({ flippedTwo: cardValue, flippedStoreTwo: cardStoreValue });  //assign clicked card to flippedTwo
        this.setState({ flippedCards: this.state.flippedCards + 1 });  //then add one to number of flipped cards
        setTimeout(() => {
            if(this.state.flippedCards > 1){ //gives state a chance to update before checking if 2 cards flipped...
                this.checkForMatch();        //then checks for match
            };
        }, 800);
    };

    shuffleArray = (array) => {
        let i = 0;
        for (i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
    };

    componentWillMount() {
    this.shuffleArray(this.state.deck);
    };

    render(props) {
        return(
            <React.Fragment>
                <div 
                    id="gameBoard"
                    style={boardStyle}>
                    <Discard />
                    {this.state.deck.map(data => (
                        <Card   
                            key={data} 
                            src={data} 
                            id={data.substr(14).slice(0, -13)} //e.g. Ace1, Ace2    
                            value={data.substr(14).slice(0, -13)}  //e.g. Ace1, Ace2
                            time={this.props.time}
                            handleFlip={this.handleFlip}
                            flippedCards={this.state.flippedCards}
                            flipped={this.state.flipped}
                        />                        
                    ))}
                </div>
            </React.Fragment>
        )
    }


}

export default Board;
