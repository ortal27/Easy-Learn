import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Details from './components/Details';
import Cards from './components/Cards';

function App() {
  return (
     <div>
        <Menu />
        <h2>Select the correct answer for each card</h2>
        <Cards 
          cards={{card1:"Affect", card2:"Break", card3:"Advice", card4:"Bare", style: "LeftCards"}}
        />
        <Cards 
          cards={{card1: "להשפיע", card2: "להפר", card3: "עצה", card4: "חשוף", style: "RightCards"}}
        />
        <Details />
    </div>
  );
}

export default App;