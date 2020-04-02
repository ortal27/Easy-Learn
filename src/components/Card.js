import React from 'react';

function Card(props){
        return(
        <div className= {props.style}>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Card;