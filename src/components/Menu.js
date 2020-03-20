import React from 'react';

function Menu(){
    return(
        <header>
            <ul className='Menu'>
                <li className="Logo"><a href="#Home">Words Game</a></li>
                <li><a href="#Shere">shere us</a></li>
                <li><a href="#Contact">Contact us</a></li>
                <li><a href="#Settings">Settings game</a></li>
                <li><a href="#About">About game</a></li>            
            </ul>
        </header>
    );
}

export default Menu;