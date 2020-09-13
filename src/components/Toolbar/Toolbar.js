import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import './Toolbar.css';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import AboutGame from './ToolbarProps/AboutGame';


class Toolbar extends React.Component{
    state = {
        isAboutClicked: false,
        iconsOver: false,
        isContact: false,
    }

    aboutClick = () => {
        this.setState(state => {
            console.log(" about was clicked")
          return {
            isAboutClicked: !state.isAboutClicked
          }
        })
    }

    render(){
        const about = <AboutGame  />
        
        return(
            <header className={"Toolbar"}> 
                <DrawerToggle clicked={this.props.drawerToggleClicked} />
                <div style={{height: '80%'}}>Easy-Learn Game</div>
                <nav  className={"DesktopOnly"}>
                    <NavigationItems about={this.aboutClick}/>
                </nav>
                {this.state.isAboutClicked ? about : null}
                {/* <li onMouseOver={props.shere}><a href="#Share" >Share us</a></li>
                <li onClick={props.contact}><a href="#Contact">Contact us</a></li> 
                <li><a href="#Settings">Settings game</a></li>
                <li onClick={props.about}><a href="#About">About game</a></li>  */}
            </header> 
        );
    }
}

export default Toolbar;
