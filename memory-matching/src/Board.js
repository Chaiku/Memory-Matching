import React from 'react';
import './board.css';
import Card from './Card';
import PlayAgain from './PlayAgain';
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
        };
    }
    shuffleArray = (array) => {
        let i = 0;
        for (i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
    };

    resetMatch = () => {
        // this.props.resetMatch();
        this.setState({ flippedOne: '',
                        flippedStoreOne: '',
                        flippedTwo: '',
                        flippedStoreTwo: '',
                        flippedCards: 0,
                     })
    }
    
    handleNoMatch = () => {
        const unmatched1 = document.getElementById(this.state.flippedStoreOne);
        const unmatched2 = document.getElementById(this.state.flippedStoreTwo);
        setTimeout(() => {
            unmatched1.classList.add("shake");
            unmatched2.classList.add("shake");
        }, 200);        
        setTimeout(() => {
            unmatched1.setAttribute("style", "transform: rotate(0deg);");
            unmatched2.setAttribute("style", "transform: rotate(0deg);");
        }, 1000);
        setTimeout(() => {
            unmatched1.classList.remove("shake")
            unmatched2.classList.remove("shake")
        }, 700);

        this.resetMatch();
    }

    handleMatch = () => {
        this.props.addMatch();                
        const remove1 = document.getElementById(this.state.flippedStoreOne);
        const remove2 = document.getElementById(this.state.flippedStoreTwo);
        setTimeout(() => {
            remove1.style.visibility = "hidden";
            remove2.style.visibility = "hidden";
        }, 500);
        this.resetMatch();
    }

    checkForMatch = () => {
        setTimeout(() => {
            if(this.state.flippedOne === this.state.flippedTwo && this.state.flippedCards > 1) {
                this.handleMatch();
            }else if(this.state.flippedOne !== this.state.flippedTwo && this.state.flippedCards > 1) {
            this.handleNoMatch();
            }
        }, 1000);
    };

    handleFlip = (event) => {
            const cardValue = event.target.dataset.value.slice(0,-1); //e.g. "Ace"
            const cardStoreValue = event.target.dataset.value; //e.g. "Ace1" or "Ace2"

            this.state.flippedCards === 0 ?  //if flipedOne in state is still blank...
                this.setState({ flippedOne: cardValue, flippedStoreOne: cardStoreValue }): //assign clicked card to flippedOne, and otherwise
                this.setState({ flippedTwo: cardValue, flippedStoreTwo: cardStoreValue });  //assign clicked card to flippedTwo
            this.setState({ flippedCards: this.state.flippedCards + 1 });  //add one to number of flipped cards
            this.checkForMatch();
    };

    componentWillMount() {
    this.shuffleArray(this.state.deck);
    };

    render(props) {
        return(
            <React.Fragment>
                <div style={boardStyle}>
                    {this.state.deck.map(data => (
                        <Card   
                            key={data} 
                            keyProp={data}
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
