import React from 'react';

function Details(props){
    return(
        <div className="BoxDetail">
            <h3>Game details</h3>
            <ul>
                <form>
                    <li>User name:<input disabled={true} type="text" defaultValue={props.name}></input></li>
                    <li>Correct answers:<input type="text"></input></li>
                    <li>failures:<input type="text"></input></li>
                    <li className="Time">Timer:</li>
                </form>
            </ul>
        </div>
    );
}

export default Details;