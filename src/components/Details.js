import React from 'react';

function Details(){
    return(
        <div className="BoxDetail">
            <h3>Game details</h3>
            <ul>
                <li>User name:<input type="text"></input></li>
                <li>Correct answers:<input type="text"></input></li>
                <li>failures:<input type="text"></input></li>
            </ul>
        </div>
    );
}

export default Details;