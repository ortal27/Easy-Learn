import React from 'react';
import './ToolbarProps.css';

function AboutGame (props){
    return(
        <div className={"ToolbarProps"} >
            {/* <button className="XButton" checked={props.data.display} onClick={props.xClick}>{props.data.button}</button> */}
            <h2>Welcome to Easy-Learn Game!</h2>
            <p>The meaning of our game is to learn English in fun way.In our game you can set your level, time and number of cards in each game.This game is suitable for any age.</p>
            <h1>Lets start to play.</h1>
        </div>
    );
}

export default AboutGame;
