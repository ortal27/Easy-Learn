import React from 'react';
import AboutGame from './AboutGame';

function Menu(){
    return(
        <header>
            <ul className='Menu'>
                <li className="Logo"><a href="#Home">Words Game</a></li>
                <li><a href="#Shere">shere us</a></li>
                <li><a href="#Contact">Contact us</a></li>
                <li><a href="#Settings">Settings game</a></li>
                <li onClick={AboutGame}><a href="#About">About game</a></li> 
                <AboutGame/>           
            </ul>
        </header> 
    );
}

export default Menu;
