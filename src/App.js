import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Details from './components/Details';
import List from './components/List';
import CardsData from './CardsData';

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

function App() {
  const suffled = shuffle(CardsData);
  const words = suffled.map((item) => item.word)
  const translations = suffled.map((item) => item.translation)
  return (
     <div>
        <Menu />
        <h2>Select the correct answer for each card</h2>
        <List
          items = {shuffle(words)}
          style = "LeftList" />
        <List
          items = {shuffle(translations)}
          style = "RightList"/>

        {/* {cardsComponents} */}

        <Details />
    </div>
  );
}

export default App;