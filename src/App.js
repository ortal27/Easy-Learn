import React from 'react';
import './App.css';
import Game from './components/Game'
import Menu from './components/Menu';
import Details from './components/Details';
import List from './components/List';
import AboutData from './components/AboutData';
import AboutGame from './components/AboutGame';
import ShereIcons from './components/ShereIcons';
import Contact from './components/Contact';
import axios from 'axios';

// TODO: settings

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

class App extends React.Component {
    constructor(){
      super()
      this.state = {
        welcomeScreenShown: true,
        name: undefined,
        isAboutClicked: false,
        iconsOver: false,
        isContact: false,
        cards: []
      }

      this.aboutData = AboutData.map((data) => <AboutGame key={data.id} data={data} xClick={this.aboutClick.bind(this)} />)
      this.icons = <ShereIcons/>
      this.dataContact = <Contact xContact={this.contact.bind(this)}/>
      this.menu = <Menu about={this.aboutClick.bind(this)} shere={this.shereOver.bind(this)} contact={this.contact.bind(this)}/>
      // this.leftList = <List items = {shuffle(words)} style = "LeftList" />
      // this.rightList= <List items = {shuffle(translations)} style = "RightList"/>
      console.log("The name input is: ", this.state)
  }
  
  startClicked(name) {
    this.setState(state => {
      return {
        name,
        welcomeScreenShown: false
      }
    })
  }

  aboutClick(){
    this.setState(state => {
      return {
        isAboutClicked: !state.isAboutClicked
      }
    })
  }

  shereOver(){
    this.setState(prevState => {
        return{
          iconsOver: !prevState.iconsOver
        }
    })
  }
  contact(){
    this.setState(prevState => {
        return{
            isContact: !prevState.isContact
        }
    })
  }

  componentDidMount(){
    console.log("Ok");
    axios.get('http://127.0.0.1:8080/cards', {})
    .then((response) => {
      this.setState(state =>{
        return{
          cards: response.data
        }
      })
    })
  }

  render(){
    const words = this.state.cards.map((item) => item.word)
    const translations = this.state.cards.map((item) => item.translation)

    return (
       <div>
          {this.state.welcomeScreenShown && <Game about={this.aboutClick.bind(this)} onStartClicked={this.startClicked.bind(this)} name={this.state.name}/>}
          {this.menu}
          {!this.state.welcomeScreenShown && <Details name={this.state.name} />}

          {!this.state.welcomeScreenShown && <h2>Select the correct answer for each card</h2>}
         
          {!this.state.welcomeScreenShown &&
          <List items = {shuffle(words)} style = "LeftList" />}
          {!this.state.welcomeScreenShown &&
          <List items = {shuffle(translations)} style = "RightList"/>}
          {this.state.isAboutClicked && this.aboutData}
          {this.state.iconsOver && this.icons}
          {this.state.isContact && this.dataContact}
          
      </div>
    );
  }
}

export default App;