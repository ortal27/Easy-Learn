import React from 'react';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import GameScreen from '../GameScreen/GameScreen';
import axios from 'axios';
import './MainPage.css';
import GameResult from '../GameResult/GameResult';

import { Route, Redirect, Switch } from 'react-router-dom';

function shuffle(array){
  let i, j, x;
  for(i = array.length-1; i> 0; i--){
    j = Math.floor(Math.random() * (i+1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}

class MainPage extends React.Component {
  state = {
      welcomeScreenShown: true,
      name: '',
      requestIsDone: false
  }

  componentDidMount(){
    axios.get('https://react-easy-learn.firebaseio.com/cards.json')
    .then((response) => {
      localStorage.setItem('cardsObj', JSON.stringify(response.data));
      const responseWords = [];
      const responseTranslations = [];
      const res = Object.values(response.data);
      res.map(item => {
        responseWords.push({name: item.word, clicked: false});
        responseTranslations.push({name: item.translation, clicked: false});
      })
      const suffledWords = shuffle(responseWords);
      const suffledTranslations = shuffle(responseTranslations);
      localStorage.setItem('wordsCards', JSON.stringify(suffledWords));
      localStorage.setItem('translationsCards', JSON.stringify(suffledTranslations));
    }); 
  }
  
  componentDidUpdate() {
    if(this.props.location.pathname === "/game-result" && !this.state.welcomeScreenShown){
      this.setState({welcomeScreenShown: true});
    }
  }

   startClicked = (name) => {
    this.setState({
        name: name,
        welcomeScreenShown: false
    });
    localStorage.setItem('userName', name);
  }
  
  render(){
    let redirect = null;
    if(!this.state.welcomeScreenShown){
      redirect = <Redirect to='/game' />
    }
    return(
        <div className="MainPage">
            {redirect}
            <Switch>
              <Route path="/game" >
                <GameScreen 
                  name={this.state.name} 
                /> 
              </Route>
              <Route path="/game-result" component={GameResult} />
              <Route path="/" exact >
                <WelcomeScreen onStartClicked={this.startClicked} name={this.state.name}/>
              </Route>  
            </Switch>
        </div>
    );
  }

}

export default MainPage;