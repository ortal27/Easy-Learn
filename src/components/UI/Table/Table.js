import React from 'react';
import './Table.css';

const table = (props) => {
    const cards = [];
    for( let key in props.cards ){
        cards.push({
            key: key,
            cardData: props.cards[key]
        });
    }
    const cardsTable = cards.map(card => (
        <tbody key={card.key}>
            <tr>
                <th>{card.cardData.word}</th>
                <th>{card.cardData.translation}</th>
            </tr>
        </tbody>
    ));

    return(
        <table className="Table">
            <tbody>
                <tr className="Title">
                    <th>Word</th>
                    <th>Translation</th>
                </tr>
            </tbody>
            {cardsTable}
        </table>
         
    );
}

export default table;