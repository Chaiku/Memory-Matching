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
    state = {
        deck: [
            Ace1, Ace2, King1, King2, Queen1,
            Queen2, Jack1, Jack2, Ten1, Ten2,
            Nine1, Nine2, Eight1, Eight2, Seven1,
            Seven2, Six1, Six2, Five1, Five2
        ],
        flippedCards: 0,
        flippedOne: 'x',
        flippedTwo: '',
        matchFound: false,
    };

    cardElement = React.createRef();

    shuffleArray = (array) => {
        let i = 0;
        for (i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
    };
    
    handleNoMatch = () => {
       console.log("they don't match")
       this.setState({ matchFound: false });
    //    this.setState({ flippedCards: 0 });
    }

    handleMatch = () => {
        console.log("they match!")
        this.setState({ matchFound: true });
        // this.setState({ flippedOne: '' });
        // this.setState({ flippedTwo: '' });
        // this.setState({ matchFound: false })
        // this.setState({ flippedCards: 0 })

    }

    checkForMatch = () => {setTimeout(() => {
        console.log(this.state.flippedOne + "  " + this.state.flippedTwo + " cards flipped so far: " + this.state.flippedCards);
        this.state.flippedOne === this.state.flippedTwo ?
        this.handleMatch() :
        this.handleNoMatch();
    }, 1000);
    };

    handleFlip = (event) => {
            const cardValue = event.target.dataset.value;

            this.state.flippedCards === 0 ?  //if flipedOne in state is still blank...
                this.setState({ flippedOne: cardValue }) : //assign clicked card to flippedOne, otherwise
                this.setState({ flippedTwo: cardValue });  //assign clicked card to flippedTwo
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
                    {this.state.deck.map(data => (
                        <Card 
                            key={data} 
                            keyProp={data}
                            src={data} 
                            cardId={data.substr(14).slice(0, -13)} //e.g. Ace1, Ace2    
                            value={data.substr(14).slice(0, -14)}  //e.g. Ace, Ace
                            ref={data.substr(14).slice(0, -14)}  //e.g. Ace, Ace
                            handleFlip={this.handleFlip}
                            matchFound={this.state.matchFound}
                            flippedCards={this.state.flippedCards}
                        />
                        
                    ))}

                </div>
            </React.Fragment>
        )
    }


}

export default Board;