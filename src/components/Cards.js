import React from 'react';

function Cards(props){
    return(
        <div className="Cards">
            <ul className={props.cards.style}>
                <li>{props.cards.card1}</li>
                <li>{props.cards.card2}</li>
                <li>{props.cards.card3}</li>
                <li>{props.cards.card4}</li>
            </ul>
        </div>
    );
}

export default Cards;