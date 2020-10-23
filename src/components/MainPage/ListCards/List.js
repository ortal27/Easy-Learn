import React from 'react';
import Card from "../../Cards/Card";
import './List.css';


function List(props){
    function cardIsClicked(item){
        let border = "black";
        let disabledButton = false;
        let cardInfo = [border, disabledButton];
        if(item.clicked){
            cardInfo[0] = "blue";
            cardInfo[1] = true;
        }
        return cardInfo;
    }

    
    const cards = props.items.map(item =>
        <Card 
            key={item.name} 
            name={item.name} 
            color={props.color}
            onclicked={(name) => props.onclicked(props.language, item)}
            border={(cardIsClicked(item))[0]}
            disabled={(cardIsClicked(item))[1]}
        />)
    return(
        <div className="List">
            {cards}
        </div>
    );
}

export default List;