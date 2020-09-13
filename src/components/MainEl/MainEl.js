import React from 'react';
import './MainEl.css';

const elements = (props) => {
    return(
        <div className="MainEl">
            <h2>Select the correct answer for each card</h2>
            <button className="SubmitButton" onClick={props.clicked}>Submit</button>
        </div>
    );
}

export default elements;