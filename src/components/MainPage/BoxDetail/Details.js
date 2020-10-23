import React from 'react';
import './BoxDetail.css';

function Details(props){
    return(
        <div className="BoxDetail">
            <h3>Game details</h3>
            <ul>
                <form>
                    <li>User name:<input disabled={true} type="text" defaultValue={props.name}></input></li>
                    <li className="Timer">Timer: {props.hours}:{props.minuts}:{props.seconds}</li>
                </form>
            </ul>
        </div>
    );
}

export default Details;