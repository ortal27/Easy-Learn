import React from 'react';

function AboutGame (props){
    return(
        <div className="AboutGame" >
            <button className="XButton" checked={props.data.display} onClick={props.xClick}>{props.data.button}</button>
            <h2>{props.data.h2}</h2>
            <p>{props.data.p}</p>
            <h1>{props.data.h1}</h1>
        </div>
    );
}

export default AboutGame;
