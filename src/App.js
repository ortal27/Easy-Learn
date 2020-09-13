import React from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen'
import Toolbar from './components/Toolbar/Toolbar';
import Details from './components/BoxDetail/Details';
import List from './components/ListCards/List';
import AboutGame from './components/Toolbar/ToolbarProps/AboutGame';
import ShereIcons from './components/Toolbar/ToolbarProps/ShereIcons';
import Contact from './components/Toolbar/ToolbarProps/Contact';
import axios from 'axios';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import SubmissionAlert from './components/SubmissionAlert/SubmissionAlert';
import MainEl from './components/MainEl/MainEl'; 
import axiosRes from './axios-results';
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
        words: [],
        translations: [],
        submit: false,
        hours: 0,
        minutes: 0,
        seconds: 0,
        match: {
          right: "",
          left: ""
        },
        cardsPairs: [],
        showSideDrawer: false,
        submissionAlert: false,
      }

      // this.aboutData = AboutData.map((data) => <AboutGame key={data.id} data={data} xClick={this.aboutClick.bind(this)} />)
      this.icons = <ShereIcons/>
      this.dataContact = <Contact xContact={this.contact.bind(this)}/>
      this.toolbar = <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} about={this.aboutClick.bind(this)} shere={this.shereOver.bind(this)} contact={this.contact.bind(this)}/>
    }
  
  startClicked(name) {
    this.setState(state => {
      return {
        name,
        welcomeScreenShown: false
      }
    })
    setInterval(() => {
      return this.setState((state, props) =>{
        return{
          seconds: state.seconds === 59 ? 0 : state.seconds+1,
          minutes: state.seconds === 59 ? state.minutes+1 : state.minutes,
          hours: state.minutes === 59 ? state.hours+1 : state.hours
        };
      })
    }, 1000);
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
    
    axios.get('https://react-easy-learn.firebaseio.com/cards.json')
    .then((response) => {
      const responseWords = [];
      const responseTranslations = [];
      const res = Object.values(response.data);
      res.map(item => {
        responseWords.push({name: item.word, clicked: false});
        responseTranslations.push({name: item.translation, clicked: false});
      })
      this.setState(state =>{
        return{
          words: shuffle(responseWords),
          translations: shuffle(responseTranslations)
        }
      });
    });
  }
  
  //TODO: make the crad pick only ones
  
  onclickedCard = async (listName, cardObject) => {
    console.log("The listName is ", listName)
    console.log("the cardObject is:" , cardObject)
    
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
      
      this.state.cardsPairs.push({cardsPairs: currMatch});
      this.setState({match: {right: "", left: ""}});
      
      console.log(this.state.cardsPairs, "pairs", this.state.cardsPairs.length);
      console.log(this.state.match, "match");
    }
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
  
  verifySubmission(){
    const numOfCards = this.state.words.length;
    const numOfPairs = this.state.cardsPairs.length;
    if(numOfCards !== numOfPairs){
      this.setState({submissionAlert: true});
    }
    else{
      alert("Well Done!");
      const game = {
        userName: this.state.name,
        userSolution: this.state.cardsPairs
      }
      axiosRes.post('/result.json', game)
        .then( response => console.log("Send to server"))
        .catch(error => console.log("Error is been found!"));
    }
    

  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler =() => {
    this.setState( ( prevState ) => {
        return{ showSideDrawer: !prevState.showSideDrawer };
    });
  } 
  
  continueHandeleClick = (res) => {
    this.setState({submissionAlert: false});
    if(res === 'yes'){
      console.log("The user want to continue to result.");
      
    }
  }
  
  render(){
    const lists = [
      <List 
        items = {this.state.words}  
        onclicked={this.onclickedCard.bind(this)}
        color="green"
        language="English"
      />,
      <List 
        color="red"
        items = {this.state.translations} 
        onclicked={this.onclickedCard.bind(this)}
        language="Hebrew"
      />,
    ];
    let submissionAlert = null;
    if(this.state.submissionAlert){
      submissionAlert = <SubmissionAlert  continueClick={this.continueHandeleClick}/>;
    }
    return (
       <div>
          {this.state.welcomeScreenShown && <WelcomeScreen about={this.aboutClick.bind(this)} onStartClicked={this.startClicked.bind(this)} name={this.state.name}/>}
          {this.toolbar}
          <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHandler}
          />
          {!this.state.welcomeScreenShown && <Details name={this.state.name} seconds={this.state.seconds}
           minuts={this.state.minutes} hours={this.state.hours} />}

          {!this.state.welcomeScreenShown && <MainEl  clicked={this.verifySubmission.bind(this)} /> }
          {!this.state.welcomeScreenShown && lists[0]}
          {!this.state.welcomeScreenShown && lists[1]}
          {this.state.isAboutClicked && this.aboutData}
          {this.state.iconsOver && this.icons}
          {this.state.isContact && this.dataContact}
          {submissionAlert}
          
      </div>
    );
  }
}

export default App;