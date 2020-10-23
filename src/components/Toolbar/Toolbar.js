import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import './Toolbar.css';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import { withRouter } from 'react-router-dom';


class Toolbar extends React.Component{
    state = {
        currPath: '/'
    }

    async componentDidUpdate() {
        if(this.state.currPath !== this.props.location.pathname){
            await this.setState({currPath: this.props.location.pathname});
        }
    }
    render(){    
        return(
            <header className={"Toolbar"}> 
                <DrawerToggle clicked={this.props.drawerToggleClicked} />
                <div>Easy-Learn Game</div>
                <nav className={"DesktopOnly"}>
                    <NavigationItems currPath={this.state.currPath}/>
                </nav>
            </header> 
        );
    }
}

export default withRouter(Toolbar);
