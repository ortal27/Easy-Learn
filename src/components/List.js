import React from 'react';
import Card from "./Card";

function Cards(props){
    const cards = props.items.map(item =><Card key={item} name={item} style={props.style}/>)
    return(
        <div className="Cards">
            {cards}
        </div>
    );
}

export default Cards;