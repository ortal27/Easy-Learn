import React from 'react';
import AboutData from './AboutData';
import AboutGame from './AboutGame';
import ShereIcons from './ShereIcons';
import Contact from './Contact';

class Menu extends React.Component{
    constructor(){
        super()
        this.state = {
            data: [],
            icons: undefined,
            contact: undefined
        }
        this.aboutClick = this.aboutClick.bind(this)
        this.xClick = this.xClick.bind(this)
        this.shereOver = this.shereOver.bind(this)
        this.contact = this.contact.bind(this)
        this.xContact = this.xContact.bind(this)
    }
    
    aboutClick(){
        this.setState(state => {
            const about = AboutData.map((data) => <AboutGame key={data.id} data={data} xClick={this.xClick} /> )
            return{
                data: about
            }
        })
    }
    xClick() {
        this.setState(prevState => {
            const empty = []
            return{
                data: empty
            }
        })
    }
    shereOver(){
        this.setState(prevState => {
            const data = <ShereIcons/>
            return{
                icons: data
            }
        })
    }
    contact(){
        this.setState(prevState => {
            const content = <Contact xContact={this.xContact}/>
            return{
                contact: content
            }
        })
    }

    xContact(){
        this.setState( prevState =>{
            const empty = undefined
            return{
                contact: empty
            }
        })
    }
    // TODO: contact box, settings
    render(){
        let header = (
            <header>
                <ul className='Menu'>
                    <li className="Logo"><a href="#Home">Words Game</a></li>
                    <li onMouseOver={this.shereOver}><a href="#Shere" >shere us</a></li>
                    <li onClick={this.contact}><a href="#Contact">Contact us</a></li> 
                    <li><a href="#Settings">Settings game</a></li>
                    <li onClick={this.aboutClick}><a href="#About">About game</a></li> 
                </ul>
            </header> )
        let body;
        let drop;
        if (this.state.data.length > 0) {
            console.log(this.state.data);
            body = this.state.data
        }
        if(!this.icons){
            drop = this.state.icons
        }
        let dataContact;
        if(!this.dataContact){
           dataContact = this.state.contact 
           console.log("HI");

        }
        return(
            <div>
                {header}
                {body}
                {drop}
                {dataContact}
                
            </div>
        )
    }
}


export default Menu;
