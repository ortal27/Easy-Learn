import React from 'react';
import './NavigationItems.css';
import { Route } from 'react-router-dom';
import AboutGame from '../../Toolbar/ToolbarProps/AboutGame';
import Contact from '../../Toolbar/ToolbarProps/Contact';
import Share from '../../Toolbar/ToolbarProps/ShereIcons';
import NavigationItem from './NavigationItem/NavigationItem';


class NavigationItems extends React.Component{
    state = {
        navigation: {
            home: {
                name: 'Home',
                path: '/',
                exact: true
            },
            about: {
                name: 'About game',
                path: '/aboutGame',
                exact: false
            }, 
            contact: {
                name: 'Contact us',
                path: '/contact',
                exact: false
            }, 
        },
    }
    
    async componentDidUpdate(){
        if( (this.state.navigation.home.path === '/' && this.props.currPath === '/game' ) || 
            (this.state.navigation.home.path === '/game' && this.props.currPath === '/game-result') || 
            (this.state.navigation.home.path === '/game-result' && this.props.currPath === '/') ){

            const updatedNavigation = {...this.state.navigation};
            const updatedHomeNav = updatedNavigation.home;
            
            updatedHomeNav.path = this.props.currPath;  
            updatedNavigation.home = updatedHomeNav;
            
            await this.setState({navigation: updatedNavigation});        
        }
    }

    render(){
        const navigationsArray = [];
        for( let key in this.state.navigation ){
            navigationsArray.push({
                id: key,
                config: this.state.navigation[key]
            });
        }
        let navigation = (
            <ul className="NavigationItems">
                {navigationsArray.map(navigationItem => (
                    <NavigationItem 
                        key={navigationItem.id}
                        name={navigationItem.config.name}
                        path={navigationItem.config.path}
                        exact={navigationItem.config.exact}
                    />
                ))}
            </ul>
        );

        return(
            <div>
                {navigation}
                <Route path="/aboutGame" component={AboutGame}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/shrare" component={Share}/>
            </div>
        );
    }
}

export default NavigationItems;