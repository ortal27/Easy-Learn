import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Details from './components/Details';
import List from './components/List';
import CardsData from './CardsData';

function App() {
  const words = CardsData.map((item) => item.word)
  const translations = CardsData.map((item) => item.translation)
  return (
     <div>
        <Menu />
        <h2>Select the correct answer for each card</h2>
        <List
          items = {words}
          style = "LeftList" />
        <List
          items = {translations}
          style = "RightList"/>

        {/* {cardsComponents} */}

        <Details />
    </div>
  );
}

export default App;