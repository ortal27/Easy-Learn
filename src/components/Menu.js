import React from 'react';

class Menu extends React.Component{
    render(){
        let header = (
            <header>
                <ul className='Menu'>
                    <li className="Logo"><a href="#Home">Easy-Learn Game</a></li>
                    <li onMouseOver={this.props.shere}><a href="#Share" >Share us</a></li>
                    <li onClick={this.props.contact}><a href="#Contact">Contact us</a></li> 
                    <li><a href="#Settings">Settings game</a></li>
                    <li onClick={this.props.about}><a href="#About">About game</a></li> 
                </ul>
            </header> )
        
        return(
            <div>
                {header}                
            </div>
        )
    }
}

export default Menu;
