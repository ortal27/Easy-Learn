import React from 'react';

function Cards(){
    return(
        <div className="Cards">
            <h2>Select the correct answer for each card</h2>
            <ul className="LeftCards">
                <li>Affect</li>
                <li>Break</li>
                <li>Advice</li>
                <li>Bare</li>
            </ul>
            <ul className="RightCards">
                <li>להשפיע</li>
                <li>להפר</li>
                <li>עצה</li>
                <li>חשוף</li>
            </ul>
        </div>
    );
}

export default Cards;