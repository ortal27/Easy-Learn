import React from 'react';
import './GameResult.css';
import Table from '../UI/Table/Table';
import Button from '../UI/Button /Button';
import { Redirect } from 'react-router-dom';

class GameResult extends React.Component{
    state = {
        startOver: false
    }
    onClickHandler = () => {
        this.setState({startOver: true});
    }
    render(){
        let startOver = null;
        const name = localStorage.getItem('userName');
        const cards = JSON.parse(localStorage.getItem('cardsObj'));
        let correctAnswers = localStorage.getItem('userCorrectAnswers');
        let wrongAnswers = localStorage.getItem('userWrongAnswers');
        let cardsPairsLength = localStorage.getItem('lengthOfOriginCards');
        
        const seconds = localStorage.getItem('time-seconds');
        const minutes = localStorage.getItem('time-minutes');
        const hours = localStorage.getItem('time-hours');

        let title = '';
        if(correctAnswers === cardsPairsLength){
            title = 'Well done! Answers are correct :)';
        }
        else if(correctAnswers >= (cardsPairsLength / 2)){
            title = 'Good job! More work and you will do it ;)';
        }
        else{
            title = 'Oh no.. The result is not good! :(';
        }
        if(this.state.startOver) {
            localStorage.removeItem('userCardsPairs');
            startOver = <Redirect to="/" />
        }
    
        return(
            <div className="GameResult">
                {startOver}
                <h1>{title}</h1>
                <ul>
                    <li>User Name: {name}</li>
                    <li>Time: {hours}:{minutes}:{seconds}</li>
                </ul>
                <ul>
                    <li style={{color: 'green', fontWeight: 'bold'}}>Correct Answers: {correctAnswers}</li>
                    <li style={{color: 'red', fontWeight: 'bold'}}>Wrong Answers: {wrongAnswers}</li>
                </ul>
                <Table cards={cards}/>
                <Button clicked={this.onClickHandler}>NEW GAME</Button>
            </div>
        );
    }
}
    

export default GameResult;