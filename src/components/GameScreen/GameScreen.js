import React from 'react';
import List from '../MainPage/ListCards/List';
import Details from '../MainPage/BoxDetail/Details';
import axiosRes from '../../axios-results';
import SubmissionAlert from '../SubmissionAlert/SubmissionAlert';
import Button from '../UI/Button /Button';
import './GameScreen.css';
import { Redirect } from 'react-router-dom';

class GameScreen extends React.Component {
    state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      submissionAlert: false,
      match: {
          right: "",
          left: ""
      },
      cardsPairs: [],
      words: [],
      translations: [],
      gameOver: false
    }

    async componentDidMount(){
      const words =  JSON.parse(localStorage.getItem('wordsCards'));
      const translations = JSON.parse(localStorage.getItem('translationsCards'));
      const userCardsPairs = JSON.parse(localStorage.getItem('userCardsPairs'));
      
      if(words && translations){
         await this.setState({
          words: words,
          translations: translations
        });
      }
      if(userCardsPairs !== null){
        await this.setState({cardsPairs: userCardsPairs});
      }
      for(let key in userCardsPairs){
        this.handlerCardClicked(this.state.translations, userCardsPairs[key].cardsPair.right, userCardsPairs[key].cardsPair.right);
        this.handlerCardClicked(this.state.words, userCardsPairs[key].cardsPair.left, userCardsPairs[key].cardsPair.left);
      }
      setInterval(async() => {
        return await this.setState((state) =>{
          return{
            seconds: state.seconds === 59 ? 0 : state.seconds+1,
            minutes: state.seconds === 59 ? state.minutes+1 : state.minutes,
            hours: state.minutes === 59 ? state.hours+1 : state.hours
          };
        })
      }, 1000);
    }

    componentWillUnmount(){
      if(this.state.seconds){
        clearInterval(this.state.seconds);
      }
      if(this.state.minutes){
        clearInterval(this.state.minutes);
      }
      if(this.state.hours){
        clearInterval(this.state.hours);
      }
      localStorage.setItem('time-seconds', this.state.seconds);
      localStorage.setItem('time-minutes', this.state.minutes);
      localStorage.setItem('time-hours', this.state.hours);
    }

    //TODO: make the crad pick only ones 
    onclickedCard = async (listName, cardObject) => {
      
        if(listName === "Hebrew"){
          const leftValue = this.state.match.left;
          const rightValue = this.state.match.right;
          this.handlerCardClicked(this.state.translations, cardObject, rightValue);
          await this.setState({match: {right: cardObject.name, left: leftValue}});  
        }
        if(listName === "English"){
          const rightValue = this.state.match.right;
          const leftValue = this.state.match.left;
          this.handlerCardClicked(this.state.words, cardObject, leftValue);
          await this.setState({match: {right: rightValue, left: cardObject.name}});
        }
        
        if(this.state.match.left !== "" && this.state.match.right !== ""){
          const currMatch = this.state.match;
          const currCardsPairs = [];
          let pairNum = 0;
          for(let key in this.state.cardsPairs){
            currCardsPairs.push({key: key, cardsPair: this.state.cardsPairs[key].cardsPair});
            pairNum++;
          }
          currCardsPairs.push({key: pairNum, cardsPair: currMatch});
          await this.setState({match: {right: "", left: ""}, cardsPairs: currCardsPairs});

        }
         localStorage.setItem('userCardsPairs', JSON.stringify(this.state.cardsPairs));
    }

    handlerCardClicked(array, cardObject, oppositeListCard){
        const currList = array;
        currList.map((item) => {
          if(item.name === cardObject.name || item.name === oppositeListCard){
            item.clicked = !item.clicked;
          }
          return item;
        });
    }

    verifySubmission = () => {
        const numOfCards = this.state.words.length;
        const numOfPairs = this.state.cardsPairs.length;
        if(numOfCards !== numOfPairs){
          this.setState({submissionAlert: true});
        }
        else{
          const game = {
            userName: this.state.name,
            userSolution: this.state.cardsPairs
          }
          axiosRes.post('/result.json', game)
            .then( response => console.log("Send to server"))
            .catch(error => console.log("Error is been found!"));
          this.checkResult();
        }
    }

    continueHandeleClick = (res) => {
        this.setState({submissionAlert: false});
        if(res === 'yes'){
          this.checkResult();
        } 
    }

    checkResult(){
      const userRes = [...this.state.cardsPairs];
      const originCards = JSON.parse(localStorage.getItem("cardsObj"));
      const cards = [];
      for ( let key in originCards ){
        cards.push({
          id: key,
          data: originCards[key]
        });
      }
      let correctPairs = 0; let wrongPairs = 0;
      if(userRes.length !== 0){
        for (let index = 0; index < userRes.length; index++) {
          const element = userRes[index].cardsPair;
          for (let card = 0; card < cards.length; card++) {
            const currCard = cards[card].data;
            if(element.left === currCard.word){
              if(element.right === currCard.translation){
                correctPairs++;
              }
              else{
                wrongPairs++;
              }
            }// End of if condition
          }// End of inner for
        }// End of outer for
      } // End of if condition

      if(cards.length > userRes.length || userRes.length === 0){
        wrongPairs += (cards.length - userRes.length);
      }
      
      this.setState({gameOver: true});
      
      localStorage.setItem('userCorrectAnswers', correctPairs);
      localStorage.setItem('userWrongAnswers', wrongPairs);
      localStorage.setItem('lengthOfOriginCards', cards.length);
      return;
    }
    
    render() {
      let submissionAlert = null;
      let style = null;
      let gameOver = null;

      if(this.state.submissionAlert){
        submissionAlert = <SubmissionAlert continueClick={this.continueHandeleClick}/>;
        style = "FullScreen";
      }
      
      if(this.state.gameOver){
        gameOver = <Redirect to='/game-result' />
      }
      return(
        <React.Fragment >
            {gameOver}
            <div className={style} >
              <div className="GameScreen">
                <h2 className="TitleGame">Select the correct answer for each card</h2>
                <List 
                    items = {this.state.words}  
                    onclicked={this.onclickedCard.bind(this)}
                    color="green"
                    language="English"
                    />
                <List 
                    color="red"
                    items = {this.state.translations} 
                    onclicked={this.onclickedCard.bind(this)}
                    language="Hebrew"
                    />
                <span className="SubmitButton">
                  <Button clicked={this.verifySubmission}>SUBMIT</Button>      
                </span>
                <Details name={this.props.name} seconds={this.state.seconds}
                    minuts={this.state.minutes} hours={this.state.hours} />
              </div>
            </div>
            {submissionAlert}    
        </React.Fragment>
        );
    }
}

export default GameScreen;