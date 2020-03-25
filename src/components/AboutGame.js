import React from 'react';

function AboutGame(){
    console.log("test");
    return(
        <div className="AboutGame">
            <button className="XButton">X</button>
            <h2>Welcome to Word Games!</h2>
            <p>The meaning of our game is to learn English in fun way.<br />
                In our game you can set your level, time and number of cards in each game.<br />
                This game is suitable for any age.
            </p>
            <h1>Let's start to play</h1>
        </div>
    );
}
export default AboutGame;
